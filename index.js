const taskInput = document.getElementById("taskInput");
const AddTask = document.getElementById("AddTask");
const taskList = document.getElementById("taskList");


AddTask.addEventListener("click", addTask);
taskInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        addTask();
    }
});


function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === "") {
    alert("Enter Your Task");
    return;
  }
  const li = document.createElement("li");
  li.innerHTML = `<span>${taskText}</span>
            <button onclick="editTask(this)">Edit</button>
            <button onclick="deleteTask(this)">Delete</button>`;
           
  taskList.appendChild(li);
  taskInput.value = "";
}


editTask = function (button) {
  const span = button.parentElement.querySelector("span");
  const newTaskText = prompt("Edit Task :", span.textContent);
  if (newTaskText !== null && newTaskText.trim() !== "") {
    span.textContent = newTaskText.trim();
  }
};


deleteTask = function (button) {
  taskList.removeChild(button.parentElement);
};

