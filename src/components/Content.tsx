import { useContext } from "react";
import { ProjectsContext } from "../store/projects-store.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";

function Content() {
  const { projects, selectedProjectId } = useContext(ProjectsContext);
  let content;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    interface Project {
      id: string;
      title: string;
      description: string;
      dueDate: string;
    }

    const currentSelectedProject: Project | undefined = projects.find((project) => project.id === selectedProjectId);

    content = <SelectedProject />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Content;
