import { ToolBar, Canvas } from "@/domain/components";

function Home() {
  return (
    <div className="page-container">
      <div className="content-container column">
        <ToolBar />
        <Canvas />
      </div>
    </div>
  );
}

export default Home;
