import React, { useState } from "react";
import "../css/Navbar.css";
const Navbar = ({ setIsNewTaskOpen, setTasks, tasks, setFilter, filter }) => {
  // const filterAll = () => {
  //   const displayedTask = tasks;
  //   setFilter("all");
  // };
  // const filterStarred = () => {
  //   const displayedTask = tasks.filter((task) => task.starred === true);
  //   setFilter("starred");
  // };
  // const filterActive = () => {
  //   const displayedTask = tasks.filter((task) => task.completed === false);
  //   setFilter("active");
  // };
  // const filterCompleted = () => {
  //   const displayedTask = tasks.filter((task) => task.completed === true);
  //   setFilter("completed");
  // };
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
          <button
            onClick={() => setFilter("all")}
            className={`all-tasks-btn ${filter === "all" ? "active" : ""}`}
          >
            All Tasks
          </button>
          <button
            onClick={() => setFilter("starred")}
            className={`starred-tasks-btn ${filter === "starred" ? "active" : ""}`}
          >
            Starred
          </button>
          <button
            onClick={() => setFilter("active")}
            className={`active-tasks-btn ${filter === "active" ? "active" : ""}`}
          >
            Active
          </button>
          <button
            onClick={() => setFilter("completed")}
            className={`completed-tasks-btn ${filter === "completed" ? "active" : ""}`}
          >
            Completed
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
