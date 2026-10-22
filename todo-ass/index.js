const taskInput = document.getElementById("taskInput");
const addBtn = document.getElementById("addBtn");
const taskList = document.getElementById("taskList");
const taskCount = document.getElementById("taskCount");
const clearBtn = document.getElementById("clearAll");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach(function (taskText) {
        const task = document.createElement("li");

        const taskName = document.createElement("span");
        taskName.textContent = taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add("deleteBtn");

        task.appendChild(taskName);
        task.appendChild(deleteBtn);

        taskList.appendChild(task);

        deleteBtn.addEventListener("click", function (){
            tasks = tasks.filter(function (item){
                return item !== taskText;
            });

            saveTasks();
            displayTasks();
            
        });
    });
    updateCount();
}


addBtn.addEventListener("click", function () {
    const taskText = taskInput.value.trim();
    if (taskText !== ""){
        tasks.push(taskText);
        saveTasks();
        displayTasks();
        taskInput.value = "";
    }
})

function updateCount() {
    taskCount.textContent = taskList.children.length;
}

clearBtn.addEventListener("click", function () {
    tasks = [];
    saveTasks();
    displayTasks()
});

displayTasks();
