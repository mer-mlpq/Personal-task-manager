import React from "react";
import TaskItem from "./TaskItem";
import "../css/TaskList.css";

const TaskList = ({ tasks, onToggleComplete, onToggleStar, onDeleteTask }) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onToggleStar={onToggleStar}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
