import React, { useState } from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import { FaGripVertical, FaCheckCircle, FaEllipsisV } from "react-icons/fa";
import './modulelist.css';
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

function ModuleList() {
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addModule({ ...module, course: courseId }))
          }>
          Add
        </button>
        <button
          className="btn btn-success"
          onClick={() => dispatch(updateModule(module))
          }>
          Update
        </button>

        <input
          value={module.name}
          className="form-control"
          onChange={(e) => dispatch(setModule({ ...module, name: e.target.value }))
          }
        />
        <textarea
          value={module.description}
          className="form-control"
          onChange={(e) => dispatch(setModule({ ...module, description: e.target.value }))
          }
        />
      </li>

      {modules
        .filter((module) => module.course === courseId)
        .map((module, index) => (
          <li
            key={index}
            className="list-group-item list-group-item-secondary d-flex justify-content-between"
            style={{ marginBottom: "50px" }}
          >
            <div className="d-flex align-items-center">
              <FaGripVertical />
              <button
                className="btn btn-info"
                onClick={() => dispatch(setModule(module))
                }>
                Edit
              </button>

              <button
                className="btn btn-danger"
                onClick={() => dispatch(deleteModule(module._id))
                }>
                Delete
              </button>

              <span style={{ marginLeft: "10px" }}>{module.name}</span>
            </div>
            <div>
              <FaCheckCircle style={{ marginRight: "10px", color: "green" }} />
              <FaEllipsisV style={{ marginRight: "5px" }} />
            </div>
          </li>
        ))}
    </ul>
  );
}

export default ModuleList;
