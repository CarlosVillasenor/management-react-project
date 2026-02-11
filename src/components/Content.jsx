import { useContext } from "react";
import { ProjectsContext } from "../store/projects-store.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected";
import SelectedProject from "./SelectedProject";

function Content() {
  const { projects, selectedProjectId } = useContext(ProjectsContext);
  let content;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    const currentSelectedProject = projects.find((project) => project.id === selectedProjectId);
    content = <SelectedProject project={currentSelectedProject} />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Content;
