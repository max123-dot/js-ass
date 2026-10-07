const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearAll");

addBtn.addEventListener("click", function () {

    const taskText = taskInput.value.trim();

    // The empty task checker
    if (taskText === "") {
        return;
    }

    // Create the task container
    const task = document.createElement("li");

    // Create the task text
    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    // Create the delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("deleteBtn");

    // Put the text and button inside the task
    task.appendChild(taskName);
    task.appendChild(deleteBtn);

    // Put the task on the page
    taskList.appendChild(task);

    // Delete this specific task
    deleteBtn.addEventListener("click", function () {
        task.remove();
        updateCount();
    });

    updateCount();

    taskInput.value = "";
});

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

clearBtn.addEventListener("click", function () {
    taskList.innerHTML = "";
    updateCount();
});