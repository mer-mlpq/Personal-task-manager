import "./css/App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";
import TaskList from "./components/TaskList";
import SearchBar from "./components/SearchBar";

function App() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);
  const [editingTaskId, setEditingTaskId] = useState(null);
  const [taskTypes, setTaskTypes] = useState([
    "personal",
    "work",
    "studies",
    "fitness",
  ]);
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");

    if (storedTasks) {
      return JSON.parse(storedTasks);
    } else {
      return [];
    }
  });
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const displayedTasks = tasks.filter((task) => {
    const matchesSearch =
      task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      task.description.toLowerCase().includes(searchTerm.toLowerCase());

    if (!matchesSearch) {
      return false;
    }
    if (filter === "all") {
      return true;
    } else if (filter === "starred") {
      return task.starred === true;
    } else if (filter === "active") {
      return task.completed === false;
    } else if (filter === "completed") {
      return task.completed === true;
    }
  });
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
  const onEditTask = (taskId) => {
    setEditingTaskId(taskId);
    setIsNewTaskOpen(true);
  };
  const taskToEdit = tasks.find((task) => task.id === editingTaskId);

  return (
    <>
      <Navbar
        setIsNewTaskOpen={setIsNewTaskOpen}
        setTasks={setTasks}
        tasks={tasks}
        setFilter={setFilter}
        filter={filter}
      />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      {isNewTaskOpen && (
        <NewTask
          setIsNewTaskOpen={setIsNewTaskOpen}
          setTasks={setTasks}
          taskToEdit={taskToEdit}
          setEditingTaskId={setEditingTaskId}
          taskTypes={taskTypes}
          setTaskTypes={setTaskTypes}
        />
      )}
      <h3 style={myStyle}>Task List</h3>

      <TaskList
        tasks={displayedTasks}
        onToggleComplete={onToggleComplete}
        onToggleStar={onToggleStar}
        onDeleteTask={onDeleteTask}
        onEditTask={onEditTask}
      />
    </>
  );
}

export default App;
