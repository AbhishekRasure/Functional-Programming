
const words = ["apple", "banana", "kiwi", "orange", "grape"];

const longestWord = words.reduce((acc, curr) => (acc.length < curr.length ? curr : acc), words[0])
console.log(longestWord)

const numbers = [10, 5, 8, 20, 15]

const minimumNumber = numbers.reduce((acc, curr) => (acc > curr ? curr : acc), numbers[0])
console.log(minimumNumber)

const wordsLength = ["apple", "banana", "kiwi", "orange", "grape"]

const totalLength = wordsLength.reduce((acc, curr) => acc = acc + curr.length, 0)
console.log(totalLength)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const evenNumbers = nums.reduce((acc,curr) => (curr % 2 === 0) ? acc + 1 : acc, 0)
console.log(evenNumbers)

const wordsCaps = ["hello", "world", "how", "are", "you"]

const concatenateWords = wordsCaps.reduce((acc, curr) => acc + curr.charAt(0).toUpperCase() + curr.slice(1, curr.length) + " ", "")
console.log(concatenateWords)

const numsAvg = [10, 15, 20, 25, 30]

const sumOfNumbers = numsAvg.reduce((acc, curr) => acc = acc + curr, 0)

const averageNums = sumOfNumbers / numsAvg.length
console.log(averageNums)

const numbersArr = [1, 2, 3, 4, 5]

const squareOfNumbers = numbersArr.reduce((acc,curr) => acc = acc + curr * curr, 0)
console.log(squareOfNumbers)

const stationeryWords = ["pen", "notebook", "eraser", "notebook", "pencil", "notebook", "pencil"]

const occurrenceOfWords = stationeryWords.reduce((acc,curr) => {
     acc[curr] = (acc[curr] || 0) + 1
     return acc
}, {})
console.log(occurrenceOfWords)

const wordsLetter = ["apple", "banana", "kiwi", "orange", "grape"]

const firstLetterOfWords = wordsLetter.reduce((acc, curr) => {
    acc[curr.charAt(0)] = (acc[curr.charAt(0)] || 0) + 1
    return acc
}, {})
console.log(firstLetterOfWords)

const numPositive = [-2, 3, 4, -5, 6]

const positiveNums = numPositive.reduce((acc,curr) => (curr > 0 ? acc * curr : acc), 1)
console.log(positiveNums)
