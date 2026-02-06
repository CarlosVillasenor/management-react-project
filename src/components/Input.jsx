// A simple input component that can be used throughout the app. 
// Has a "textarea" prop that changes the input to a textarea.

function Input({ textarea, label, htmlFor, ref, ...props }) {
  return (
    <p>
      <label htmlFor={htmlFor} className="block uppercase text-gray-500 font-bold" >
        {label}
      </label>
      {
      textarea ? 
      <textarea {...props} ref={ref} className="w-[100%] mb-2 h-20 text-lg rounded-sm"/> :
      <input {...props} ref={ref} id={htmlFor} className="w-[100%] mb-2 text-md rounded-sm p-2" />
      }
    </p>
  );
}

export default Input;
