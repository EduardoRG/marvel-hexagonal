import classNames from "classnames";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
}

export const Input = ({ className, label, ...props }: InputProps) => {
  return (
    <label className={classNames(className, "flex flex-col")}>
      {label && <span className="text-sm text-slate-200">{label}</span>}
      <input
        className="border border-gray-600 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white w-full"
        {...props}
      />
    </label>
  );
};
