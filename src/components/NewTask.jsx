import React from "react";
import { useState } from "react";
import "../css/NewTask.css";
const NewTask = ({ setIsNewTaskOpen, setTasks }) => {
  const dateToday = new Date();
  const [starred, setStarred] = useState(false);

  const handleSumbit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setTasks((prev) => [
      ...prev,
      {
        id: crypto.randomUUID(),
        title: form.title.value,
        description: form.description.value,
        date: form.date.value,
        type: form.type.value,
        starred: starred,
        completed: false,
      },
    ]);
    setIsNewTaskOpen(false);
  };
  const handleCancel = (e) => {
    e.preventDefault();
    setIsNewTaskOpen(false);
  };

  return (
    <>
      <div className="modal-overlay">
        <form
          onSubmit={handleSumbit}
          className="new-task-form open-sans"
          action=""
        >
          <h3>Add a new task</h3>
          <input
            className="new-task-title indie-flower"
            name="title"
            type="text"
            placeholder="Enter title"
            required
          />
          <i
            className={`fa-${starred ? "solid" : "regular"} fa-star star-icon`}
            onClick={() => setStarred(!starred)}
          ></i>

          <div className="task-details">
            <input
              className="new-task-time"
              name="date"
              type="date"
              defaultValue={`${dateToday.toISOString().split("T")[0]}`}
            />
            <select className="new-task-type" name="type" id="type">
              <option value="low">Personal</option>
              <option value="school">School</option>
              <option value="qalam">Qalam</option>
              <option value="coding">Coding</option>
            </select>
          </div>
          <textarea
            id="description"
            name="description"
            rows={1}
            placeholder="Enter description"
            className="new-task-description indie-flower"
          />
          <div className="new-task-decision">
            <button className="new-task-submit" type="submit">
              Add Task
            </button>
            <button
              onClick={handleCancel}
              className="new-task-cancel"
              type="button"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewTask;
