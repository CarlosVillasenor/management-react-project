// SelectedProject is only passing "tasks". "tasks" is an array of all tasks.
// [  { id: 'task1', text: 'Task 1', projectId: 'project1' },
//    { id: 'task2', text: 'Task 2', projectId: 'project1' },
//    { id: 'task3', text: 'Task 3', projectId: 'project2' } ]

// The Task component should directly consume the tasks

import { createContext } from "react";

const ProjectsContext = createContext({
    // Currently selected project id
    selectedProjectId: undefined,
    // List of all projects
    projects: [],
    // List of all tasks
    tasks: [],
    addTaks: () => {},
    deleteTask: () => {}
});


export { ProjectsContext };