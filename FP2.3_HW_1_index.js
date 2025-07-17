
const tasks = [
    {id: 1, title: "Task 1", status: "Todo"},
    {id: 2, title: "Task 2", status: "inProgress"},
    {id: 3, title: "Task 3", status: "completed"},
    {id: 4, title: "Task 4", status: "Todo"}
]

const taskListContainer = document.querySelector("#taskList")
const taskFilter = document.querySelector("#taskFilter")

function renderTasks(filterByStatus){
    const filterTaskByStatus = filterByStatus === "All" ? tasks : tasks.filter(task => filterByStatus === task.status) 
    const taskListHTML = filterTaskByStatus.map(task => `
      <li>
          <strong>ID:</strong> ${task.id}<br>
          <strong>Title:</strong> ${task.title}<br>
          <strong>Status:</strong> ${task.status}<br>
          <hr>
      </li>
    `)

    taskListContainer.innerHTML = taskListHTML.join("")
}

renderTasks(taskFilter.value)

taskFilter.addEventListener("change", function(){
    renderTasks(taskFilter.value)
})