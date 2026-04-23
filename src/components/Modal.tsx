// A modal component that can be used to display content in a modal dialog.
// It uses the HTML <dialog> element and is rendered using a portal to a div with the id
// "modal-root".
// The component exposes an 'open' method to the parent component through the use of a ref,
// allowing the parent to control when the modal is opened.

import { forwardRef, useImperativeHandle, useRef } from 'react';
import { createPortal } from 'react-dom';
import Button from '@/components/Button.js';

export type ModalHandle = {
  open(): void;
};

type ModalProps = React.HTMLAttributes<HTMLDialogElement> & {
  children: React.ReactNode;
  buttonCaption: string;
  open?: boolean;
};

const Modal = forwardRef<ModalHandle, ModalProps>(
  function Modal({ children, buttonCaption, open, ...props }, ref) {
    const dialogRef = useRef<HTMLDialogElement>(null);

    // Expose 'open' method to parent component with the ref.
    useImperativeHandle(ref, () => ({
      open(): void {
        dialogRef.current?.showModal();
      },
    }));

    return createPortal(
      <dialog
        ref={dialogRef}
        className="backdrop:bg-stone-900/90 p-4 rounded-md shadow-md"
        {...props}
      >
        {children}
        <form method="dialog" className="mt-4 text-right">
          <Button>{buttonCaption}</Button>
        </form>
      </dialog>,
      document.getElementById('modal-root')!
    );
  }
);

export default Modal;
