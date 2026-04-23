import { useContext } from "react";
import { ProjectsContext } from "@/store/projects-store.jsx";
import NewProject from "./NewProject.jsx";
import NoProjectSelected from "./NoProjectSelected.jsx";
import SelectedProject from "./SelectedProject.jsx";

function Content() {
  const { selectedProjectId } = useContext(ProjectsContext) as {
    selectedProjectId: string | null | undefined;
  };

  let content;

  if (selectedProjectId === null) {
    content = <NewProject />;
  } else if (selectedProjectId === undefined) {
    content = <NoProjectSelected />;
  } else {
    content = <SelectedProject />;
  }

  return (
    <>
      {content}
    </>
  );
}

export default Content;
