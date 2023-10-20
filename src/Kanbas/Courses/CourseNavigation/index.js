import React from "react";
import { NavLink, useParams } from "react-router-dom";
import "./course-navigation.css";

const CourseNavigation = ({ selectedSection, setSelectedSection }) => {
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

  const handleNavLinkClick = (section) => {
    setSelectedSection(section);
  };

  return (
    <div className="col-md-2 d-none d-md-block">
      {links.map((link, index) => (
        <NavLink
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          activeClassName="active"
          className="home-link"
          onClick={() => handleNavLinkClick(link)}
        >
          {link}
        </NavLink>
      ))}
    </div>
  );
};

export default CourseNavigation;
