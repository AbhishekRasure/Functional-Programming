
const employees = [
    {id: 1, name: "Alice", experience: 2},
    {id: 2, name: "Bob", experience: 9},
    {id: 3, name: "Charlie", experience: 4},
    {id: 4, name: "John", experience: 19}
]

const employeesListContainer = document.querySelector("#employeesList")
const employeesCheck = document.querySelector("#employeesCheck")

function renderEmployees(employeeCheck){
    const checkedEmployee = employeeCheck ? employees.filter(employee => employee.experience > 5) : employees
    const employeesHTML = checkedEmployee.map(employee => `
        <li>
            <strong>ID:</strong> ${employee.id}<br>
            <strong>Name:</strong> ${employee.name}<br>
            <strong>Experience:</strong> ${employee.experience}years<br>
            <hr>
        </li>
    `)

    employeesListContainer.innerHTML = employeesHTML.join("")
}

renderEmployees()

employeesCheck.addEventListener("change", function(){
    renderEmployees(employeesCheck.checked)
})

