// SelectedProject is only passing "tasks". "tasks" is an array of all tasks.
// [  { id: 'task1', text: 'Task 1', projectId: 'project1' },
//    { id: 'task2', text: 'Task 2', projectId: 'project1' },
//    { id: 'task3', text: 'Task 3', projectId: 'project2' } ]

// The Task component should directly consume the tasks

import { createContext, useReducer } from "react";
import type { Props, Project, Task } from "../types/common.types.ts";
import type { ContextValue, ProjectsState, ProjectsAction } from "./store.types.ts";

export const ProjectsContext = createContext<ContextValue>({
  // List of all projects
  projects: [],
  // Currently selected project id
  selectedProjectId: undefined,
  // Currently selected project
  currentSelectedProject: undefined,
  // List of all tasks
  tasks: [],
  // Action functions (will be implemented in the provider)
  addTask: () => { },
  deleteTask: () => { },
  addProject: () => { },
  deleteProject: () => { },
  startAddProject: () => { },
  selectProject: () => { }
});

// Reducer function to manage the state of projects and tasks
function projectsReducer(state: ProjectsState, action: ProjectsAction): ProjectsState {
  const identifier = action.identifier;

  switch (identifier) {
    case "START_ADD_PROJECT":
      return {
        ...state,
        selectedProjectId: null
      };

    case "SELECT_PROJECT":
      return {
        ...state,
        selectedProjectId: action.payload.id
      };

    case "ADD_PROJECT":
      const newProject = {
        ...action.payload.projectData,
        // Generate a simple unique id for the new project
        id: Math.random().toString(),
      };

      return {
        ...state,
        projects: [...state.projects, newProject],
        selectedProjectId: undefined
      };

    case "DELETE_PROJECT":
      const updatedProjects = state.projects.filter(
        // Remove the project with the selectedProjectId
        (project: Project) => project.id !== state.selectedProjectId
      );

      return {
        ...state,
        projects: updatedProjects,
        selectedProjectId: undefined
      };

    case "ADD_TASK":
      const taskId = Math.random().toString();

      const newTask = {
        id: taskId,
        text: action.payload.text,
        projectId: state.selectedProjectId
      };

      const updatedTasks = [...state.tasks, newTask];

      return {
        ...state,
        tasks: updatedTasks
      };

    case "DELETE_TASK":
      const taskIdToDelete = action.payload.id;
      const filteredTasks = state.tasks.filter(
        (task: Task) => task.id !== taskIdToDelete
      );

      return {
        ...state,
        tasks: filteredTasks
      };

    default:
      return state;
  }
}

// Context provider component to wrap the application and provide the projects context
export default function ProjectsContextProvider({ children }: Props): JSX.Element {
  const [projectsState, projectsDispatch] = useReducer(
    projectsReducer,
    // Initial state
    {
      // Currently selected project id
      selectedProjectId: undefined,
      // List of all projects
      projects: [],
      tasks: []
    }
  );

  // Function to handle starting to add a new project
  function handleStarAddProject() {
    projectsDispatch({
      identifier: 'START_ADD_PROJECT',
      payload: {}
    });
  }

  // Function to handle selecting a project
  function handleSelectProject(projectId: string | null) {
    projectsDispatch({
      identifier: 'SELECT_PROJECT',
      payload: {
        id: projectId
      }
    });
  }

  // Function to handle adding a new project
  function handleAddProject(projectData: Project) {
    projectsDispatch({
      identifier: 'ADD_PROJECT',
      payload: {
        // Generate a simple unique id for the new project
        id: Math.random().toString(),
        projectData: { ...projectData }
      }
    });
  }

  // Function to handle deleting a project
  function handleDeleteProject() {
    projectsDispatch({
      identifier: 'DELETE_PROJECT',
      payload: {
        id: projectsState.selectedProjectId
      }
    });
  }

  // Function to handle adding a new task
  function handleAddTask(taskText: string) {
    projectsDispatch({
      identifier: 'ADD_TASK',
      payload: {
        text: taskText
      }
    });
  }

  // Function to handle deleting a task
  function handleDeleteTask(taskId: string) {
    projectsDispatch({
      identifier: 'DELETE_TASK',
      payload: {
        id: taskId
      }
    });
  }

  const currentSelectedProject = projectsState.projects.find((project: Project) => project.id === projectsState.selectedProjectId);
  const currentSelectedProjectTasks = projectsState.tasks.filter((task: Task) => task.projectId === projectsState.selectedProjectId);

  // Prepare the context value to be provided to consuming components
  const ctxValue: ContextValue = {
    projects: projectsState.projects,
    selectedProjectId: projectsState.selectedProjectId,
    currentSelectedProject: currentSelectedProject,
    tasks: currentSelectedProjectTasks,
    addTask: handleAddTask,
    deleteTask: handleDeleteTask,
    addProject: handleAddProject,
    deleteProject: handleDeleteProject,
    startAddProject: handleStarAddProject,
    selectProject: handleSelectProject
  };

  return (
    <ProjectsContext.Provider value={ctxValue} >
      {children}
    </ProjectsContext.Provider>
  );
}
