import React from "react";
import { FaCheckCircle, FaEllipsisV } from "react-icons/fa"; 
import ModuleList from "./ModuleList";
import "./modules.css"; 

function Modules() {
  return (
    <div className="modules">
      <div className="module-header">
        <div className="d-flex justify-content-end">
          <button className="btn" style={{ backgroundColor: "lightgray" }}>Collapse All</button>
          <button className="btn" style={{ backgroundColor: "lightgray" }}>View Progress</button>
          <button className="btn publish-button" style={{ backgroundColor: "lightgray" }}>
            <FaCheckCircle className="publish-icon" /> Publish All
          </button>
          <button className="btn btn-danger">+ Module</button>
          <button className="btn ellipsis-button" style={{ backgroundColor: "lightgray", color: "black" }}>
            <FaEllipsisV className="ellipsis-icon" />
          </button>
        </div>
      </div>
      <hr />
      <ModuleList />
    </div>
  );
}

export default Modules;
