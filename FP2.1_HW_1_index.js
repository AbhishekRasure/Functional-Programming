
const nums = [12, 5, 20, 8, 15, 30]
const greaterThanTen = nums.filter(num => num > 10)
console.log(greaterThanTen)

const words = ["hello", "world", "apple", "orange", "banana"]
const wordsContainingO = words.filter(word => word.includes("o"))
console.log(wordsContainingO)

const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10]
const primeNumbers = numbers.filter((num) => {
    if(num === 2) return num
    for(let i = 2; i < num; i++){
        if(num % i === 0){
            return;
        }
        return num
    }
})
console.log(primeNumbers)

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multipleOfThree = threeMultiples.filter((number) => number % 3 === 0)

console.log(multipleOfThree)

const numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notDivisibleByTwoAndThree = numbs.filter((num) => num % 2 !== 0 && num % 3 !== 0)

console.log(notDivisibleByTwoAndThree)

const fruitNames = ["APPLE", "banana", "KIWI", "ORANGE", "GRAPE"]
const findUppercaseWords = fruitNames.filter((fruit) => fruit === fruit.toUpperCase())
console.log(findUppercaseWords)

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"]
const doNotEndWithY = wordsY.filter(word => !word.endsWith("y"))
console.log(doNotEndWithY)

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multipliesTwoAndThree = number.filter(num => num % 2 === 0 && num % 3 === 0)
console.log(multipliesTwoAndThree)

const feelingWords = ["happy", "sad", "sunny", "cloudy", "rainy"]
const yAndUincludes = feelingWords.filter(word => word.includes("y") && word.includes("u"))
console.log(yAndUincludes)

const newNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multipleOfFiveAndThree = newNums.filter(num => num % 3 === 0 || num % 5 === 0)
console.log(multipleOfFiveAndThree)