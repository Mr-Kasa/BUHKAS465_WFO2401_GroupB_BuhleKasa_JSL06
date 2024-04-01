
        // Sample menu data (Consider fetching this data from a server in a real-world scenario)
        const menu = {
            Starters: ["Garlic Bread", "Bruschetta"],
            MainCourses: ["Margherita Pizza", "Spaghetti Carbonara"],
            Desserts: ["Tiramisu", "Cheesecake"]
        };

        // Function to display menu items by category
        function displayMenuItems(menu) {
            // Accessing the HTML element to display the menu
            const MenuDiv = document.getElementById('menu');

            // Looping through each category and its items in the menu object
            for (const [category, items] of Object.entries(menu)) {
                // Creating an HTML element representing a category
                const mealType = document.createElement('h2');
                // Setting the text content of the category element to the category name
                mealType.textContent = category;
                // Appending the category element to the menu container in the HTML
                MenuDiv.appendChild(mealType);

                // Creating an HTML element representing a list of items
                const itemsList = document.createElement('ul');

                // Looping through the items in the category and creating list items for each one
                items.forEach(item => {
                    // Creating a list item element
                    const listItem = document.createElement('li');
                    // Setting the text content of the list item element to the item name
                    listItem.textContent = item;
                    // Attach a click event listener to the list item to add it to the order
                    listItem.addEventListener('click', () => {
                        addToOrder(item); // Passing item name to addToOrder function
                    });
                    // Appending the list item to the list of items for this category
                    itemsList.appendChild(listItem);
                });

                // Appending the list of items to the menu container in the HTML
                MenuDiv.appendChild(itemsList);
            }
        }

        // Callback function for adding an item to the order
        function addToOrder(itemName) {
            // Accessing the HTML elements representing the order items list and the order total
            const orderItem = document.getElementById('order-items');
            const total = document.getElementById('order-total');

            // Creating a list item for the order
            const listItem = document.createElement('li');
            // Setting the text content of the list item to the item name
            listItem.textContent = itemName;
            // Appending the list item to the order items list
            orderItem.appendChild(listItem);

            // Updating the total price
            let Total = parseFloat(total.textContent); // Parsing the current total
            Total += 60; // Adding the price of the item (assuming each item costs $60)
            total.textContent = Total.toFixed(2); // Updating the text content of the order total element with the new total
        }

        // Function to initialize the menu system
        function initMenuSystem(menu) {
            // Call the function to display the menu
            displayMenuItems(menu);
        }

        // Call the init function to start the menu system
        initMenuSystem(menu);

