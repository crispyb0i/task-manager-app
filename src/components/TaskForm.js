import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
	const [taskName, setTaskName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (taskName.trim() === "") return;
		addTask(taskName);
		setTaskName("");
	};

	return (
		<form onSubmit={handleSubmit}>
			<input
				type="text"
				value={taskName}
				onChange={(e) => setTaskName(e.target.value)}
				placeholder="Enter task name"
			/>
			<button type="submit">Add Task</button>
		</form>
	);
};

export default TaskForm;
