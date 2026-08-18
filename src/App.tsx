import ProjectsSidebar from "./components/ProjectsSidebar.jsx";
import ProjectsContextProvider from "./store/projects-store.jsx";
import Content from "./components/Content.js";

function App(): JSX.Element {
  return (
    <ProjectsContextProvider>
      <main className="min-h-screen bg-[#030b1d] p-4 sm:p-6 lg:p-8">
        <div className="mx-auto flex h-[calc(100vh-2rem)] max-w-[1600px] overflow-hidden rounded-[30px] border border-[#294f9f]/60 bg-[radial-gradient(circle_at_20%_20%,rgba(21,33,69,0.95),rgba(6,11,28,0.95)_42%,rgba(2,5,14,1)_100%)] shadow-[0_0_35px_rgba(35,52,110,0.65)]">
          <ProjectsSidebar />
          <Content />
        </div>
      </main>
    </ProjectsContextProvider>
  );
}

export default App;
