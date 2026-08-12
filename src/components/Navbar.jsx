import React from "react";
import "../css/Navbar.css";
const Navbar = ({ setIsNewTaskOpen }) => {
  return (
    <nav className="open-sans">
      <div className="left-half">
        <h1 className="title ">Task Manager</h1>
      </div>
      <div className="right-half">
        <button className="add-button" onClick={() => setIsNewTaskOpen(true)}>
          <i className="fa-solid fa-circle-plus add-icon"></i>
          <p>Add Task</p>
        </button>
        <div className="task-filters">
          <button className="all-tasks-btn active">All Tasks</button>
          <button className="starred-tasks-btn">Starred</button>
          <button className="active-tasks-btn">Active</button>
          <button className="completed-tasks-btn">Completed</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
