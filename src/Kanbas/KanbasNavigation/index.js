import React from "react";
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaArrowRight, FaQuestion } from "react-icons/fa";
import { useLocation, NavLink } from "react-router-dom";
import "./kanbas-navigation.css";

function KanbasNavigation() {
  const links = [
    { name: "Account", icon: <FaUser /> },
    { name: "Dashboard", icon: <FaTachometerAlt /> },
    { name: "Courses", icon: <FaBook /> },
    { name: "Calendar", icon: <FaCalendar /> },
    { name: "Inbox", icon: <FaInbox /> },
    { name: "History", icon: <FaClock /> },
    { name: "Studio", icon: <FaTv /> },
    { name: "Commons", icon: <FaArrowRight /> },
    { name: "Help", icon: <FaQuestion /> },
  ];

  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div className="black-sidebar">
      <h1 className="text-center">
        <img src="../../images/neu.png" alt="Icon" />
      </h1>
      <ul className="nav flex-column">
        {links.map((link, index) => (
          <li
            className={`nav-item text-center ${currentPath.includes(link.name) ? 'white-square' : ''}`}
            key={index}
          >
            {link.name === "Courses" ? (
              <NavLink to="/Kanbas/Courses/RS101/Home" className={`nav-link ${currentPath.includes(link.name) ? 'red-text' : ''}`}>
                {link.icon}
                <br />
                {link.name}
              </NavLink>
            ) : (
              <NavLink to={`/Kanbas/${link.name}`} className={`nav-link ${currentPath.includes(link.name) ? 'red-text' : ''}`}>
                {link.icon}
                <br />
                {link.name}
              </NavLink>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
