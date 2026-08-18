// A simple input component that can be used throughout the app. 
// Has a "textarea" prop that changes the input to a textarea.

type InputFieldProps = {
  label: string;
  id: string;
} & React.InputHTMLAttributes<HTMLInputElement>;

const InputField = ((
  { label, id, ...props }: InputFieldProps, ref: React.Ref<HTMLInputElement>
): React.ReactNode => {
  return (
    <div className="space-y-1.5">
      <label
        htmlFor={id}
        className="block text-[11px] font-semibold uppercase tracking-[0.14em] text-[#dfe7ff]/80"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        {...props}
        className="w-full rounded-lg border border-[#4d6ecf]/60 bg-[rgba(18,28,48,0.9)] px-3 py-3 text-[15px] text-[#ecf3ff] outline-none transition-all placeholder:text-[#8aa2d6]/80 focus:border-[#8fa8ff] focus:shadow-[0_0_0_1px_rgba(143,168,255,0.4),0_0_12px_rgba(93,116,255,0.2)]"
        style={{ colorScheme: 'dark' }}
      />
    </div>
  );
});

export default InputField;
