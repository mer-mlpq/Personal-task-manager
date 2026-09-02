import React from "react";
import { useState } from "react";
import "../css/NewTask.css";
const NewTask = ({
  setIsNewTaskOpen,
  setTasks,
  taskToEdit,
  setEditingTaskId,
}) => {
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
  const handleEdit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    setTasks((prev) =>
      prev.map((task) => {
        if (taskToEdit.id === task.id) {
          return {
            ...task,
            title: form.title.value,
            description: form.description.value,
            date: form.date.value,
            type: form.type.value,
          };
        }
        return task;
      }),
    );
    setIsNewTaskOpen(false);
    setEditingTaskId(null);
  };

  const handleCancel = (e) => {
    e.preventDefault();
    setIsNewTaskOpen(false);
    setEditingTaskId(null);
  };

  return (
    <>
      <div className="modal-overlay">
        {!taskToEdit ? (
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
                <option value="personal">Personal</option>
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
        ) : (
          <form
            onSubmit={handleEdit}
            className="new-task-form open-sans"
            action=""
          >
            <h3>Edit Task</h3>
            <input
              className="edit-task-title indie-flower"
              name="title"
              type="text"
              placeholder="Enter title"
              defaultValue={taskToEdit?.title}
              required
            />

            <div className="task-details">
              <input
                className="new-task-time"
                name="date"
                type="date"
                defaultValue={`${taskToEdit?.date}`}
              />
              <select
                className="new-task-type"
                name="type"
                id="type"
                defaultValue={taskToEdit?.type || "personal"}
              >
                <option value="personal">Personal</option>
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
              defaultValue={taskToEdit?.description}
            />
            <div className="new-task-decision">
              <button className="new-task-submit" type="submit">
                Edit
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
        )}
      </div>
    </>
  );
};

export default NewTask;
