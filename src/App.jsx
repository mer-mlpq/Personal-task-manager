import "./css/App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";

function App() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const testTasks = [
    {
      id: 1,
      title: "Task 1",
      date: "2023-06-01",
      description: "This is task 1",
      type: "Personal",
      starred: true,
      completed: false,
    },
    {
      id: 2,
      title: "Task 2",
      description: "This is task 2",
      date: "2023-06-02",
      type: "School",
      starred: false,
      completed: false,
    },
    {
      id: 3,
      title: "Taskjfjsdkjqfjqw; fkjadskpirfpqufjqfadfjqpod q;3",
      description:
        "This is task 3 and I am a very long description that will test the responsiveness of the task item component. I want to see how it behaves when the text is too long and whether it wraps correctly or not.",
      date: "2023-06-03",
      type: "Qalam",
      starred: true,
      completed: true,
    },
  ];
  const [tasks, setTasks] = useState(testTasks);

  const myStyle = {
    textAlign: "center",
    fontFamily: "open sans",
    fontSize: "1.5rem",
    marginBlock: "1rem",
  };
  const onToggleComplete = (taskId) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };
  const onToggleStar = (taskId) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === taskId) {
          return { ...task, starred: !task.starred };
        }
        return task;
      }),
    );
  };

  const onDeleteTask = (taskId) => {
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };

  return (
    <>
      <Navbar setIsNewTaskOpen={setIsNewTaskOpen} />
      {isNewTaskOpen && (
        <NewTask setIsNewTaskOpen={setIsNewTaskOpen} setTasks={setTasks} />
      )}
      <h3 style={myStyle}>Task List</h3>

      <TaskList
        tasks={tasks}
        onToggleComplete={onToggleComplete}
        onToggleStar={onToggleStar}
        onDeleteTask={onDeleteTask}
      />
    </>
  );
}

export default App;
