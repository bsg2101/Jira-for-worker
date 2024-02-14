import { useEffect, useState } from "react";
import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);

  const CreateTask = async (title, description) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      description,
    });
    const createdTask = [...tasks, response.data];

    setTasks(createdTask);
  };

  useEffect(() => {
    const fetchTasks = async () => {
      const response = await axios.get("http://localhost:3000/tasks");
      setTasks(response.data);
    };
    fetchTasks();
  }, []);

  const deleteTaskById = (id) => {
    const response = axios.delete(`http://localhost:3000/tasks/${id}`);
    console.log(id);
    const afterDeletingTasks = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeletingTasks);
  };

  const editTaskById = (id, updatedTitle, updatedTaskDesc) => {
    const response = axios.put(`http://localhost:3000/tasks/${id}`, {
      title: updatedTitle,
      description: updatedTaskDesc,
    });
    console.log(id);
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          id,
          title: updatedTitle,
          description: updatedTaskDesc,
        };
      } else {
        return task;
      }
    });
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <TaskCreate onCreate={CreateTask} />
      <h1>Görevler</h1>
      <TaskList
        tasks={tasks}
        onDelete={deleteTaskById}
        onUpdate={editTaskById}
      />
    </div>
  );
}

export default App;
