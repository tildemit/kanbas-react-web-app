import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import './modulelist.css';

function ModuleList() {
  const { courseId } = useParams();
  const modules = db.modules;

  return (
    <ul className="list-group">
      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li key={index} className="list-group-item list-group-item-secondary d-flex justify-content-between">
            <div className="d-flex align-items-center">
              <FaGripVertical />
              <span style={{ marginLeft: "10px" }}>{module.name}</span>
            </div>
            <div>
              <FaCheckCircle style={{ marginRight: "10px", color: "green" }} />
              <FaEllipsisV style={{ marginRight: "5px" }} />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
