import React from "react";
import TaskItem from "./TaskItem";
import "../css/TaskList.css";

const TaskList = ({
  tasks,
  onToggleComplete,
  onToggleStar,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggleComplete={onToggleComplete}
          onToggleStar={onToggleStar}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
        />
      ))}
    </div>
  );
};

export default TaskList;
