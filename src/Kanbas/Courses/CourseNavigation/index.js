import React from "react";
import { NavLink, useParams, useLocation } from "react-router-dom";
import "./course-navigation.css"; // Updated CSS file name

const CourseNavigation = () => {
  const links = [
    "Home",
    "Modules",
    "Piazza",
    "Zoom Meetings",
    "Assignments",
    "Quizzes",
    "Grades",
    "People",
    "Panopto Video",
    "Discussions",
    "Announcements",
    "Pages",
    "Files",
    "Rubrics",
    "Outcomes",
    "Collaborations",
    "Syllabus",
    "Progress Reports (EAB) Navigate",
    "Settings"
  ];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="col-md-2 d-none d-md-block">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          activeClassName="active"
          className="home-link"
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
};

export default CourseNavigation;
