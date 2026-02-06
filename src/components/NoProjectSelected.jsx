// A component that is shown when no project is selected.
// It shows a message and a button to create a new project.

import NoProjectImage from "../assets/no-projects.png";

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className="mt-24 w-2/3 text-center">
      <img src={NoProjectImage} alt="An empty task list"  className="w-16 h-16 object-contain mx-auto"/>
      <h2 className="text-xl font-bold text-stone-500 my-4">No Project Selected</h2>
      <p className="text-stone-400 mb-4">Select a project or get started by creating a new project.</p>
      <p className="mt-8">
        <button onClick={onStartAddProject} className="btn btn-primary">
          Create new project
        </button>
      </p>
    </div>
  );
}

export default NoProjectSelected;
