
const stationeryWords = [
  "pen",
  "notebook",
  "eraser",
  "notebook",
  "pencil",
  "notebook",
  "pencil",
]

const findLength = stationeryWords.reduce((acc, curr) => {
    acc = acc + curr.length
    return acc
}, 0)

console.log(findLength)

const numbersArray = [1, 2, 3, 4, 5, 6]

const sumOfEven = numbersArray.reduce((acc, curr) => {
    acc = (curr % 2 === 0 ? acc + curr : acc)
    return acc
}, 0)

console.log(sumOfEven)

const numsArr = [11, 22, 32, 14, 15, 62, 17, 18, 29, 10]

const sumOfOddNumCount = numsArr.reduce((acc, curr) => {
    acc = (curr % 2 !== 0 ? acc + 1 : acc)
    return acc
}, 0)

console.log(sumOfOddNumCount)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const evenAndOddNumbers = nums.reduce((acc, curr) => {
   curr % 2 === 0 ? (acc["even"] = acc["even"] + 1) : (acc["odd"] = acc["odd"] + 1)
   return acc
}, {even : 0, odd: 0})

console.log(evenAndOddNumbers)

const allNumns = [1, 2, -3, 4, 5, -6, 7, -8, -9, 12]

const positiveAndNegativeNums = allNumns.reduce((acc, curr) => {
     curr >= 0 ? (acc["pos"] = acc["pos"] + 1) : (acc["neg"] = acc["neg"] + 1)
     return acc
}, {pos: 0, neg: 0})

console.log(positiveAndNegativeNums)

const numPositive = [-2, 3, 4, 0, -5, 6]

const productOfNegNums = numPositive.reduce((acc, curr) => (curr < 0 ? (acc * curr) : acc), 1)

console.log(productOfNegNums)

const wordsCaps = ["reduce", "method", "needs", "a", "lot", "of", "practice"]

const wordsUpperCase = wordsCaps.reduce((acc, curr) => (curr ? acc + curr.toUpperCase() + ' ' : acc), "")
console.log(wordsUpperCase)