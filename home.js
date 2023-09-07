// script.js

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

document.getElementById("customizeButton").addEventListener("click", () => {
    // Display customization options and tools
    displayCustomizationOptions();
});

// Event listener for the Measure Your Foot button
document.getElementById("measureButton").addEventListener("click", () => {
    // Display foot measurement tools
    displayFootMeasurementTools();
});

// Function to display customization options
function displayCustomizationOptions() {
    const customizationTool = document.getElementById("customizationTool");
    const customizationForm = document.createElement("form");

    // Add options to the form
    customizationOptions.forEach((option) => {
        const label = document.createElement("label");
        label.textContent = option;

        const input = document.createElement("input");
        input.type = "text"; // You can use select elements for options

        customizationForm.appendChild(label);
        customizationForm.appendChild(input);
    });

    customizationTool.innerHTML = ""; // Clear previous content
    customizationTool.appendChild(customizationForm);
    customizationTool.style.display = "block";
}

// Function to display foot measurement tools
function displayFootMeasurementTools() {
    const footMeasurementTool = document.getElementById("footMeasurementTool");

    // Create and display measurement tools (you can expand this)
    const measurementToolHTML = `
        <h3>Foot Measurement Tools</h3>
        <!-- Add your measurement tools here -->
    `;

    footMeasurementTool.innerHTML = measurementToolHTML;
    footMeasurementTool.style.display = "block";
}
