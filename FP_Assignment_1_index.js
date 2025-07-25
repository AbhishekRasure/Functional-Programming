
const numsArray = [10, 5, 8, 4, 6]

const subtractSquareFromNum = numsArray.map((num) => num - num ** 2 )
console.log(subtractSquareFromNum)

const numbsArray = [3, -2, -5, 12, 8, -4, 7]

const doubleNegativeAndSubtract = numbsArray.map((num) => (num < 0 ? num - num * 2 : num))
console.log(doubleNegativeAndSubtract)

const sentencesArray = [

  "JavaScript is a powerful programming language.",
  "Web development involves frontend and backend technologies.",
  "Coding is a skill that can be learned and mastered over time.",

]

const countWords = sentencesArray.map((word) => `${word} ${word.split(' ').length}`)
console.log(countWords)

const cars = [

  { brand: "Toyota", model: "Camry" },
  { brand: "Honda", model: "Accord" },
  { brand: "Ford", model: "Mustang" }

]

const carsBrand = cars.map((car) => car.brand)
console.log(carsBrand)

const movies = [

  { title: "Inception", genre: "Sci-Fi" },
  { title: "The Shawshank Redemption", genre: "Drama" },
  { title: "The Dark Knight", genre: "Action" }

]

const genre = movies.map((movie) => movie.genre)
console.log(genre)

const furnitures = [

  { type: "Sofa", width: 200, height: 80 },
  { type: "Table", width: 120, height: 60 },
  { type: "Chair", width: 50, height: 45 }

]

const increaseDimenstionsBy10 = furnitures.map((furniture) => ({...furniture, width : furniture.width + (furniture.width * 10) / 100 , height: furniture.height + (furniture.height * 10) / 100}))

console.log(increaseDimenstionsBy10)

const products = [

  { name: "Laptop", price: 1200 },
  { name: "Smartphone", price: 800 },
  { name: "Headphones", price: 50 },
  { name: "Camera", price: 300 }

]

const affordableOrNot = products.map((product) => ({...product, affordable : product.price <= 100 ? product.affordable = true : false}))

console.log(affordableOrNot)

const numbers = [12, 7, 15, -8, 22, -10, 5, 13, -18]

const negativeNums = numbers.filter((num) => (num < 0 && num % 2 === 0))

console.log(negativeNums)

const students = [

  { name: "Alice", score: 85, activeParticipant: true, club: "Math" },
  { name: "Bob", score: 55, activeParticipant: false, club: "History" },
  { name: "Charlie", score: 75, activeParticipant: true, club: "Science" }

]

const filterStudents = students.filter((student) => (student.score > 70 && student.club === "Math" || student.club === "Science"))

console.log(filterStudents)

const words = ["apple", "banana", "kiwi", "grape", "pear", "orange", "strawberry"]

const filterWords = words.filter((word) => (word.includes("a") && word.length > 5))
console.log(filterWords)