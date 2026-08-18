// A simple button component that can be used throughout the app.
// Has a "simple" prop that changes the styling of the button.

import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  simple?: boolean;
};

function Button({ simple = false, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={[
        'rounded-xl px-5 py-2.5 text-base font-semibold transition-all',
        simple
          ? 'bg-transparent text-[#dfe7ff]/80 hover:text-white'
          : 'bg-gradient-to-r from-[#4a6cf7] via-[#5a72f9] to-[#7b69f5] text-white shadow-[0_0_18px_rgba(91,110,255,0.35)] hover:brightness-110'
      ].join(' ')}
    >
      {props.children}
    </button>
  );
}

export default Button;
