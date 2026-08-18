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
  const { addProject, stopAddProject } = useContext(ProjectsContext);

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

  function handleCancelProject() {
    // Clear the input fields.
    if (titleRef.current) titleRef.current.value = '';
    if (descriptionRef.current) descriptionRef.current.value = '';
    if (dueDateRef.current) dueDateRef.current.value = '';

    // Stop adding the project.
    stopAddProject();
  }

  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2>Invalid Input</h2>
        <p>All fields are required. Please fill in all fields.</p>
        <p>Please make sure all fields are filled in correctly.</p>
      </Modal>

      <div className="flex h-full w-full items-start justify-center px-4 py-12 md:py-16">
        <div className="w-full max-w-[560px] rounded-[18px] border border-[#4682ff]/50 bg-[rgba(7,17,32,0.82)] p-5 shadow-[0_0_0_1px_rgba(118,150,255,0.15),0_0_18px_rgba(68,96,224,0.25)] backdrop-blur-sm">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3 text-[#eff4ff]">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#7b9aff]/60 bg-[rgba(55,73,126,0.22)] text-[#dfeaff] shadow-[inset_0_0_14px_rgba(148,172,255,0.12)]">
                <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h4.3l1.7 2h5.9A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-12A2.5 2.5 0 0 1 4 16.5v-9Z" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-[#f2f6ff]">Add Project</h2>
            </div>

            <button
              type="button"
              aria-label="Close"
              onClick={handleCancelProject}
              className="flex h-8 w-8 items-center justify-center rounded-md text-xl font-light text-[#dfe7ff]/80 transition-colors hover:text-white"
            >
              ×
            </button>
          </div>

          <div className="space-y-4 pt-2">
            <Input
              type="text"
              label="Title"
              id="title"
              ref={titleRef}
              placeholder="Enter project title..."
            />
            <Textarea
              label="Description"
              id="description"
              ref={descriptionRef}
              placeholder="Enter project description..."
            />
            <div className="relative">
              <Input
                type="date"
                label="Due Date"
                id="due-date"
                ref={dueDateRef}
                placeholder="mm/dd/yyyy"
                className="pr-11"
              />
              <span className="pointer-events-none absolute right-3 top-[60%] flex -translate-y-1/2 items-center text-[#dfe7ff]/80">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M8 2v4M16 2v4M3.5 9.5h17M5 5.5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" />
                </svg>
              </span>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-4">
            <Button simple type="button" onClick={handleCancelProject}>Cancel</Button>
            <Button type="button" onClick={handleSaveNewProject}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default NewProject;
