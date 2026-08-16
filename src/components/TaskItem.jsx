import React from "react";
import "../css/TaskItem.css";

const TaskItem = ({ task, onToggleComplete, onToggleStar, onDeleteTask }) => {
  return (
    <div className="task-item open-sans">
      <h3 className="indie-flower card-title">{task.title}</h3>
      <p className="indie-flower description">{task.description}</p>
      <p className="date">Date: {task.date}</p>
      <p className="type">Type: {task.type}</p>

      <i
        onClick={() => onToggleStar(task.id)}
        className={`fa-${task.starred ? "solid" : "regular"} fa-star card-star-icon`}
      ></i>
      <input
        className="checkbox"
        type="checkbox"
        onChange={() => onToggleComplete(task.id)}
        checked={task.completed}
      />

      <p className="completed-text">
        Completed: {task.completed ? "Yes" : "No"}
      </p>
      <button onClick={() => onDeleteTask(task.id)} className="delete-task">
        Delete
      </button>
    </div>
  );
};

export default TaskItem;
