// map () method 

const numbers = [1, 2, 3, 4, 5]

const numbersMultipliedByTwo = numbers.map((num) => num * 2)
console.log(numbersMultipliedByTwo)

const numbersArray = [2, 4, 5, 6]

const doubleNumbersInArray = numbersArray.map((num) => num * num)
console.log("Doubled Array :", doubleNumbersInArray)

const wordsArray = ["apple", "mango", "orange", "grapes"]

const capitilizedArray = wordsArray.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
console.log(capitilizedArray)

const numericArray = [1, 2, 3, 4, 5]
const stringArray = numericArray.map((num) => num.toString())
console.log(stringArray)