// wishlist.js

// Sample data for wishlisted items (you can replace this with your own data)
const wishlistItems = [
    { id: 1, name: 'Product 1', price: 'Rs.999.00' },
    { id: 2, name: 'Product 2', price: 'Rs.2500.00' },
    { id: 3, name: 'Product 3', price: 'Rs.8500.00' },
];

const wishlistList = document.getElementById('wishlistList');

// Display wishlisted items on the page
function displayWishlistItems() {
    wishlistItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (${item.price})</span>
            <button data-id="${item.id}">Remove</button>
        `;
        wishlistList.appendChild(listItem);

        // Add click event listener to remove item from wishlist
        const removeButton = listItem.querySelector('button');
        removeButton.addEventListener('click', removeFromWishlist);
    

    });
}

function displayWishlistItems() {
    wishlistItems.forEach((item) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span>${item.name} (${item.price})</span>
            <button data-id="${item.id}">Add to Cart</button>
        `;
        wishlistList.appendChild(listItem);

        // Add click event listener to remove item from wishlist
        const addtocartButton = listItem.querySelector('button');
        addtocartButton.addEventListener('click', Add to Cart);
    

    });
}

// Remove an item from the wishlist
function removeFromWishlist(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'), 10);
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    wishlistItems.length = 0;
    updatedWishlist.forEach((item) => wishlistItems.push(item));
    wishlistList.innerHTML = ''; // Clear the list
    displayWishlistItems(); // Display updated wishlist
}

function addtocart(event) {
    const itemId = parseInt(event.target.getAttribute('data-id'), 10);
    const updatedWishlist = wishlistItems.filter((item) => item.id !== itemId);
    wishlistItems.length = 0;
    updatedWishlist.forEach((item) => wishlistItems.push(item));
    wishlistList.innerHTML = ''; // Clear the list
    displayWishlistItems(); // Display updated wishlist
}

// Initialize the wishlist
displayWishlistItems();
