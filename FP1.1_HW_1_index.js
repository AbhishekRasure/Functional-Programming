const words = ["apple", "banana", "kiwi", "orange", "grape"]
const resultStr = []
const stringLength = words.map((str) => resultStr.push(str.length))

console.log(resultStr)

const numbers = [1, 2, 3, 4, 5]
const squareNumbers = numbers.map((num) => num * num)
console.log(squareNumbers)

const fruits = ["apple", "banana", "kiwi", "orange", "grape"]
const upperCaseFruitsName = fruits.map((fruit) => fruit.toUpperCase())
console.log(upperCaseFruitsName)

const nums = [4, 9, 16, 25, 36]
const squareRoot = nums.map((num) => Math.sqrt(num))
console.log(squareRoot)

const prefixFruits = ["apple", "banana", "kiwi", "orange", "grape"]
const addPrefixStr = prefixFruits.map((fruit) => `fruit_${fruit}`)
console.log(addPrefixStr)

const numbersArray = [1, 2, 3, 4, 5]
const addTenToArrayOfNumbers = numbersArray.map((num) => 10 + num)
console.log(addTenToArrayOfNumbers)

const numsArray = [1, 2, 3, 4, 5]
const addSquareOfEachNumToNum = numsArray.map((num) => num * num + num)
console.log(addSquareOfEachNumToNum)

const numsArr = [-5, 3, -8, 12, -1, 6]
const convertNumArrToAbsoluteValue = numsArr.map((num) => Math.abs(num))
console.log(convertNumArrToAbsoluteValue)

const phrases = ["Hello", "How are you", "Goodbye"]
const appendStrToPhrases = phrases.map((phrase) => phrase + "!")
console.log(appendStrToPhrases)

const fruitWords = ["apple", "banana", "kiwi", "orange", "grape"]
const capitalizeThirdLetter = fruitWords.map((fruit) =>  fruit.slice(0, 2) + fruit.charAt(2).toUpperCase() + fruit.slice(3,fruit.length))
console.log(capitalizeThirdLetter)