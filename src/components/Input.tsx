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
    <p>
      <label
        htmlFor={id}
        className="block uppercase text-xs text-gray-500 font-bold"
      >
        {label}
      </label>
      <input
        id={id}
        ref={ref}
        {...props}
        className="w-[100%] mb-2 text-md rounded-sm p-2"
      />
    </p>
  );
});

export default InputField;
