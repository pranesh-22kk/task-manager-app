import { useEffect, useState } from "react";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

import "./index.css";

const API_URL = "https://task-manager-api-gcrs.onrender.com/api/tasks";

function App() {
  const [tasks, setTasks] = useState([]);

  // GET tasks when the application loads
  useEffect(() => {
    const loadTasks = async () => {
      try {
        const response = await fetch(API_URL);
        const data = await response.json();

        setTasks(data);
      } catch (error) {
        console.error("Failed to fetch tasks:", error);
      }
    };

    loadTasks();
  }, []);

  // POST task
  const addTask = async (title, description) => {
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      const newTask = await response.json();

      setTasks((previousTasks) => [...previousTasks, newTask]);
    } catch (error) {
      console.error("Failed to create task:", error);
    }
  };

  // DELETE task
  const deleteTask = async (taskId) => {
    try {
      await fetch(`${API_URL}/${taskId}`, {
        method: "DELETE",
      });

      setTasks((previousTasks) =>
        previousTasks.filter((task) => task._id !== taskId)
      );
    } catch (error) {
      console.error("Failed to delete task:", error);
    }
  };

  // PUT - change status
  const toggleStatus = async (taskId) => {
    try {
      const task = tasks.find((task) => task._id === taskId);

      if (!task) {
        return;
      }

      const newStatus =
        task.status === "Pending" ? "Completed" : "Pending";

      const response = await fetch(`${API_URL}/${taskId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          status: newStatus,
        }),
      });

      const updatedTask = await response.json();

      setTasks((previousTasks) =>
        previousTasks.map((task) =>
          task._id === taskId ? updatedTask : task
        )
      );
    } catch (error) {
      console.error("Failed to update task:", error);
    }
  };

  return (
    <div className="app">
      <h1>Task Manager</h1>

      <TaskForm onAddTask={addTask} />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onToggleStatus={toggleStatus}
      />
    </div>
  );
}

export default App;