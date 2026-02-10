// A component that shows the task to complete a selected project. It receives the project details 
// and the list of tasks as props, as well as the functions to delete the project, add a task, and 
// delete a task. It formats the due date and displays the project title, description, and tasks. 
// It also includes a button to delete the project and a section to add new tasks.

import { useContext } from 'react';
import NewTask from './NewTask.jsx';
import { ProjectsContext } from '../store/projects-store.jsx'

function Tasks() {
  // Consume the tasks from the ProjectsContext
  const { tasks, deleteTask } = useContext(ProjectsContext);

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">
        Tasks
      </h2>
      <NewTask />
      {/* Show message if no tasks are present */}
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any tasks yet.
        </p>
      )}
      {/* Render the list of tasks if there are any */}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md ">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-2 p-4 bg-stone-100 rounded-md">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
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
