 // Sample menu data (Consider fetching this data from a server in a real-world scenario)
 const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const MenuDiv = document.getElementById('menu');

    for (const [category, items] of Object.entries(menu)) {
        const mealType = document.createElement('h2');
        mealType.textContent = category;
        MenuDiv.appendChild(mealType);

        const itemsList = document.createElement('ul');

        items.forEach(item => {
            const listItem = document.createElement('li');
            listItem.textContent = item;
            listItem.addEventListener('click', () => {
                addToOrder(item);
            });
            itemsList.appendChild(listItem);
        });

        MenuDiv.appendChild(itemsList);
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderItem = document.getElementById('order-items');
    const total = document.getElementById('order-total');

    const listItem = document.createElement('li');
    listItem.textContent = itemName;
    orderItem.appendChild(listItem);

    let Total = parseFloat(total.textContent);
    Total += 60; // Assuming each item costs $60
    total.textContent = Total.toFixed(2);
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    displayMenuItems(menu);
}

initMenuSystem(menu);
