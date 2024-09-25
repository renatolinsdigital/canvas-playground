import { Button, Image } from "@/shared/components";
import "./ToolBar.scss";

function ToolBar() {
  return (
    <div className="toolbar-container">
      <div className="toolbar-group">
        <span className="tool-button">1</span>
        <span className="tool-button">2</span>
        <span className="tool-button">3</span>
      </div>
      <div className="toolbar-group">
        <Button className="tool-button" coloring="coloring-transparent">
          <Image
            isDomainImage
            className="p-2"
            fileName="clean"
            fileExtension="png"
            alternativeText="Clean Canvas"
          ></Image>
        </Button>
      </div>
    </div>
  );
}

export default ToolBar;
