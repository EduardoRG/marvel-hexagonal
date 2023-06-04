import classNames from "classnames";

type ButtonVariants = "default" | "primary" | "text";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: ButtonVariants;
}

const variants: Record<ButtonVariants, string> = {
  default: "bg-slate-600 text-white hover:bg-slate-500",
  primary: "bg-purple-600 text-white hover:bg-purple-500",
  text: "text-white hover:bg-purple-500",
};

export const Button = ({
  className,
  children,
  variant = "default",
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(
        "px-4 py-2 rounded-md",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};
