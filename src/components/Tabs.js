import React from "react";

const Tabs = ({ activeTab, setActiveTab }) => {
	const handleTabClick = (tab) => {
		setActiveTab(tab);
	};

	return (
		<div className="tabs">
			<button
				className={`tab ${activeTab === "all" ? "active" : ""}`}
				onClick={() => handleTabClick("all")}
			>
				All Tasks
			</button>
			<button
				className={`tab ${activeTab === "completed" ? "active" : ""}`}
				onClick={() => handleTabClick("completed")}
			>
				Completed Tasks
			</button>
		</div>
	);
};

export default Tabs;
