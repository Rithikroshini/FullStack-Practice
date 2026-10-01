document.addEventListener('DOMContentLoaded', function() {
    const restaurantList = document.getElementById('restaurants');
    const menuContainer = document.getElementById('menuContainer');
    const cartItems = document.getElementById('cartItems');
    const checkoutButton = document.getElementById('checkButton');

    const restaurants = [
        { name: 'Restaurant A', menu: ['Item 1', 'Item 2', 'Item 3'] },
        { name: 'Restaurant B', menu: ['Item 4', 'Item 5', 'Item 6'] },
        { name: 'Restaurant C', menu: ['Item 7', 'Item 8', 'Item 9'] }
    ];

    restaurants.forEach((restaurant) => {
        const restaurantItem = document.createElement('li');
        restaurantItem.classList.add('restaurant-item');
        restaurantItem.textContent = restaurant.name;

        restaurantItem.addEventListener('click', function() {
            menuContainer.innerHTML = "";
            cartItems.innerHTML = "";

            restaurant.menu.forEach(menuItem => {
                const menuItemElement = document.createElement('div');
                menuItemElement.classList.add('menu-item');
                menuItemElement.textContent = menuItem;

                menuItemElement.addEventListener('click', function() {
                    const cartItemElement = document.createElement('li');
                    cartItemElement.classList.add('cart-item');
                    cartItemElement.textContent = menuItem;
                    cartItems.appendChild(cartItemElement);
                });

                menuContainer.appendChild(menuItemElement);
            });
        });

        restaurantList.appendChild(restaurantItem);
    });

    checkoutButton.addEventListener('click', function() {
        alert('Order Placed Successfully!');
        cartItems.innerHTML = "";
    });
});
