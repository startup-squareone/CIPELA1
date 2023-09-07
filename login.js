// login.js

document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Perform login validation (you can replace this with your actual validation logic)
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (isValid(username, password)) {
        // Display the success message
        document.getElementById('success-message').style.display = 'block';

        // Redirect to the home page after a delay (e.g., 3 seconds)
        setTimeout(function () {
            window.location.href = 'index.html'; // Replace 'home.html' with your actual home page URL
        }, 3000); // 3000 milliseconds (3 seconds) delay before redirection
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
