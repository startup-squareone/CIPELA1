// Define sample product data (you would typically fetch this from a server)
const products = [
    {
        name: "Product 1",
        category: "Shoes",
        price: 59.99,
        image: "product1.jpg",
    },
    {
        name: "Product 2",
        category: "Sandals",
        price: 29.99,
        image: "product2.jpg",
    },
    {
        name: "Product 3",
        category: "Heels",
        price: 79.99,
        image: "product3.jpg",
    },
    // Add more product data as needed
];

// Function to display products in the "products" section
function displayProducts(category) {
    const productsSection = document.querySelector(".products");
    productsSection.innerHTML = ""; // Clear previous content

    const filteredProducts = products.filter((product) =>
        category ? product.category === category : true
    );

    if (filteredProducts.length === 0) {
        productsSection.innerHTML = "<p>No products found in this category.</p>";
    } else {
        filteredProducts.forEach((product) => {
            const productDiv = document.createElement("div");
            productDiv.classList.add("product");

            productDiv.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>Category: ${product.category}</p>
                <p>Price: $${product.price.toFixed(2)}</p>
            `;

            productsSection.appendChild(productDiv);
        });
    }
}

// Event listeners for category links
const categoryLinks = document.querySelectorAll(".categories a");

categoryLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const selectedCategory = link.textContent;
        displayProducts(selectedCategory);
    });
});


// Event listeners for brand links
const brandLinks = document.querySelectorAll(".brands a");

brandLinks.forEach((link) => {
    link.addEventListener("click", function (event) {
        event.preventDefault();
        const selectedbrand = link.textContent;
        displayProducts(selectedbrand);
    });
});
// Initial display of all products
displayProducts(null);
