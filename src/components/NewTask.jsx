import React from "react";
import { useState, useEffect } from "react";
import "../css/NewTask.css";
const NewTask = ({
  setIsNewTaskOpen,
  setTasks,
  taskToEdit,
  setEditingTaskId,
  taskTypes,
  setTaskTypes,
}) => {
  const dateToday = new Date();
  const [starred, setStarred] = useState(false);
  const [selectedType, setSelectedType] = useState("personal");
  const [customType, setCustomType] = useState("");
  const [customTypeConfirmed, setCustomTypeConfirmed] = useState(false);

  useEffect(() => {
    if (!taskToEdit) return;

    if (taskTypes.includes(taskToEdit.type)) {
      setSelectedType(taskToEdit.type);
      setCustomType("");
      setCustomTypeConfirmed(false);
    } else {
      setSelectedType("other");
      setCustomType(taskToEdit.type);
      setCustomTypeConfirmed(true);
    }
  }, [taskToEdit, taskTypes]);

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
        type: selectedType === "other" ? customType.trim() : selectedType,
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
            type: selectedType === "other" ? customType.trim() : selectedType,
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

  const submitCustomType = () => {
    const type = customType.trim();

    if (!type) return;
    setSelectedType(customType.trim());
    setCustomTypeConfirmed(true);
    setTaskTypes((prev) => [...prev, customType.trim()]);
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
              disabled={!customTypeConfirmed && selectedType === "other"}
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
                disabled={!customTypeConfirmed && selectedType === "other"}
              />
              <select
                className="new-task-type"
                name="type"
                id="type"
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={!customTypeConfirmed && selectedType === "other"}
              >
                {taskTypes.map((type, key) => (
                  <option value={type} key={key}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
                <option value="other">Other (Custom)</option>
              </select>
            </div>

            {selectedType === "other" && (
              <div className="custom-type-container">
                <input
                  className=" new-task-custom-type"
                  name="customType"
                  type="text"
                  placeholder="Enter custom type"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                />
                <button
                  type="button"
                  className="custom-type-confirm"
                  onClick={submitCustomType}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            )}
            {selectedType !== "other" && (
              <textarea
                id="description"
                name="description"
                rows={1}
                placeholder="Enter description"
                className="new-task-description indie-flower"
              />
            )}
            <div className="new-task-decision">
              <button
                className="new-task-submit"
                type="submit"
                disabled={!customTypeConfirmed && selectedType === "other"}
              >
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
              disabled={!customTypeConfirmed && selectedType === "other"}
            />

            <div className="task-details">
              <input
                className="new-task-time"
                name="date"
                type="date"
                defaultValue={`${taskToEdit?.date}`}
                disabled={!customTypeConfirmed && selectedType === "other"}
              />
              <select
                className="new-task-type"
                name="type"
                id="type"
                defaultValue={
                  taskToEdit && !taskTypes.includes(taskToEdit.type)
                    ? "other"
                    : taskToEdit?.type || "personal"
                }
                onChange={(e) => setSelectedType(e.target.value)}
                disabled={!customTypeConfirmed && selectedType === "other"}
              >
                {taskTypes.map((type) => (
                  <option value={type} key={type}>
                    {type.charAt(0).toUpperCase() + type.slice(1)}
                  </option>
                ))}
                <option value="other">Other (Custom)</option>
              </select>
            </div>
            {selectedType === "other" && (
              <div className="custom-type-container">
                <input
                  className=" new-task-custom-type"
                  name="customType"
                  type="text"
                  placeholder="Enter custom type"
                  value={customType}
                  onChange={(e) => setCustomType(e.target.value)}
                />
                <button
                  type="button"
                  className="custom-type-confirm"
                  onClick={submitCustomType}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
              </div>
            )}
            {selectedType !== "other" && (
              <textarea
                id="description"
                name="description"
                rows={1}
                placeholder="Enter description"
                className="new-task-description indie-flower"
              />
            )}
            <div className="new-task-decision">
              <button
                className="new-task-submit"
                type="submit"
                disabled={!customTypeConfirmed && selectedType === "other"}
              >
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
