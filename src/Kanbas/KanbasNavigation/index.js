// KanbasNavigation.js
import React from "react";
import { FaUser, FaTachometerAlt, FaBook, FaCalendar, FaInbox, FaClock, FaTv, FaArrowRight, FaQuestion } from "react-icons/fa";
import "./kanbas-navigation.css";

function KanbasNavigation() {
  const links = [
    { name: "Account", icon: <FaUser style={{ color: "white" }} /> },
    { name: "Dashboard", icon: <FaTachometerAlt style={{ color: "red" }} /> },
    { name: "Courses", icon: <FaBook style={{ color: "red" }} /> },
    { name: "Calendar", icon: <FaCalendar style={{ color: "red" }} /> },
    { name: "Inbox", icon: <FaInbox style={{ color: "red" }} /> },
    { name: "History", icon: <FaClock style={{ color: "red" }} /> },
    { name: "Studio", icon: <FaTv style={{ color: "red" }} /> },
    { name: "Commons", icon: <FaArrowRight style={{ color: "red" }} /> },
    { name: "Help", icon: <FaQuestion style={{ color: "red" }} /> },
  ];

  return (
    <div className="black-sidebar">
      <h1 className="text-center">
        <img src="../../images/neu.png" alt="Icon" />
      </h1>
      <ul className="nav flex-column">
        {links.map((link, index) => (
          <li className="nav-item text-center" key={index}>
            <a href={`/Kanbas/${link.name.toLowerCase()}`} className="nav-link">
              {link.icon}
              <br />
              <span style={{ color: "white" }}>{link.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default KanbasNavigation;
