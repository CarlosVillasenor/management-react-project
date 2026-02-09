// A component that allows the user to create a new task.
// It has an input field for the user to enter the task and a button to add the task.

import { useState } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-store.jsx';

export default function NewTask() {
  const { addTask } = useContext(ProjectsContext);
  const [enteredTask, setEnteredTask] = useState('');

  // Function to handle input change
  function handleChange(event) {
    // Update the entered task state
    setEnteredTask(event.target.value);
  }

  // Function to handle adding a new task
  function handleClick() {
    // Prevent adding empty tasks
    if (enteredTask.trim() === '') {
      return;
    }

    addTask(enteredTask);
    setEnteredTask('');
  }

  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        onChange={handleChange}
        value={enteredTask}
      />
      <button
        className="text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
