// profile.js

const usernameSpan = document.getElementById('username');
const emailSpan = document.getElementById('email');
const editProfileButton = document.getElementById('editProfile');
const profileEditSection = document.querySelector('.profile-edit');

editProfileButton.addEventListener('click', () => {
    profileEditSection.style.display = 'block';
    usernameSpan.style.display = 'none';
    emailSpan.style.display = 'none';
    editProfileButton.style.display = 'none';
});

const profileForm = document.getElementById('profileForm');
profileForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const newUsername = document.getElementById('newUsername').value;
    const newEmail = document.getElementById('newEmail').value;

    // Update the profile information (in a real application, you would send this data to a server)
    usernameSpan.textContent = newUsername;
    emailSpan.textContent = newEmail;

    // Reset the form and display the updated information
    profileForm.reset();
    profileEditSection.style.display = 'none';
    usernameSpan.style.display = 'inline';
    emailSpan.style.display = 'inline';
    editProfileButton.style.display = 'block';
});
