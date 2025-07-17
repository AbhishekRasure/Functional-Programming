
const words = ["apple", "banana", "kiwi", "orange", "grape"]
const extractFirstThree = words.map((word) => word.slice(0,3))
console.log(extractFirstThree)

const nums = [1, 2, 3, 4, 5]
const calculateCube = nums.map((num) => num ** 3)
console.log(calculateCube)

const fruitsArray = ["apple", "banana", "kiwi", "orange", "grape"]
const removeFirstTwoLetter = fruitsArray.map((fruit) => fruit.slice(2, fruit.length))
console.log(removeFirstTwoLetter)

const salaries = [5000, 7500, 12000, 3000, 9000]
const addTenPercentBonus = salaries.map((salarie) => salarie + (salarie * 10) / 100)
console.log(addTenPercentBonus)

const names = ["Alice", "Bob", "Charlie", "David", "Eva"]
const addingHello = names.map((name) => `Hello, ${name}`)
console.log(addingHello)

const sentences = ["Hello, how are you?", "JavaScript is fun!", "Arrays are versatile."]
const sentencesLength = sentences.map((sentence) => sentence.length)
console.log(sentencesLength)

const temperaturesCelsius = [0, 20, 37, -5, 10]
const celsiusToFarenheit = temperaturesCelsius.map((temp) => temp * (9/5) + 32)
console.log(celsiusToFarenheit)

const prices = [50, 75, 120, 30, 90]
const returnDiscountedPrice = prices.map((price) => price - (price * 10)/ 100)
console.log(returnDiscountedPrice)

const decimalNumbers = [50.245600, 750.56770, 12.567050, 300.5065, 9.23406789]
const twoDecimalNumbers = decimalNumbers.map((num) => num.toFixed(2))
console.log(twoDecimalNumbers)

const namesArray = ["Alice", "Bob", "Charlie", "David", "Eva"]
const lengthOfName = namesArray.map((name) => name + name.length)
console.log(lengthOfName)