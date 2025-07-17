
const students = [
    {name: "Alice", grade: 80},
    {name: "Bob", grade: 65},
    {name: "Charlie", grade: 90}
]

const filterGrade = students.filter(student => student.grade > 70)
console.log(filterGrade)

const products = [
    {name: "Laptop", price: 1200},
    {name: "Smartphone", price: 800},
    {name: "Tablet", price: 500}
]

const filterPrice = products.filter(product => product.price < 1000)
console.log(filterPrice)

const employees = [
    {name: "Alice", salary: 60000},
    {name: "Bob", salary: 45000},
    {name: "Charlie", salary: 70000}
]

const filterSalary = employees.filter(employee => employee.salary > 50000)
console.log(filterSalary)

const movies = [
    {title: "Inception", rating: 8.8},
    {title: "Interstellar", rating: 8.6},
    {title: "The Dark Knight", rating: 9.0}
]

const filterRating = movies.filter(movie => movie.rating > 7.0)
console.log(filterRating)

const cars = [
    {brand: "Toyota", year: 2018},
    {brand: "Honda", year: 2019},
    {brand: "Ford", year: 2010}
]

const filterYear = cars.filter(car => car.year > 2015)
console.log(filterYear)

const studentGpa = [
    {name: "Alice", gpa: 3.8},
    {name: "Bob", gpa: 3.2},
    {name: "Charlie", gpa: 3.9}
]

const filterGpa = studentGpa.filter(student => student.gpa > 3.5)
console.log(filterGpa)

const fruits = [
    {name: "Apple", pricePerPound: 1.5},
    {name: "Banana", pricePerPound: 2.2},
    {name: "Orange", pricePerPound: 1.8}
]

const filterPricePerPound = fruits.filter(fruit => fruit.pricePerPound < 2.0)
console.log(filterPricePerPound)

const employeesEmployed = [
    {name: "Alice", employed: true},
    {name: "Bob", employed: false},
    {name: "Charlie", employed: true}
]

const filterEmployed = employeesEmployed.filter(employee => employee.employed !== false)
console.log(filterEmployed)

const electronicProducts = [
    {name: "Laptop", inStock: true},
    {name: "Smartphone", inStock: false},
    {name: "Tablet", inStock: true},
]

const filterInStock = electronicProducts.filter(product => product.inStock !== false)
console.log(filterInStock)

const laptops = [
    {brand: "Dell", screenSize: 14},
    {brand: "HP", screenSize: 15.6},
    {brand: "Lenovo", screenSize: 13},
    {brand: "Acer", screenSize: 17},
]

const filterScreenSize = laptops.filter(laptop => laptop.screenSize > 15)
console.log(filterScreenSize)