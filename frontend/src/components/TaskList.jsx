function TaskList({ tasks, onDelete, onToggleStatus }) {
  return (
    <div className="tasks-container">
      <h2>Tasks</h2>

      {tasks.length === 0 ? (
        <p>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <div key={task._id} className="task-card">
            <h3>{task.title}</h3>

            <p>{task.description}</p>

            <p className="status">
              Status: {task.status}
            </p>

            <div className="task-actions">
              <button
                className="status-button"
                onClick={() => onToggleStatus(task._id)}
              >
                Mark as{" "}
                {task.status === "Pending" ? "Completed" : "Pending"}
              </button>

              <button
                className="delete-button"
                onClick={() => onDelete(task._id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default TaskList;