import "./css/App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import NewTask from "./components/NewTask";

function App() {
  const [isNewTaskOpen, setIsNewTaskOpen] = useState(false);

  return (
    <>
      <Navbar setIsNewTaskOpen={setIsNewTaskOpen} />
      {isNewTaskOpen && <NewTask setIsNewTaskOpen={setIsNewTaskOpen} />}
    </>
  );
}

export default App;
