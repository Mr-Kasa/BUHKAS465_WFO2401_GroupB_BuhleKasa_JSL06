// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// QUESTION: What should you do first? How can you display menu items by category?

// Function to display menu items by category
function displayMenuItems(menu) {
    // QUESTION: What do you need to get from the HTML to display the menu? Find a way to reference it.
        const MenuDiv = document.getElementById('menu')

    // QUESTION: How can you loop through each category and its items in the menu object?
    for (const [category, items] of Object.entries(menu)) {
        // QUESTION: What HTML element represents a category? Create it here.
        const mealType = document.createElement('h2')        // QUESTION: How can you set the text content of the category element to the category name?
        mealType.innerHTML = category
        // QUESTION: How can you append the category element to the menu container in the HTML?
        MenuDiv.appendChild(mealType)
        // QUESTION: What HTML element represents a list of items? Create it here.
        const itemsList = document.createElement('ul')
        // QUESTION: Loop through the items in the category and create list items for each one.

        items.forEach(item => {
            // QUESTION: Create a list item element here.
            const listItem = document.createElement('li')
            // QUESTION: How can you set the text content of the list item element to the item name?
            listItem.innerHTML= item
            // QUESTION: Attach a click event listener to the list item to add it to the order.
            listItem.addEventListener('click', ()=>{
                addToOrder()
            })
            itemsList.appendChild(listItem)
            // QUESTION: How can you append the list item to the list of items for this category?
            MenuDiv.appendChild(itemsList)
        });
    }
}
displayMenuItems(menu)

// QUESTION: How can you update the order when an item is added? What elements in the HTML do you need to reference?

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // QUESTION: What HTML elements represent the order items list and the order total?
      const orderItem = document.getElementById('order-item')
    // QUESTION: Create a list item for the order here.
    const listItem = document.createElement('li')
    // QUESTION: How can you set the text content of the list item to the item name?
    listItem.innerText = itemName
    // QUESTION: How can you append the list item to the order items list?
    orderItem.appendChild(listItem)
    // QUESTION: Calculate and update the total price. How can you access the current total and item price?
    
    let  total = document.getElementById('order-total')
    let Total = parseFloat(total.innerHTML,[2])
    Total += 60
    total.innerHTML= Total
    // QUESTION: How can you update the text content of the order total element with the new total?
}

// QUESTION: What's the first step to initialize the menu system and display the menu?

// Function to initialize the menu system
function initMenuSystem(menu) {
    // QUESTION: What function should you call to display the menu?
}

// QUESTION: How can you start the menu system? What function should you call here?

// Call the init function to start the menu system
initMenuSystem(menu);



