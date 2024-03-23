let nameTask1 = "Task 1";
let nameTask2 = "Task 2";
let nameTask3 = "Task 3";
let nameTask4 = "Task 4";
let nameTask5 = "Task 5";
let nameTask6 = "Task 6";
let nameTask7 = "Task 7";
let nameTask8 = "Task 8";
let nameTask9 = "Task 9";
let nameTask10 = "Task 10";

let statusTask1 = true;
let statusTask2 = true;
let statusTask3 = true;
let statusTask4 = true;
let statusTask5 = true;
let statusTask6 = true;
let statusTask7 = true;
let statusTask8 = true;
let statusTask9 = true;
let statusTask10 = true;

init();
function init (){
    crearTarea(1,nameTask1, statusTask1);
    crearTarea(2,nameTask2, statusTask2);
    crearTarea(3,nameTask3, statusTask3);
    crearTarea(4,nameTask4, statusTask4);
    crearTarea(5,nameTask5, statusTask5);
    crearTarea(6,nameTask6, statusTask6);
    crearTarea(7,nameTask7, statusTask7);
    crearTarea(8,nameTask8, statusTask8);
    crearTarea(9,nameTask9, statusTask9);
    crearTarea(10,nameTask10, statusTask10);
}


function crearTarea (idTask, nameTask, statusTask){
    const taskContainer = document.getElementById("Task-container");
    const task1 = document.createElement("div");
    task1.setAttribute("class", "Task");
    const task1Span = document.createElement("span");
    if(statusTask!==false){
        task1Span.setAttribute("class", "task-done")
    }
    task1Span.setAttribute("id", "span" + idTask);
    const taskNameNode = document.createTextNode(nameTask);
    task1Span.appendChild(taskNameNode);
    const task1Check = document.createElement("input");
    task1Check.setAttribute("class", "checkbox");
    task1Check.setAttribute("type", "checkbox");
    task1Check.setAttribute("checked",statusTask);
    task1Check.setAttribute("id",idTask);
    task1Check.addEventListener("click", onCheckClick);

    taskContainer.appendChild(task1);
    task1.appendChild(task1Span);
    task1.appendChild(task1Check);
}

function calcularTaskPendientes (){
    return 0;
} 

function calcularTaskCompletadas (){
    return 0;
}

function onCheckClick(e) {
    const taskCheck = e.target;
    
    let nuevoCheck = false;
    if (taskCheck.getAttribute("checked") === "false") {
        nuevoCheck = true;
    }
    taskCheck.setAttribute("checked", nuevoCheck);

    const taskId = taskCheck.getAttribute("id");
    const taskSpan = document.getElementById("span"+ taskId);
    taskSpan.classList.toggle("task-done");

    if (taskId === '1') {
        statusTask1 = nuevoCheck;
    } else if (taskId === '2') {
        statusTask2 = nuevoCheck;
    } else if (taskId === '3') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '4') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '5') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '6') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '7') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '8') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '9') {
        statusTask3 = nuevoCheck;
    } else if (taskId === '10') {
        statusTask3 = nuevoCheck;
    } 
}  
