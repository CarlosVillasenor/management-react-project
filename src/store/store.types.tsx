export interface Props {
  children?: React.ReactNode
}

export interface ProjectData {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface TaskData {
  id: string;
  projectId: string;
  text: string;
}

export interface ProjectsState {
  projects: ProjectData[];
  selectedProjectId: string | null | undefined;
  tasks: TaskData[];
}

export interface ProjectsAction {
  identifier: string;
  payload: Record<string, any>;
}

export interface ContextValue {
  projects: ProjectData[];
  selectedProjectId: string | null | undefined;
  currentSelectedProject: ProjectData | undefined;
  tasks: TaskData[];
  addTask: (text: string) => void;
  deleteTask: (taskId: string) => void;
  addProject: (projectData: ProjectData) => void;
  deleteProject: () => void;
  startAddProject: () => void;
  selectProject: (projectId: string | null) => void;
}
