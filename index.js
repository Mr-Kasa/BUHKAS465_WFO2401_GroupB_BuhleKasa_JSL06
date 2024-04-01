const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
};

const prices = {
    'Garlic Bread': 20,
    'Bruschetta': 50,
    'Margherita Pizza': 200,
    'Spaghetti Carbonara': 120,
    'Tiramisu': 100,
    'Cheesecake': 400
};

// Function to display menu items by category
function displayMenuItems(menu) {
    const menuSection = document.getElementById('menu');

    for (const category in menu) {
        if (menu.hasOwnProperty(category)) {
            const categoryContainer = document.createElement('div');
            categoryContainer.textContent = category;
            menuSection.appendChild(categoryContainer);

            const listedItems = document.createElement('ul');
            menuSection.appendChild(listedItems);

            menu[category].forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item;
                listItem.addEventListener("click", function() {
                    addToOrder(item);
                });
                listedItems.appendChild(listItem);
            });
        }
    }
}

// Callback function for adding an item to the order
function addToOrder(itemName) {
    const orderTotal = document.getElementById('order-total');
    const itemPrice = prices[itemName];
    let total = parseFloat(orderTotal.textContent.substring(2)); //   Extract the total price, remove 'R'
    total += itemPrice;
    orderTotal.textContent = "R" + total.toFixed(2);
    document.getElementById('order-items').innerHTML += "<li>" + itemName + "</li>";
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    const menuItems = document.querySelectorAll('#menu li');

    menuItems.forEach(function(listItem) {
        listItem.addEventListener('click', function() {
            const itemName = listItem.textContent;
            addToOrder(itemName);
        });
    });
}

// Start the menu system by calling the init function
displayMenuItems(menu);
initMenuSystem(menu);
