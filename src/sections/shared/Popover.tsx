import * as React from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  Placement,
  FloatingPortal,
  FloatingFocusManager,
} from "@floating-ui/react";

interface UsePopoverProps {
  placement?: Placement;
}

function usePopover({ placement = "bottom" }: UsePopoverProps = {}) {
  const [open, setOpen] = React.useState(false);

  const data = useFloating({
    placement,
    open,
    onOpenChange: setOpen,
    whileElementsMounted: autoUpdate,
    middleware: [
      offset(5),
      flip({
        crossAxis: placement.includes("-"),
        fallbackAxisSideDirection: "end",
        padding: 5,
      }),
      shift({ padding: 5 }),
    ],
  });

  const context = data.context;

  const click = useClick(context);
  const dismiss = useDismiss(context);
  const role = useRole(context);

  const interactions = useInteractions([click, dismiss, role]);

  return React.useMemo(
    () => ({
      open,
      setOpen,
      ...interactions,
      ...data,
    }),
    [open, setOpen, interactions, data]
  );
}

type PopoverContextProps = ReturnType<typeof usePopover> | null;

const PopoverContext = React.createContext<PopoverContextProps>(null);

const usePopoverContext = () => {
  const context = React.useContext(PopoverContext);

  if (context == null) {
    throw new Error("Popover components must be wrapped in <Popover />");
  }

  return context;
};

interface PopoverProps extends UsePopoverProps {
  children: React.ReactNode;
}

export const Popover = ({ children, ...props }: PopoverProps) => {
  const popover = usePopover(props);

  return (
    <PopoverContext.Provider value={popover}>
      {children}
    </PopoverContext.Provider>
  );
};

interface PopoverTriggerProps {
  children: React.ReactNode;
}

export const PopoverTrigger = React.forwardRef<
  HTMLElement,
  React.HTMLProps<HTMLElement> & PopoverTriggerProps
>(function PopoverTrigger({ children, ...props }, propRef) {
  const context = usePopoverContext();
  const childrenRef = (children as any).ref;
  const ref = useMergeRefs([context.refs.setReference, propRef, childrenRef]);

  if (!React.isValidElement(children)) {
    throw new Error(
      "PopoverTrigger must be passed a single valid child element"
    );
  }

  return React.cloneElement(
    children,
    context.getReferenceProps({
      ref,
      ...props,
      ...children.props,
      "data-state": context.open ? "open" : "closed",
    })
  );
});

export const PopoverContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>(function PopoverContent({ style, ...props }, propRef) {
  const { context: floatingContext, ...context } = usePopoverContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) return null;

  return (
    <FloatingPortal>
      <FloatingFocusManager context={floatingContext}>
        <div
          ref={ref}
          style={{ ...context.floatingStyles, ...style }}
          {...context.getFloatingProps(props)}
        >
          {props.children}
        </div>
      </FloatingFocusManager>
    </FloatingPortal>
  );
});
