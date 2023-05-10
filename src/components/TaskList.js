import React, { useState } from "react";

const TaskList = ({ tasks, completeTask, editTask, deleteTask, activeTab }) => {
	const [editTaskId, setEditTaskId] = useState(null);
	const [editTaskName, setEditTaskName] = useState("");
	const filteredTasks =
		activeTab === "completed" ? tasks.filter((task) => task.completed) : tasks;

	const handleEditInputChange = (e) => {
		setEditTaskName(e.target.value);
	};

	const handleEditSubmit = (taskId) => {
		editTask(taskId, editTaskName);
		setEditTaskId(null);
		setEditTaskName("");
	};

	return (
		<ul className="list">
			{filteredTasks.map((task) => (
				<li key={task.id}>
					{editTaskId === task.id ? (
						<div>
							<input
								type="text"
								value={editTaskName}
								onChange={handleEditInputChange}
							/>
							<button onClick={() => handleEditSubmit(task.id)}>Save</button>
						</div>
					) : (
						<div>
							<span className={task.completed ? "completed" : ""}>
								{task.name}
							</span>
							<button onClick={() => completeTask(task.id)}>
								Mark as Complete
							</button>
							<button onClick={() => setEditTaskId(task.id)}>Edit</button>
							<button onClick={() => deleteTask(task.id)}>Delete</button>
						</div>
					)}
				</li>
			))}
		</ul>
	);
};

export default TaskList;
