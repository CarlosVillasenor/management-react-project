import Input from "./Input.js";
import Textarea from "./Textarea.js";
import Button from "./Button.js";
import Modal from "./Modal.js";
import { useRef, useContext } from "react";
import { ProjectsContext } from "../store/projects-store.js";
import type { Project } from "@/types/common.types.js";
import type { ModalHandle } from "./Modal.js";

function NewProject() {
  const titleRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLTextAreaElement>(null);
  const dueDateRef = useRef<HTMLInputElement>(null);
  const modalRef = useRef<ModalHandle>(null);
  const { addProject } = useContext(ProjectsContext);

  function handleSaveNewProject(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    const enteredTitle = titleRef.current?.value ?? "";
    const enteredDescription = descriptionRef.current?.value ?? "";
    const enteredDueDate = dueDateRef.current?.value ?? "";

    console.log(`Entered Title: ${enteredTitle}, Entered Description: ${enteredDescription}, Due Date: ${enteredDueDate}`);

    // Basic validation.
    if (enteredTitle.trim() === '' || enteredDescription.trim() === '' || enteredDueDate.trim() === '') {
      // Show the error modal.
      modalRef?.current?.open();
      return;
    }

    const newProject: Project = {
      title: enteredTitle,
      description: enteredDescription,
      dueDate: enteredDueDate,
      id: null as unknown as string // This will be generated in the reducer, so we can pass a placeholder here.
    };

    addProject(newProject);
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
          <Input type="text" label="Title" id="title" ref={titleRef} />
          <Textarea label="Description" id="description" ref={descriptionRef} />
          <Input type="date" label="Due Date" id="due-date" ref={dueDateRef} />
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
