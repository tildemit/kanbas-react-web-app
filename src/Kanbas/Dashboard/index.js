import { React, useState } from "react";
import db from "../Database";
import { Link } from "react-router-dom";
import { FaPencilAlt, FaEllipsisV } from "react-icons/fa";
import "./dashboard.css";

function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }  
) {

  return (
    <div className="col-md-10">
      <h2>Dashboard</h2>
      <hr />

      <h3>Published Courses (24)</h3>
      <hr />
      <h5>New Course</h5>
      <input
        value={course.name}
        className="form-control" 
        onChange={(e) => setCourse({ ...course, name: e.target.value })}
      />
      <input
        value={course.number}
        className="form-control" 
        onChange={(e) => setCourse({ ...course, number: e.target.value })}
      />
      <input
        value={course.startDate}
        className="form-control" 
        type="date"
        onChange={(e) => setCourse({ ...course, startDate: e.target.value })}
      />
      <input
        value={course.endDate}
        className="form-control" 
        type="date"
        onChange={(e) => setCourse({ ...course, endDate: e.target.value })}
      />

      <button
        className="btn btn-primary" 
        onClick={addNewCourse}
      >
        Add
      </button>
      <button
        className="btn btn-success" 
        onClick={updateCourse}
      >
        Update
      </button>

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
                <button
                  className="btn btn-info" 
                  onClick={(event) => {
                    event.preventDefault();
                    setCourse(course);
                  }}
                >
                  Edit
                </button>

                <button
                  className="btn btn-danger" 
                  onClick={(event) => {
                    event.preventDefault();
                    deleteCourse(course._id);
                  }}
                >
                  Delete
                </button>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
