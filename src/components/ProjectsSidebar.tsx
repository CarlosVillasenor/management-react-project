import { useContext } from 'react';
import { ProjectsContext } from '../store/projects-store.js';

function ProjectsSidebar() {
  const { startAddProject, selectProject, projects, selectedProjectId } = useContext(ProjectsContext) as {
    startAddProject: () => void;
    selectProject: (id: string) => void;
    projects: { id: string; title: string }[];
    selectedProjectId: string | null | undefined;
  };

  return (
    <aside className="w-[300px] shrink-0 border-r border-[#3d5fb6]/40 bg-[linear-gradient(180deg,rgba(11,17,35,0.9),rgba(10,15,28,0.8))] px-6 py-8 shadow-[inset_-1px_0_0_rgba(84,128,255,0.18)]">
      <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-xl border border-[#5ea1ff]/30 bg-[linear-gradient(180deg,rgba(15,22,40,0.9),rgba(20,28,52,0.8))] shadow-[inset_0_0_20px_rgba(83,126,255,0.12)]">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-[#a9d3ff]" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h4.3l1.7 2h5.9A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-12A2.5 2.5 0 0 1 4 16.5v-9Z" />
        </svg>
      </div>

      <h2 className="mb-8 text-sm font-bold uppercase tracking-[0.18em] text-[#dfe7ff]/80">Your Projects</h2>

      <button
        className="mb-8 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#4e6ef8] via-[#4d68ed] to-[#7a69f5] px-4 py-3 text-base font-semibold text-white shadow-[0_8px_18px_rgba(84,99,255,0.35)] transition-transform hover:scale-[1.01]"
        onClick={startAddProject}
      >
        <span className="text-2xl leading-none">+</span>
        <span>Add Project</span>
      </button>

      <ul className="space-y-3">
        {projects.map((project) => {
          const isSelected = project.id === selectedProjectId;

          return (
            <li key={project.id}>
              <button
                className={[
                  'flex w-full items-center gap-3 rounded-xl border px-3 py-2.5 text-left text-base font-medium transition-colors',
                  isSelected
                    ? 'border-[#7ca0ff]/30 bg-[linear-gradient(90deg,rgba(74,116,255,0.25),rgba(120,87,255,0.18))] text-white shadow-[inset_0_0_18px_rgba(123,146,255,0.12)]'
                    : 'border-transparent bg-transparent text-[#dfe7ff]/85 hover:bg-[#111d39]/70 hover:text-white'
                ].join(' ')}
                onClick={() => selectProject(project.id)}
              >
                <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0 text-current" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h4.3l1.7 2h5.9A2.5 2.5 0 0 1 21 9.5v7A2.5 2.5 0 0 1 18.5 19h-12A2.5 2.5 0 0 1 4 16.5v-9Z" />
                </svg>
                <span className="truncate">{project.title}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
