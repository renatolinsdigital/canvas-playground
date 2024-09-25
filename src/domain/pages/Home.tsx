import { Canvas } from "@/domain/components";

function Home() {
  return (
    <div className="page-container">
      <div className="content-container column">
        {/* <ToolBar /> TODO: Implement a Toolbar to control drawing tools */}
        <Canvas />
      </div>
    </div>
  );
}

export default Home;
