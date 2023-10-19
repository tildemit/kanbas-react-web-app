import KanbasNavigation from "./KanbasNavigation";
import {BrowserRouter as Router } from "react-router-dom";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import {Link} from "react-router-dom";
import Nav from "../Nav";

function Kanbas() {
  return (
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/Account" element={<h1>Account</h1>} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Kanbas/Courses/:courseId/*" element={<Courses />} />
        </Routes>
      </div>
      <div>
      <Nav/>
      </div>

    </div>
  );
}
export default Kanbas;