import React, { useState } from "react";
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import db from "../../Kanbas/Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import { FaBars } from 'react-icons/fa';
import "./courses.css";

function Courses({ courses }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const [selectedSection, setSelectedSection] = useState("Home");

  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item active" aria-current="page">
            <FaBars className="hamburger-icon" />
            {course.name}
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {selectedSection}
          </li>
        </ol>
      </nav>
      <CourseNavigation
        selectedSection={selectedSection}
        setSelectedSection={setSelectedSection}
      />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{
            left: "320px",
            top: "50px",
          }}
        >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:assignmentId" element={<AssignmentEditor />} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;
