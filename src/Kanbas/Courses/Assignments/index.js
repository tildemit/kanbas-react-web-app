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
        <div className="d-flex justify-content-between align-items-center">
          <input
            type="text"
            placeholder="Search for Assignment"
            className="form-control mr-2"
          />
          <button className="btn" style={{ backgroundColor: "lightgray" }}>
            +Group
          </button>
          <button className="btn btn-danger">+Assignment</button>
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
