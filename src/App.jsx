import { useState } from "react";
import ProjectsSidebar from "../src/components/ProjectsSidebar";
import NewProject from "./components/NewProject";
import NoProjectSelected from "./components/NoProjectSelected";
import SelectedProject from "./components/SelectedProject";

// The main App component that manages the state of the projects and tasks.
// It uses the ProjectsSidebar component to show the list of projects and allow the user to select 
// a project or add a new project.
// It also conditionally renders either the NewProject component, the NoProjectSelected component, 
// or the SelectedProject component based on the current state of the selected project.

function App() {
  const [projectsState, setProjectsState] = useState({
    // Currently selected project id
    selectedProjectId: undefined,
    // List of all projects
    projects: [],
    tasks: []
  });

  // Function to handle starting to add a new project
  function handleStarAddProject(newProject) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null
      };
    });
  }

  // Function to handle adding a new project
  function handleAddProject(projectData) {
    setProjectsState((prevState) => {

      const newProject = {
        ...projectData,
        // Generate a simple unique id for the new project
        id: Math.random().toString()
      };

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
        selectedProjectId: undefined
      };
    });
  }

  // Function to handle selecting a project
  function handleSelectProject(projectId) {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectId
      };
    });
  }

  // Function to handle deleting a project
  function handleDeleteProject() {
    setProjectsState((prevState) => {
      const updatedProjects = prevState.projects.filter(
        // Remove the project with the selectedProjectId
        (project) => project.id !== prevState.selectedProjectId);

      return {
        ...prevState,
        projects: updatedProjects,
        selectedProjectId: undefined
      };
    });
  }

  // Function to handle adding a new task
  function handleAddTask(taskText) {
    setProjectsState((prevState) => {
      const taskId = Math.random().toString();

      const newTask = {
        id: taskId,
        text: taskText,
        projectId: prevState.selectedProjectId
      };

      const updatedTasks = [...prevState.tasks, newTask];

      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  // Function to handle deleting a task
  function handleDeleteTask(taskId) {
    setProjectsState((prevState) => {
      // Filter out the task to be deleted
      const updatedTasks = prevState.tasks.filter(
        (task) => task.id !== taskId);  

      return {
        ...prevState,
        tasks: updatedTasks
      };
    });
  }

  // Find the selected project based on the selectedProjectId
  const currentSelectedProject = projectsState.projects.find(
    (project) => project.id === projectsState.selectedProjectId);

  // Determine what to render in the main content area
  let content;

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAddProject={handleAddProject} />;
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStarAddProject} />;
  } else {
    content = 
    <SelectedProject
      project={currentSelectedProject} 
      onDeleteProject={handleDeleteProject} 
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId)}
    />;
  }

  return (
    <main className="h-screen my-8 flex gap-8">
      <ProjectsSidebar
        onSelectProject={handleSelectProject}
        onStartAddProject={handleStarAddProject}
        projects={projectsState.projects}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
