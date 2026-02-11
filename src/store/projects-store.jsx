// SelectedProject is only passing "tasks". "tasks" is an array of all tasks.
// [  { id: 'task1', text: 'Task 1', projectId: 'project1' },
//    { id: 'task2', text: 'Task 2', projectId: 'project1' },
//    { id: 'task3', text: 'Task 3', projectId: 'project2' } ]

// The Task component should directly consume the tasks

import { createContext, useState } from "react";

export const ProjectsContext = createContext({
  // Currently selected project id
  selectedProjectId: undefined,
  // List of all projects
  projects: [],
  // List of all tasks
  tasks: [],
  addTaks: () => { },
  deleteTask: () => { },
  addProject: () => { },
  deleteProject: () => { },
  startAddProject: () => { },
  selectProject: () => { }
});

export default function ProjectsContextProvider({ children }) {
  const [projectsState, setProjectsState] = useState({
    // Currently selected project id
    selectedProjectId: undefined,
    // List of all projects
    projects: [],
    tasks: []
  });

  // Function to handle starting to add a new project
  function handleStarAddProject() {
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

  const currentSelectedProject = projectsState.projects.find((project) => project.id === projectsState.selectedProjectId);

  // Prepare the context value to be provided to consuming components
  const ctxValue = {
    projects: projectsState.projects,
    selectedProjectId: projectsState.selectedProjectId,
    currentSelectedProject: currentSelectedProject,
    tasks: projectsState.tasks.filter(task => task.projectId === projectsState.selectedProjectId),
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    startAddProject: handleStarAddProject,
    selectProject: handleSelectProject
  };

  return (
    <ProjectsContext.Provider value={ctxValue}>
      {children}
    </ProjectsContext.Provider>
  );
}