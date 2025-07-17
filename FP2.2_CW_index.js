//filter 
const tasks = [
    {id: 1, title: "Task 1", status: "Completed"},
    {id: 2, title: "Task 2", status: "Pending"},
    {id: 3, title: "Task 3", status: "Completed"},
    {id: 4, title: "Task 4", status: "Pending"},
    {id: 5, title: "Task 5", status: "Not Started"}
]

const filteredPendingTask = tasks.filter(task => task.status === "Pending")
console.log(filteredPendingTask)

const notCompleted = tasks.filter(task => task.status !== "Completed")
console.log(notCompleted)

const books = [
    {id: 1, title: "book 1", year: 2005, noOfPages: 250},
    {id: 2, title: "book 2", year: 2012, noOfPages: 400},
    {id: 3, title: "book 3", year: 2015, noOfPages: 288},
    {id: 4, title: "book 4", year: 2008, noOfPages: 350}
]

const filterBooks = books.filter(book => book.year > 2010 && book.noOfPages > 300)
console.log(filterBooks)