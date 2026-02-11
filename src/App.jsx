import ProjectsSidebar from "../src/components/ProjectsSidebar";
import ProjectsContextProvider from "./store/projects-store.jsx";
import Content from "./components/Content.jsx";

// The App component is the root component of the application. It wraps the entire application in
//  the ProjectsContextProvider, which provides the projects state and functions to all components
// that consume the context. It also renders the ProjectsSidebar and Content components.
function App() {
  return (
    <ProjectsContextProvider>
      <main className="h-screen my-8 flex gap-8">
        <ProjectsSidebar />
        <Content />
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
