// A simple button component that can be used throughout the app.
// Has a "simple" prop that changes the styling of the button.

function Button({simple, ...props}) {
  return (
    <button
    {...props}
    className={`${simple ? "text-gray-700" : "bg-gray-500 text-gray-50"} rounded-md px-6 py-1 font-bold`}>
      {props.children}
    </button>
  );
}

export default Button;
