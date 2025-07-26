
const expenses = [

    { id: 1, name: "Groceries", amount: 150 },
    { id: 2, name: "Utilities", amount: 80 },
    { id: 3, name: "Dining Out", amount: 120 },
    { id: 4, name: "Transportation", amount: 50 }

]

const expensesList = document.querySelector("#expensesList")
const expenseCheck = document.querySelector("#expenseCheck")
const totalExpenseHTML = document.querySelector("#totalExpense")

function expenseList(expenses){
    const expenseListHTML = expenses.map((product) => `
    <li>
        <strong>Expense: </strong>${product.name}<br>
        <strong>Amount :</strong>${product.amount}<hr>
    </li>
   `)

    expensesList.innerHTML = expenseListHTML.join("")
    
    const totalExpense = expenses.reduce((acc, curr) => acc + curr.amount, 0)
    totalExpenseHTML.textContent = `$ ${totalExpense}`
}



const filterExpense = (expenses) => {
    const filteredData = expenses.filter((expense) => expense.amount > 100)
    expenseList(filteredData)
}

expenseCheck.addEventListener("change", function(){
    if(expenseCheck.checked){
        filterExpense(expenses)
    }else{
        expenseList(expenses)
    }
})

expenseList(expenses)