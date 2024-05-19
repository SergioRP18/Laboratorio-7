const localStorage = window.localStorage

init();

function init(){
    if(!localStorage.getItem("nextTaskId")){
        localStorage.setItem("nextTaskId", "0");
    }

    if(!localStorage.getItem("tasks")){
        localStorage.setItem("tasks","[]");
    }
}

function guardarTarea(){
    const todoInput = document.getElementById("todoinput");
    const taskName = todoInput.value
    if(taskName !== ""){
        let currentTaskId = parseInt(localStorage.getItem("nextTaskId"))
        const newTask = new Task(currentTaskId, taskName, false);
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks.push(newTask)

        localStorage.setItem("tasks", JSON.stringify(tasks));

        localStorage.setItem("nextTaskId", `${++currentTaskId}`);

        mostrarAlerta();

        todoInput.value = "";
    }
}

function mostrarAlerta(){
    const alerta = document.getElementById("alerta");
    alerta.showModal();
}