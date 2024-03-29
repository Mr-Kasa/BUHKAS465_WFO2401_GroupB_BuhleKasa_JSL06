// Sample menu data (Consider fetching this data from a server in a real-world scenario)
const menu = {
    Starters: ["Garlic Bread", "Bruschetta"],
    MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
    Desserts: ["Tiramisu", "Cheesecake"]
}


// Function to display menu items by category
function displayMenuItems(menu) {
    // Get the menu container element from the HTML
    const menuSection = document.getElementById('menu');

    // Loop through each category and its items in the menu object
    for (let i = 0; i < Object.keys(menu).length; i++) {
        // Create an element to represent the category 
        const categoryContainer = document.createElement('div');
        // Set the text content of the category element to the category name
        categoryContainer.textContent = Object.keys(menu)[i];
        // Append the category element to the menu container
        menuSection.appendChild(categoryContainer);

        // Create an element to represent a list of items
        const listedItems = document.createElement('ul');
        // Append a list of items element to the menu container
        menuSection.appendChild(listedItems);

        // Loop through the items in the category and create list items
        for (let j = 0; j < menu[Object.keys(menu)[i]].length; j++) {
            // Create a list item element
            const listItem = document.createElement('li');
            // Set the text content of the list item element to the item name
            listItem.textContent = menu[Object.keys(menu)[i]][j];
            // Attach a click event listener to the list item to add it to the order
            listItem.addEventListener("click", function() {
                // Append the clicked item's text content to the order list
                document.getElementById('order-items').innerHTML += "<li>" + listItem.textContent + "</li>";
            });
            listItem.addEventListener("dbl-click", function() {
                // Append the clicked item's text content to the order list
                document.getElementById('order-items').innerHTML += "<li>" + '' + "</li>";
            });
            listedItems.appendChild(listItem);
        }
    }
}

displayMenuItems(menu)

// Callback function for adding an item to the order
function addToOrder(itemName) {
    // Get the order items list and the order total element from the HTML

    // Create a list item for the order

    // Set the text content of the list item to the item name

    // Append the list item to the order items list

    // Calculate and update the total price

    // Update the text content of the order total element with the new total
}

// Function to initialize the menu system
function initMenuSystem(menu) {
    // Call the function to display menu items
}

// Start the menu system by calling the init function
initMenuSystem(menu);
