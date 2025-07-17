
const employees = [
    {id: 1, name: "Alice", position: "Developer"},
    {id: 2, name: "Bob", position: "Designer"},
    {id: 3, name: "Charlie", position: "Manager"},
    {id: 4, name: "David", position: "Tester"}
]

const employeesList = document.querySelector("#employeesList")

const employeesListHTML = employees.map(employee => `
    <div>
        <strong>Id : </strong> ${employee.id}<br>
        <strong>Name : </strong>${employee.name}<br>
        <strong>Position : </strong>${employee.position}<br>
        <hr>
    </div>
`)

employeesList.innerHTML = employeesListHTML.join("")