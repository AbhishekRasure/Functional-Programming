// reduce method
const numbers = [1, 2, 3, 4]

const sumOfNumbers = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
console.log(sumOfNumbers)

const stringsArray = ["Hello", "World", "!"]

const combinedStrings = stringsArray.reduce((accumulator, currentValue) => accumulator + currentValue, " ")
console.log(combinedStrings)

// find maximum number in an array

const numbersArray = [10, 5, 8, 20, 15]

const maximumNumber = numbersArray.reduce((acc, curr) => (curr > acc ? curr : acc), numbersArray[0])

console.log(maximumNumber)

// occurrence of each word in an array

const fruits = ["apple", "banana", "apple", "orange", "kiwi", "kiwi"]

const wordCount = fruits.reduce((acc, curr) => {
    acc[curr] = (acc[curr] || 0) + 1
    return acc
}, {})

console.log(wordCount)