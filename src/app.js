const localStorage = window.localStorage

init();
function init (){
    
    
    if(!localStorage.getItem("nextTaskId")){
        localStorage.setItem("nextTaskId", "0");
    }

    if(!localStorage.getItem("tasks")){
        localStorage.setItem("tasks","[]");
    }
    
    visualizarTareas();



    actualizarSpanTareasCompletadas();
    actualizarSpanTareasPendientes();
}

function visualizarTareas(){
    const tareas = localStorage.getItem("tasks")
    if(tareas){
        let listObject = JSON.parse(tareas)
        var Task = null
        for(let i = 0; i < listObject.length; i++){
            const task = listObject[i]

            crearTarea(task.id, task.name, task.status);
        }
    }
}

function actualizarSpanTareasCompletadas(){
    let tareasCompletadas = calcularTaskCompletadas();
    const taskCompletadasSpan = document.getElementById("task-completadas");
    taskCompletadasSpan.innerText = tareasCompletadas.toString();
}

function actualizarSpanTareasPendientes(){
    let tareasPendientes = calcularTaskPendientes();
    const taskPendientesSpan = document.getElementById("task-pendientes");
    taskPendientesSpan.innerText = tareasPendientes.toString();
}


function crearTarea (idTask, nameTask, statusTask){
    const taskContainer = document.getElementById("Task-container");
    const task1 = document.createElement("div");
    task1.setAttribute("class", "Task");
    const task1Span = document.createElement("span");
    if(statusTask!==false){
        task1Span.setAttribute("class", "task-done");
    }
    task1Span.setAttribute("id", "span" + idTask);
    const taskNameNode = document.createTextNode(nameTask);
    task1Span.appendChild(taskNameNode);
    const task1Check = document.createElement("input");
    task1Check.setAttribute("class", "checkbox");
    task1Check.setAttribute("type", "checkbox");
    if(statusTask!==false){
        task1Check.setAttribute("checked", statusTask);
    }
    task1Check.setAttribute("id",idTask);
    task1Check.addEventListener("click", onCheckClick);

    taskContainer.appendChild(task1);
    task1.appendChild(task1Span);
    task1.appendChild(task1Check);
}

function calcularTaskPendientes (){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks.filter(t => t.status === false).length;
} 

function calcularTaskCompletadas (){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    return tasks.filter(t => t.status === true).length;
}

function onCheckClick(e) {
    const taskCheck = e.target;
    
    let nuevoCheck = false;
    if (taskCheck.getAttribute("checked") === null) {
        nuevoCheck = true;
    }
    if(nuevoCheck === true){
        taskCheck.setAttribute("checked", nuevoCheck);
    } else{
        taskCheck.removeAttribute("checked");
    }

    const taskId = taskCheck.getAttribute("id");
    const taskSpan = document.getElementById("span"+ taskId);
    taskSpan.classList.toggle("task-done");


    actualizarStatusTarea(parseInt(taskId), nuevoCheck);
    actualizarSpanTareasCompletadas();
    actualizarSpanTareasPendientes();
}  

function actualizarStatusTarea(id, nuevoCheck){
    const tasks = JSON.parse(localStorage.getItem("tasks"));
    const taskIndex = tasks.findIndex(t => t.id === id);
    tasks[taskIndex] = {...tasks[taskIndex], status:nuevoCheck};

    localStorage.setItem("tasks",JSON.stringify(tasks));
}
