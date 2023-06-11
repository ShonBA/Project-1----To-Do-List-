const TASKS_KEY = "TaskList"
let tasks = [];
loadFromLocalStorage()


function addTask() {
    event.preventDefault();
    const taskTextBox = document.getElementById("taskTextBox");
    const dateNumberBox = document.getElementById("dateNumberBox");
    const timeNumberBox = document.getElementById("timeNumberBox");
    const task = {
        task: taskTextBox.value,
        date: dateTemplate(dateNumberBox.value),
        time: timeNumberBox.value
    }
    tasks.push(task);
    saveToLocalStorage();
    displayTasksList();
    taskTextBox.value = "";
    dateNumberBox.value = "";
    timeNumberBox.value = "";
    taskTextBox.focus();
<<<<<<< HEAD
}


function dateTemplate(date){
    const [year , month, day] = date.split("-")
    return `${day}-${month}-${year}`;
=======
>>>>>>> a670cec54877d415e7492962f90564e59525a148
}

function saveToLocalStorage() {
    const str = JSON.stringify(tasks);
    localStorage.setItem(TASKS_KEY, str);
}

function loadFromLocalStorage() {
    const strTasks = localStorage.getItem(TASKS_KEY);
    if(strTasks != null && strTasks.length > 0){
        tasks = JSON.parse(strTasks);
    }
    displayTasksList()
}

function displayTasksList(){
    const tableRowContainer = document.getElementById("tableRowContainer");
    let html = "";
    for (let i = 0; i <tasks.length; i++) {
        html += `<td><span>${tasks[i].task}<br></span><span><div>${tasks[i].date}<br>${tasks[i].time}</div><div class="removeContainer"><a href="#" id="${i}" class="btn btn-danger removeButton" onclick="deleteTask(this)">X</a></div></span></td>`
    }
    tableRowContainer.innerHTML = html
}

function deleteTask(element){
    const index = element.id;
    tasks.splice(index, 1);
    saveToLocalStorage();
    displayTasksList();
}