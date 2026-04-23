import type { Project, Task } from "../types/common.types.ts";

export interface ProjectsState {
  projects: Project[];
  selectedProjectId: string | null | undefined;
  tasks: Task[];
}

export interface ProjectsAction {
  identifier: string;
  payload: Record<string, any>;
}

export interface ContextValue {
  projects: Project[];
  selectedProjectId: string | null | undefined;
  currentSelectedProject: Project | undefined;
  tasks: Task[];
  addTask: (text: string) => void;
  deleteTask: (taskId: string) => void;
  addProject: (projectData: Project) => void;
  deleteProject: () => void;
  startAddProject: () => void;
  selectProject: (projectId: string | null) => void;
}
