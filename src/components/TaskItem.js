// import React from "react";

// const TaskItem = ({ task, onDeleteTask, onToggleComplete }) => {
// 	const taskStyle = {
// 		display: "flex",
// 		alignItems: "center",
// 		margin: "10px",
// 		padding: "10px",
// 		backgroundColor: task.completed ? "lightgray" : "white",
// 		textDecoration: task.completed ? "line-through" : "none",
// 	};

// 	const deleteButtonStyle = {
// 		marginLeft: "10px",
// 		backgroundColor: "red",
// 		color: "white",
// 		border: "none",
// 		padding: "5px 10px",
// 		cursor: "pointer",
// 	};

// 	return (
// 		<div style={taskStyle}>
// 			<input
// 				type="checkbox"
// 				checked={task.completed}
// 				onChange={() => onToggleComplete(task.id)}
// 			/>
// 			<span>{task.name}</span>
// 			<button style={deleteButtonStyle} onClick={() => onDeleteTask(task.id)}>
// 				Delete
// 			</button>
// 		</div>
// 	);
// };

// export default TaskItem;
