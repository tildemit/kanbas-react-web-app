import React from "react";
import { FaFileImport, FaArrowRight, FaBullseye, FaChartBar, FaBell, FaCalendar } from "react-icons/fa";
import "./status.css";

function Status() {
  return (
    <div className="status-section">
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaFileImport style={{ marginRight: "10px" }} /> Import Existing Content
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaArrowRight style={{ marginRight: "10px" }} /> Import from Commons
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaBullseye style={{ marginRight: "10px" }} /> Choose Home Page
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaChartBar style={{ marginRight: "10px" }} /> View Course Stream
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaBell style={{ marginRight: "10px" }} /> New Announcement
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaChartBar style={{ marginRight: "10px" }} /> New Analytics
      </button>
      <button className="btn mb-1" style={{ background: "lightgrey", width: "240px", textAlign: "left" }}>
        <FaBell style={{ marginRight: "10px" }} /> View Course Notifications
      </button>
      <div className="todo-section">
        <h6 className="mt-4" style={{ color: "black" }}>To Do</h6>
        <hr />
        <label style={{ fontSize: "smaller", whiteSpace: "nowrap", position: "relative" }}>
          <span className="text-danger" style={{ position: "absolute", top: "50%", transform: "translateY(-50%)", left: 0 }}>
            <i className="fas fa-circle"></i>
          </span>
          <span style={{ marginLeft: "20px" }}>Grade A1 + ENV + HTML</span>
          <br />
          <span style={{ color: "black", marginLeft: "20px" }}>100 points Sep 18 at 11:59pm</span>
          <span className="text-danger" style={{ position: "absolute", top: 0, right: 0 }}>
            <i style={{ color: "black" }} className="fas fa-times"></i>
          </span>
        </label>
      </div>
      <div className="coming-up">
        <h6 className="mt-4" style={{ color: "black", whiteSpace: "nowrap" }}>Coming Up</h6>
        <hr />
        <div className="upcoming-item">
          <label>
            <span style={{ marginLeft: "20px" }}>Lecture</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>CS4550.12631.202410</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>Sep 11 at 11:45am</span>
          </label>
        </div>
        <div className="upcoming-item">
          <label>
            <span style={{ marginLeft: "20px" }}>CS5610 06 SP23 Lecture</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>CS4550.12631.202410</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>Sep 11 at 6pm</span>
          </label>
        </div>
        <div className="upcoming-item">
          <label>
            <span style={{ marginLeft: "20px" }}>CS5610 Web Development</span>
            <br />
            <span style={{ marginLeft: "20px" }}>Summer 1 2023 - LECTURE</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>CS4550.12631.202410</span>
            <br />
            <span style={{ color: "black", marginLeft: "20px" }}>Sep 11 at 7pm</span>
          </label>
        </div>
        <label className="more-items">12 more in the next week...</label>
      </div>
    </div>
  );
}

export default Status;
