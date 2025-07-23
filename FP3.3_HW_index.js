
const items = [
  {id: 1, item: "Item 1", price: 10},
  {id: 2, item: "Item 2", price: 20},
  {id: 3, item: "Item 3", price: 15},
  {id: 4, item: "Item 4", price: 25}
]

const listItem = document.querySelector("#itemList")
const displayTotalCost = document.querySelector("#totalCost")
const averageCostContainer = document.querySelector("#averageCost")

const listItemHTML = items.reduce((acc,curr) => {
     acc.totalCost = acc.totalCost + curr.price 

     const liElements = document.createElement("li")
     liElements.textContent = `${curr.item} - $ ${curr.price}`
     listItem.appendChild(liElements)

     return acc
}, {totalCost: 0})


displayTotalCost.textContent = listItemHTML.totalCost

const averageCost = listItemHTML.totalCost / items.length
averageCostContainer.textContent = averageCost