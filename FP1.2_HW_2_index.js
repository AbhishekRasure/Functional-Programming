const students = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 55 },
    { name: "Charlie", score: 75 }
]

const studentsResult = students.map((student) => ({...student, passed: student.score >= 60 ? true : false}))
console.log(studentsResult)

const songs = [
    { title: "Bohemian Rhapsody", duration: 367 },
    { title: "Hotel California", duration: 420 },
    { title: "Stairway to Heaven", duration: 482 }
]

const durationSecondsToMinutes = songs.map((song) => ({...song, duration:song.duration/60}))
console.log(durationSecondsToMinutes)

const employees = [
    { name: "Alice", salary: 50000 },
    { name: "Bob", salary: 60000 },
    { name: "Charlie", salary: 70000 }
]

const annualIncome = employees.map((employee) => ({...employee, annualIncome: employee.salary * 12}))
console.log(annualIncome)

const newStudents = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 25 }
]

const isAdult = newStudents.map((student) => ({...student, classification: student.age >= 18 ? "adult" : "minor"}))
console.log(isAdult)

const newemployees = [
    { name: "Emily", salary: 60000 },
    { name: "David", salary: 45000 },
    { name: "Grace", salary: 75000 }
]

const addSign = newemployees.map((employee) => ({...employee, salary: "$" + employee.salary}))
console.log(addSign)

const products = [
    { name: "Laptop", price: 1200 },
    { name: "Headphones", price: 50 },
    { name: "Smartphone", price: 800 }
]

const addLabel = products.map((product) => ({name: product.name, label: product.price >= 100 ? "expensive" : "affordable"}))
console.log(addLabel)

const books = [
    { title: "The Catcher in the Rye", year: 1951 },
    { title: "Harry Potter and the Sorcerer's Stone", year: 1997 },
    { title: "The Hunger Games", year: 2008 }
]

const categoriseBooks = books.map((book) => ({title: book.title, category: book.year >= 2000 ? "modern" : "classic"}))
console.log(categoriseBooks)

const developers = [
    { name: "John", hourlyRate: 40, hoursPerWeek: 30 },
    { name: "Lisa", hourlyRate: 50, hoursPerWeek: 35 },
    { name: "Mike", hourlyRate: 45, hoursPerWeek: 40 }
]

const annualIncomeOfEmployees = developers.map((developer) => ({name: developer.name, annualIncome: developer.hourlyRate * (50 * developer.hoursPerWeek)})) 
console.log(annualIncomeOfEmployees)

const salesReps = [
    { name: "David", monthlyCommission: 8000 },
    { name: "Helen", monthlyCommission: 10000 },
    { name: "Ivan", monthlyCommission: 6000 }
]

const annualIncomeOfEmployeesWithCommission = salesReps.map((employee) => ({name: employee.name, annualIncome: employee.monthlyCommission * 12 + 50000}))
console.log(annualIncomeOfEmployeesWithCommission)

const studentsGrades = [
    { name: "Alice", score: 85 },
    { name: "Bob", score: 60 },
    { name: "Charlie", score: 92 }
]

const gradesBasedSystem = studentsGrades.map((student) => {
    if (student.score >= 90) {
    student.grade = "A";
  } else if (student.score >= 80 && student.score < 90) {
    student.grade = "B";
  } else if (student.score >= 70 && student.score < 80) {
    student.grade = "C";
  } else if (student.score >= 60 && student.score < 70) {
    student.grade = "D";
  } else if (student.score <= 59) {
    student.grade = "F";
  }
  return {name:student.name, grade: student.grade}
})

console.log(gradesBasedSystem)