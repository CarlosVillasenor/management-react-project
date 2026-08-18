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
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#dfe7ff]/80"
      >
        {label}
      </label>
      <textarea
        id={id}
        ref={ref}
        {...props}
        className="h-24 w-full resize-none rounded-lg border border-[#4d6ecf]/60 bg-[rgba(18,28,48,0.9)] px-3 py-3 text-[15px] text-[#ecf3ff] outline-none transition-all placeholder:text-[#8aa2d6]/80 focus:border-[#8fa8ff] focus:shadow-[0_0_0_1px_rgba(143,168,255,0.4),0_0_12px_rgba(93,116,255,0.2)]"
        style={{ colorScheme: 'dark' }}
      />
    </div>
  );
});

export default TextareaField;
