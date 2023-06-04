import classNames from "classnames";

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  label: string;
}

export const Textarea = ({ className, label, ...props }: TextareaProps) => {
  return (
    <label className={classNames(className, "flex flex-col mb-4")}>
      {label && <span className="text-sm text-slate-200">{label}</span>}
      <textarea
        className="border border-gray-600 rounded-md px-4 py-2 mt-2 focus:outline-none focus:ring-2 focus:ring-purple-500 bg-transparent text-white w-full"
        {...props}
      />
    </label>
  );
};
