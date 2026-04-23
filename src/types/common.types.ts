export type Props = {
  children?: React.ReactNode
};

export interface Project {
  id: string;
  title: string;
  description: string;
  dueDate: string;
}

export interface Task {
  id: string;
  projectId: string;
  text: string;
}
