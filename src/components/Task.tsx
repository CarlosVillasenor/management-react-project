import { useContext } from 'react';
import NewTask from './NewTask.jsx';
import { ProjectsContext } from '../store/projects-store.js';
import type { Task } from '../types/common.types.js';

function Tasks() {
  const { tasks, deleteTask } = useContext<React.ContextType<typeof ProjectsContext>>(ProjectsContext) as {
    tasks: Task[];
    deleteTask: (id: string) => void;
  };

  return (
    <section className="pt-4">
      <div className="mb-6 flex items-center gap-3 text-3xl font-bold text-[#eef4ff]">
        <svg viewBox="0 0 24 24" className="h-7 w-7 text-[#c7d5ff]" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M8 6.5h11M8 12h11M8 17.5h11M4 6.5h.01M4 12h.01M4 17.5h.01" />
        </svg>
        <h2>Tasks</h2>
      </div>

      <NewTask />

      {tasks.length === 0 && (
        <div className="mt-16 flex flex-col items-center justify-center gap-4 text-[#c6d2f4]">
          <svg viewBox="0 0 64 64" className="h-16 w-16 opacity-80" fill="none" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M18 23.5h28M18 32h28M18 40.5h20M18 18.5V48a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V18.5a2 2 0 0 0-2-2H20a2 2 0 0 0-2 2Z" />
            <path d="M24 12.5V8m16 4.5V8" />
          </svg>
          <p className="text-2xl font-medium tracking-tight text-[#dfe7ff]/90">
            This project does not have any tasks yet.
          </p>
        </div>
      )}

      {tasks.length > 0 && (
        <ul className="mt-8 space-y-3">
          {tasks.map((task) => (
            <li key={task.id} className="flex items-center justify-between gap-4 rounded-xl border border-[#3a4f8d]/40 bg-[#0e1932]/80 p-4 text-lg text-[#edf3ff] shadow-[inset_0_0_10px_rgba(92,114,195,0.08)]">
              <span>{task.text}</span>
              <button
                className="text-[#b5c5ee] transition-colors hover:text-[#ff7b8c]"
                onClick={() => deleteTask(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default Tasks;
