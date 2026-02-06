// A sidebar component that shows the user's projects and allows them to select a project or add a 
// new project. It receives the list of projects, the selected project id, and the functions to 
// select a project and start adding a new project as props.

function ProjectsSidebar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-8 py-16 bg-gray-600 text-stone-50 md:w-72 rounded-r-md">
      <h2 className="mb-8 font-bold uppercase md:tex-xl text-stone-200">Your Projects</h2>
      <div>
        <button className="btn btn-primary" onClick={onStartAddProject}>
          + Add Project
        </button>
      </div>
      <ul className="mt-6">
        {projects.map((project) => {
          let cssClasses = `w-full text-left px-2 py-1 rounded-md my-1 bg-stone-700 text-stone-400
          hover:bg-stone-800 hover:text-stone-200`;

          if (project.id === selectedProjectId) {
            cssClasses += " bg-stone-900 text-stone-200 hover:bg-stone-900 hover:text-stone-300";
          } else {
            cssClasses += " text-stone-400";
          }

          return (
            <li key={project.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(project.id)}
              >
                {project.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

export default ProjectsSidebar;
