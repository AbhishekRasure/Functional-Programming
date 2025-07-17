
const nums = [12, 5, 20, 7, 8, 15, 30]
const evenNumbers = nums.filter(num => num % 2 === 0)
console.log(evenNumbers)

const fruitWords = ["kiwi", "mango", "apple", "orange", "banana"]
const wordLengthGreaterThanFive =  fruitWords .filter(word => word.length > 5)
console.log(wordLengthGreaterThanFive)

const words = ["Sun", "Moon", "Star", "Planet", "Saturn"]
const startsWithS = words.filter(word => word.startsWith("S"))
console.log(startsWithS)

const threeMultiples = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const notMultiplesOfThree = threeMultiples.filter(num => num % 3 !== 0)
console.log(notMultiplesOfThree)

const numbs = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]
const divisibleBySevenAndThree = numbs.filter(num => num % 3 === 0 && num % 7 === 0)
console.log(divisibleBySevenAndThree)

const fruitWord = ["APPLE", "banana", "KIWI", "orange", "GRAPE"]
const lowerCaseWords = fruitWord.filter(word => word === word.toLowerCase())
console.log(lowerCaseWords)

const wordsY = ["happy", "sad", "sunny", "cloudy", "rainy"]
const notContainingA = wordsY.filter(word => !word.includes("a"))
console.log(notContainingA)

const numsOnetoTen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const multiplesOfTwoOrThree = numsOnetoTen.filter(num => num % 2 === 0 || num % 3 === 0)
console.log(multiplesOfTwoOrThree)

const feelingWords = ["happy", "sad", "weepy", "sleepy", "rainy"]
const includesYorA = feelingWords.filter(word => word.includes("a") || word.includes("y"))
console.log(includesYorA)

const newNums = [41, 12, 31, 14, 52, 6, 27, 38, 29, 100]
const filterBetween20to40 = newNums.filter(num => num === num >= 20 && num === num <= 40)
console.log(filterBetween20to40)