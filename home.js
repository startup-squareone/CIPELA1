// script.js

const product = {
    title: "Product Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    price: 99.99,
    image: "product-image.jpg"
};

const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].style.opacity = 1;
}

// Auto-advance the slider every 3 seconds
setInterval(() => {
    showSlide(currentSlide + 1);
}, 3000);

// Initial slide display
showSlide(currentSlide);

