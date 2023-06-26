import * as React from "react";
import {
  useFloating,
  useClick,
  useDismiss,
  useRole,
  useInteractions,
  useMergeRefs,
  FloatingPortal,
  FloatingFocusManager,
  FloatingOverlay,
} from "@floating-ui/react";

interface UseDialogProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const useDialog = ({ open, setOpen }: UseDialogProps) => {
  const data = useFloating({
    open,
    onOpenChange: setOpen,
  });

  const { context } = data;
  const click = useClick(context);
  const dismiss = useDismiss(context, { outsidePressEvent: "mousedown" });
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
};

type DialogContextProps = ReturnType<typeof useDialog> | null;

const DialogContext = React.createContext<DialogContextProps>(null);

const useDialogContext = () => {
  const context = React.useContext(DialogContext);

  if (!context) {
    throw new Error("Dialog components must be wrapped in <Dialog />");
  }

  return context;
};

interface DialogProps extends UseDialogProps {
  children: React.ReactNode;
}

export const Dialog = ({ children, ...props }: DialogProps) => {
  const dialog = useDialog(props);

  return (
    <DialogContext.Provider value={dialog}>{children}</DialogContext.Provider>
  );
};

export const DialogContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLProps<HTMLDivElement>
>((props, propRef) => {
  const { context: floatingContext, ...context } = useDialogContext();
  const ref = useMergeRefs([context.refs.setFloating, propRef]);

  if (!floatingContext.open) {
    return null;
  }

  return (
    <FloatingPortal>
      <FloatingOverlay
        className="grid place-items-center backdrop-blur"
        lockScroll
      >
        <FloatingFocusManager context={floatingContext}>
          <div
            className="p-16 rounded-2xl bg-indigo-950 overflow-y-auto"
            ref={ref}
            role="dialog"
            aria-modal="true"
            {...context.getFloatingProps(props)}
          >
            {props.children}
          </div>
        </FloatingFocusManager>
      </FloatingOverlay>
    </FloatingPortal>
  );
});

export const DialogClose = React.forwardRef<
  HTMLButtonElement,
  React.ButtonHTMLAttributes<HTMLButtonElement>
>((props, ref) => {
  const { setOpen } = useDialogContext();

  return (
    <button
      aria-label="dialog-close"
      type="button"
      className="p-2 rounded-md text-white hover:bg-slate-500"
      {...props}
      ref={ref}
      onClick={() => setOpen(false)}
    />
  );
});
