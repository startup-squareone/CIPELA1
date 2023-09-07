


// Define customization options (you can expand this)
const customizationOptions = [
    "Color",
    "Size",
    "Material",
    // Add more options here
];


// Event listener for the login form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform login validation (you can replace this with your actual validation logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isValid(username, password)) {
        // Hide the login form
        document.querySelector('.login-form').style.display = 'none';

        // Show the home page content
        document.querySelector('.home-content').style.display = 'block';
        
        // Update the navigation menu (e.g., change "Login" to "Logout")
        document.getElementById('loginButton').innerHTML = '<a href="#">Logout</a>';
    } else {
        // Display an error message (you can implement this part as needed)
        alert('Invalid username or password. Please try again.');
    }
});

function isValid(username, password) {
    // Replace this with your actual validation logic (e.g., checking against a database)
    // For this example, we assume a valid login when both fields are non-empty
    return username.trim() !== '' && password.trim() !== '';
}

// Event listener for the Customize button
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
