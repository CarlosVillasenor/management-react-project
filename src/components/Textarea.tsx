import { forwardRef } from "react";

type TextareaFieldProps = {
  label: string;
  id: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextareaField = forwardRef<
  HTMLTextAreaElement,
  TextareaFieldProps
>(({ label, id, ...props }, ref) => {
  return (
    <p>
      <label
        htmlFor={id}
        className="block uppercase text-xs text-gray-500 font-bold"
      >
        {label}
      </label>
      <textarea
        id={id}
        ref={ref}
        {...props}
        className="w-[100%] mb-2 h-20 text-lg rounded-sm"
      />
    </p>
  );
});

export default TextareaField;
