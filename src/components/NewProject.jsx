// A component that allows the user to create a new project.
// It uses the Input and Button components to create a form for the user to fill out.
// It also uses the Modal component to show an error message if the user tries to save a project
// with invalid input.

import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";
import { useRef } from "react";

function NewProject({ onAddProject }) {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const dueDateRef = useRef();
  const modalRef = useRef();

  function handleSaveNewProject(event) {
    event.preventDefault();
    const enteredTitle = titleRef.current.value;
    const enteredDescription = descriptionRef.current.value;
    const enteredDueDate = dueDateRef.current.value;

    console.log(enteredTitle, enteredDescription, enteredDueDate);

    // Basic validation.
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      // Show the error modal.
      modalRef.current.open();
      return;
    }

    // Pass the new project data to the parent component.
    onAddProject({
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate
    });
  }

  return (
    <>  
      <Modal ref={modalRef} buttonCaption="Close" >
        <h2>Invalid Input</h2>
        <p>All fields are required. Please fill in all fields.</p>
        <p>Please make sure all fields are filled in correctly.</p>
      </Modal>

      <div className="w-[35rem] bg-stone-200 rounded-md px-4 py-4 h-fit">
        <div>
          <Input type="text" label="Title" htmlFor="title" ref={titleRef} />
          <Input label="Description" htmlFor="description" textarea ref={descriptionRef} />
          <Input type="date" label="Due Date" htmlFor="due-date" ref={dueDateRef} />
        </div>
        <menu className="flex gap-4 mt-4 w-[100%] justify-end">
          <li><Button simple>Cancel</Button></li>
          <li><Button onClick={handleSaveNewProject}>Save</Button></li>
        </menu>
      </div>
    </>
  );
}

export default NewProject;
