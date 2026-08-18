import { useState } from 'react';
import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-store.js';

export default function NewTask() {
  const { addTask } = useContext(ProjectsContext);
  const [enteredTask, setEnteredTask] = useState('');

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (enteredTask.trim() === '') {
      return;
    }

    addTask(enteredTask);
    setEnteredTask('');
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      handleClick();
    }
  }

  return (
    <div className="mb-6 flex items-center gap-4">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 rounded-xl border border-[#4364be]/60 bg-[#0f1934]/80 px-4 py-4 text-lg text-white placeholder:text-[#7889b0] outline-none transition-all focus:border-[#7a92ff] focus:shadow-[0_0_0_1px_rgba(122,146,255,0.4)]"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={enteredTask}
      />
      <button
        className="rounded-xl bg-gradient-to-r from-[#4c6df6] to-[#876bf4] px-5 py-4 text-lg font-semibold text-white shadow-[0_10px_20px_rgba(89,98,255,0.35)] transition-transform hover:scale-[1.02]"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
