import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!title.trim() || !description.trim()) {
      return;
    }

    onAddTask(title, description);

    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Task Title</label>

        <input
          type="text"
          placeholder="Enter task title"
          value={title}
          onChange={(event) => setTitle(event.target.value)}
        />
      </div>

      <div>
        <label>Description</label>

        <textarea
          placeholder="Enter task description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
        />
      </div>

      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;