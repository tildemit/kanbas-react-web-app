import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import db from "../../../Database";
import './AssignmentEditor.css';

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId
  );

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };

  const cancelButtonStyle = {
    backgroundColor: 'gray',
    color: 'black', 
  };

  const saveButtonStyle = {
    backgroundColor: 'red',
    color: 'white', 
  };

  return (
    <div className="editor-container">
      <h6>Assignment Name</h6>
      <div className="editor-input">
        <input
          value={assignment.title}
          className="form-control mb-2 custom-input"
        />
        <div className="button-container">
          <Link
            to={`/Kanbas/Courses/${courseId}/Assignments`}
            className="btn btn-cancel me-2"
            style={cancelButtonStyle}
          >
            Cancel
          </Link>
          <button
            onClick={handleSave}
            className="btn btn-save"
            style={saveButtonStyle}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}

export default AssignmentEditor;
