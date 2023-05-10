import React, { useState } from "react";
import Navbar from "./components/Navbar";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import "./styles.css";

const App = () => {
	const [tasks, setTasks] = useState([]);

	const addTask = (taskName) => {
		const newTask = {
			id: Date.now(),
			name: taskName,
			completed: false,
		};
		setTasks([...tasks, newTask]);
	};

	const completeTask = (taskId) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, completed: !task.completed } : task
			)
		);
	};

	const editTask = (taskId, newName) => {
		setTasks(
			tasks.map((task) =>
				task.id === taskId ? { ...task, name: newName } : task
			)
		);
	};

	const deleteTask = (taskId) => {
		setTasks(tasks.filter((task) => task.id !== taskId));
	};

	return (
		<div>
			<Navbar />
			<div className="container">
				<h1>Task Manager</h1>
				<TaskForm addTask={addTask} />
				<TaskList
					tasks={tasks}
					completeTask={completeTask}
					editTask={editTask}
					deleteTask={deleteTask}
				/>
			</div>
		</div>
	);
};

export default App;
