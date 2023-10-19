import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaPencilAlt, FaCheckCircle, FaEllipsisV } from 'react-icons/fa';

function Assignments() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId
  );

  return (
    <div>
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
      <div className="list-group">
        <div className="list-group-item list-group-item-secondary">
          <span>Assignments for course {courseId}</span>
        </div>
        {courseAssignments.map((assignment) => (
          <Link
            key={assignment._id}
            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
            className="list-group-item assignment-item"
          >
            <FaPencilAlt style={{ color: "green", marginRight: "10px" }} />
            <span className="text-left">
              <b>{assignment.title}</b>
            </span>
            <span style={{ flex: "1" }}></span>
            <FaCheckCircle style={{ color: "green", marginRight: "10px" }} />
            <FaEllipsisV style={{ marginRight: "0px" }} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Assignments;
