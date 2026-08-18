import Tasks from "./Task.jsx";
import { useContext } from "react";
import { ProjectsContext } from "../store/projects-store.js";

function SelectedProject() {
  interface Project {
    id: string;
    title: string;
    description: string;
    dueDate: string;
  }

  interface ProjectsContextValue {
    currentSelectedProject: Project | undefined;
    deleteProject: () => void;
  }

  const { currentSelectedProject, deleteProject }: ProjectsContextValue = useContext(ProjectsContext);

  if (!currentSelectedProject) {
    return <p className="p-10 text-slate-300">Project not found.</p>;
  }

  const formattedDate = new Date(currentSelectedProject.dueDate).toLocaleDateString('en-GB', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="flex-1 px-10 py-8 md:px-12 lg:px-16">
      <header className="mb-8 border-b border-[#3a5aa9]/40 pb-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-white md:text-6xl">
              {currentSelectedProject.title}
            </h1>
            <div className="mt-5 flex items-center gap-3 text-[#bfd3ff]">
              <svg viewBox="0 0 24 24" className="h-5 w-5 opacity-80" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M8 2v4M16 2v4M3.5 9.5h17M5 5.5h14a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-11a2 2 0 0 1 2-2Z" />
              </svg>
              <span className="text-xl font-medium text-[#dfe7ff]/80">{formattedDate}</span>
            </div>
          </div>

          <button
            onClick={deleteProject}
            className="inline-flex items-center gap-2 rounded-xl border border-[#f0617b]/60 bg-[#340f1b]/80 px-4 py-2 text-base font-medium text-[#ff9aaa] shadow-[0_0_20px_rgba(240,97,123,0.15)] transition-colors hover:bg-[#421524]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M4 7h16M9 7V4h6v3M6 7l1 12h10l1-12" />
            </svg>
            Delete
          </button>
        </div>

        <p className="mt-8 whitespace-pre-wrap text-lg leading-7 text-[#dfe7ff]/75">
          {currentSelectedProject.description}
        </p>
      </header>

      <Tasks />
    </div>
  );
}

export default SelectedProject;
