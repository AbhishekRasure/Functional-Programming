
const students = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 27},
    {name: "Charlie", age: 25}
]

const names = students.map((student) => student.name)
console.log(names)

const studentsWithGrade = students.map((student) => ({...student, grade : "A"}))
console.log(studentsWithGrade)

const people = [
    {name: "Alice", weight: 60, height: 1.65},
    {name: "Bob", weight: 70, height: 1.75},
    {name: "Charlie", weight: 68, height: 1.8}
]

const peopleWithBMI = people.map((person) => ({...person, bmi: (person.weight / person.height ** 2).toFixed(2)}))
console.log("People with BMI:", peopleWithBMI)

const person = {name : "Alice", age: "38", city: "New York"}

const valueInUppercase = Object.values(person).map((value) => value.toUpperCase())
console.log(valueInUppercase)

