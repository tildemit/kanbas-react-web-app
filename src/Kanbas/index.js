import KanbasNavigation from "./KanbasNavigation";
import axios from "axios";
import Signin from "./Users/signin";
import Singup from "./Users/signup"
import Account from "./Users/account";
import UserTable from "./Users/table";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import { useEffect, useState } from "react";
import store from "./store";
import { Provider } from "react-redux";

function Kanbas() {
  const [courses, setCourses] = useState([]);
  const URL = "https://kanbas-node-server-app3-8dto.onrender.com/api/courses";
  const findAllCourses = async () => {
    const response = await axios.get(URL);
    setCourses(response.data);
  };
  useEffect(() => {
    findAllCourses();
  }, []);

  const [course, setCourse] = useState({
    name: "New Course",      number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
  });
  const addNewCourse = async () => {
    const response = await axios.post(URL, course);
    setCourses(currentCourses => [response.data, ...currentCourses]);
    setCourse({ name: "" });
    };


    const deleteCourse = async (course) => {
    const response = await axios.delete(
      `${URL}/${course._id}`
    );
    setCourses(courses.filter(
      (c) => c._id !== course._id));
  };

  
  const updateCourse = async (course) => {
    const response = await axios.put(
      `${URL}/${course._id}`,
      course
    );
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        }
        return c;
      })
    );
    setCourse({ name: "" });
  };


  return (
    <Provider store={store}>
    <div className="d-flex">
      <KanbasNavigation />
      <div>
        <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Singup />} />
          <Route path="/Account" element={<Account />} />
          <Route path="/Account/:id" element={<Account />} />
          <Route path="/admin/users" element={<UserTable />} />
          <Route path="/Dashboard" element={
          <Dashboard
          courses={courses}
          course={course}
          setCourse={setCourse}
          addNewCourse={addNewCourse}
          deleteCourse={deleteCourse}
          updateCourse={updateCourse}/>
          } />
          <Route path="/Courses/:courseId/*" element={
          <Courses courses={courses} />} />
        </Routes>
      </div>

    </div>
    </Provider>
  );
}
export default Kanbas;