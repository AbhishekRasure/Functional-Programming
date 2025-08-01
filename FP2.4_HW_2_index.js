const items = [
  { id: 1, item: "Item 1", status: "In Sale" },
  { id: 2, item: "Item 2", status: "New Release" },
  { id: 3, item: "Item 3", status: "New Release" },
  { id: 4, item: "Item 4", status: "In Sale" },
  { id: 5, item: "Item 5", status: "In Sale" }

]

const itemsListContainer = document.querySelector("#itemsList")
const itemsListRadioBtn = document.getElementsByName("status")

function renderItems(selectedItemStatus){
    const filteredItems = selectedItemStatus === "allItems" ? items : items.filter(item => item.status === selectedItemStatus)

    const itemsListHTML = filteredItems.map(item => `
       <li>
          <strong>ID:</strong> ${item.id}<br>
          <strong>Item:</strong> ${item.item}<br>
          <strong>Status:</strong> ${item.status}<br>
          <hr>
       </li>
   `)

    itemsListContainer.innerHTML = itemsListHTML.join('')
}

renderItems("allItems")

itemsListRadioBtn.forEach(itemBtn => {
    itemBtn.addEventListener("change", function(){
        renderItems(this.value)
    })
})
