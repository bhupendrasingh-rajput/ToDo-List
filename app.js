const taskNameInput = document.getElementById("taskNameInput");
const taskDescInput = document.getElementById("taskDescInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskTable = document.getElementById("taskTable");
const deleteAllBtn = document.getElementById("deleteAllBtn");

addTaskBtn.addEventListener("click", addTask);
taskTable.addEventListener("click", deleteTask);
taskTable.addEventListener("click", completeTask);
deleteAllBtn.addEventListener("click", deleteAllTasks);

function addTask(event) {
	event.preventDefault();
	
	if(taskNameInput.value !== "" && taskDescInput.value !== "") {
		const newRow = taskTable.insertRow(-1);
		
		const nameCell = newRow.insertCell(0);
		nameCell.innerHTML = taskNameInput.value;
		
		const descCell = newRow.insertCell(1);
		descCell.innerHTML = taskDescInput.value;
		
		const deleteCell = newRow.insertCell(2);
		const deleteBtn = document.createElement("button");
		deleteBtn.classList.add("btn", "btn-danger", "btn-sm", "deleteBtn");
		deleteBtn.textContent = "Delete";
		deleteCell.appendChild(deleteBtn);
		
		taskNameInput.value = "";
		taskDescInput.value = "";
	}
}

function deleteTask(event) {
	if(event.target.classList.contains("deleteBtn")) {
		const row = event.target.parentElement.parentElement;
		row.remove();
	}
}

function completeTask(event) {
	if(event.target.tagName === "TD") {
		event.target.classList.toggle("completed");
	}
}

function deleteAllTasks(event) {
	event.preventDefault();
	taskTable.innerHTML = "";
}
