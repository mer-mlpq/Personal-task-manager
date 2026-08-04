import React from "react";
import "../css/Navbar.css";
const Navbar = () => {
  return (
    <nav className="open-sans">
      <div className="left-half">
        <h1 className="title ">Task Manager</h1>
      </div>
      <div className="right-half">
        <button className="add-button">
          <i className="fa-solid fa-circle-plus add-icon"></i>
          <p>Add Task</p>
        </button>
        <div className="task-type">
          <button className="all-tasks-btn">All Tasks</button>
          <button className="starred-tasks-btn">Starred</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
