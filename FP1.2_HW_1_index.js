
const books = [
    {title: "The Catcher in the Rye", author: "J.D. Salinger"},
    {title:  "To Kill a Mockingbird", author: "Harper Lee"},
    {title: "1984", author: "George Orwell"}
]

const booksTitle = books.map((book) => book.title)
console.log(booksTitle)

const fruits = [
    {name: "apple", color: "red"},
    {name: "banna", color: "yellow"},
    {name: "kiwi", color: "brown"}
]

const uppercaseFruitName = fruits.map((fruit) => ({...fruit, name: fruit.name.toUpperCase()}))
console.log(uppercaseFruitName)

const employees = [
  { name: "Alice", salary: 50000 },
  { name: "Bob", salary: 60000 },
  { name: "Charlie", salary: 70000 },
]

const salaryIncreaseByTenPercent = employees.map((sal) => ({...sal, salary: sal.salary + (sal.salary * 10)/100}))
console.log(salaryIncreaseByTenPercent)

const products = [
    { name: "Laptop", price: 1000 },
    { name: "Smartphone", price: 500 },
    { name: "Headphones", price: 100 }
]

const twentyPercentDiscountsOnProducts = products.map((product) => ({...product, price: product.price - (product.price * 20)/100}))
console.log(twentyPercentDiscountsOnProducts)

const cities = [
    { name: "New York", temperature: 25 },
    { name: "Los Angeles", temperature: 30 },
    { name: "Chicago", temperature: 20 },
]

const citiesTempCeliusToFarenheit = cities.map((city) => ({...city, temperature: (city.temperature * 9/5) + 32}))
console.log(citiesTempCeliusToFarenheit)

const teachers = [
    { name: "Olivia", monthlySalary: 4500 },
    { name: "Paul", monthlySalary: 5500 },
    { name: "Rachel", monthlySalary: 5000 }
]

const annualIncome = teachers.map((teacher) => ({...teacher, monthlySalary: teacher.monthlySalary * 12 + 500}))
console.log(annualIncome)

const countries = [
    { name: "USA", population: 331000000, landArea: 9833517 },
    { name: "India", population: 1393000000, landArea: 2973190 },
    { name: "Brazil", population: 213993437, landArea: 8515767 }
]

const populationDensity = countries.map((country) => ({country: country.name, populationDensity: country.population / country.landArea}))
console.log(populationDensity)