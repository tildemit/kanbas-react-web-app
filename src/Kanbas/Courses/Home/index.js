import ModuleList from "../Modules/ModuleList";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"; // Import the relevant icons
import "./home.css"
import Status from "./Status";


function Home() {
  return (
    <div className="modules">
      <div className="module-header">
        <div className="d-flex justify-content-end">
          <button className="btn" style={{ backgroundColor: "lightgray" }}>Collapse All</button>
          <button className="btn" style={{ backgroundColor: "lightgray" }}>View Progress</button>
          <button className="btn publish-button">
            <FaCheckCircle className="publish-icon" /> Publish All
          </button>
          <button className="btn btn-danger">+ Module</button>
          <button className="btn ellipsis-button">
            <FaEllipsisV className="ellipsis-icon" />
          </button>
        </div>
      </div>
      <hr />
      <ModuleList />
      <Status />
    </div>
  );
}
export default Home;