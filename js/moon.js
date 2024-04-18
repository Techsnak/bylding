// Define the moon icon and body element
const moonIcon = document.querySelector('.fa-moon');
const body = document.body;

// Function to set the icon color based on the current theme
function setMoonIconColor() {
    if (body.classList.contains('dark-theme')) {
        // Dark theme is active; set the icon color to black
        moonIcon.style.color = 'gray';
    } else {
        // Light theme is active; set the icon color to gray
        moonIcon.style.color = 'black';
    }
}

// Function to initialize the theme based on the system preference
function initializeTheme() {
    // Use window.matchMedia to check the user's system theme preference
    const prefersDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (prefersDarkMode) {
        // If the system prefers dark mode, apply the dark theme
        body.classList.add('dark-theme');
    } else {
        // If the system prefers light mode, apply the light theme
        body.classList.remove('dark-theme');
    }
    // Set the icon color based on the current theme
    setMoonIconColor();
}

// Call the initializeTheme function when the page first loads
initializeTheme();

// Add an event listener to the moon icon
moonIcon.addEventListener('click', function() {
    // Toggle the dark theme class on the body element
    body.classList.toggle('dark-theme');
    // Set the icon color based on the current theme
    setMoonIconColor();
});
