// A modal component that can be used to display content in a modal dialog.
// It uses the HTML <dialog> element and is rendered using a portal to a div with the id
// "modal-root".
// The component exposes an 'open' method to the parent component through the use of a ref,
// allowing the parent to control when the modal is opened.

import { useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from './Button.jsx';

function Modal({ children, buttonCaption, ref }) {
  const dialog = useRef();

  // Expose 'open' method to parent component with the ref.
  useImperativeHandle(ref, () => {
    return {
      open() {
        // Open the modal (showModal is a built-in method for dialog elements).
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
    >
      {children}
      <form method="dialog" className="mt-4 text-right">
        <Button>{buttonCaption}</Button>
      </form>
    </dialog>,
    document.getElementById('modal-root')
  );
}

export default Modal;
