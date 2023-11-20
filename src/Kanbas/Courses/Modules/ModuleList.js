import React, { useEffect, useState } from "react";
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
  setModules,
} from "./modulesReducer";
import * as client from "./client";

function ModuleList() {
  const { courseId } = useParams();
  useEffect(() => {
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);
  const handleDeleteModule = (moduleId) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };

  const handleAddModule = () => {
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };

  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };



  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();

  return (
    <ul className="list-group">
      <li className="list-group-item">
        <button
          className="btn btn-primary"
          onClick={handleAddModule}>
          Add
        </button>
        <button
          className="btn btn-success"
          onClick={handleUpdateModule
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
          >
            <div className="d-flex flex-column">
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
                  onClick={() => handleDeleteModule(module._id)
                }>
                  Delete
                </button>

                <span style={{ marginLeft: "10px" }}>{module.name}</span>
              </div>
              <hr />
              <div>
                {module.description}
              </div>
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
