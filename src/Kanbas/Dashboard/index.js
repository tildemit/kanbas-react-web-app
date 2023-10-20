import React from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaEllipsisV } from "react-icons/fa";
import "./dashboard.css";

function Dashboard() {
  const courses = db.courses;

  return (
    <div className="col-md-10">
      <h2>Dashboard</h2>
      <hr />

      <h3>Published Courses (24)</h3>

      <div className="d-flex flex-row flex-wrap">
        {courses.map((course, index) => (
          <div key={index} className="card position-relative" style={{ width: "260px", margin: "15px" }}>
            <FaEllipsisV style={{ position: "absolute", top: "10px", right: "10px", color: "white"}} />
            <div className="card-top" style={{ backgroundColor: "blue", height: "120px" }}></div>
            <Link to={`/Kanbas/Courses/${course._id}`} className="card-link">
              <div className="card-body">
                <h5 className="card-title" style={{ color: course.color }}>{course.name}</h5>
                <p className="card-text">{course.code}</p>
                <p className="card-text">{course.term}</p>
                <FaPencilAlt />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
