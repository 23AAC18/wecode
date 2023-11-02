// Import the setCookie and getCookie functions from the "cookie.js" module
import { setCookie, getCookie } from "./cookie.js";

// Function to update the username and the corresponding cookie
function updateUsername(newUsername) {
    // Update the username
    const username = newUsername;

    // Update the corresponding cookie
    setCookie("username", username, 30); // Set the cookie to expire in 30 days

    // Optionally, you can also update the UI to reflect the new username
    // (e.g., update a user profile display)
}

// Function to periodically fetch the username from the server
function checkUsernameChange() {
    fetch("/getUsername")
        .then((response) => response.json())
        .then((data) => {
            const newUsername = data.username;
            const storedUsername = getCookie("username");

            if (newUsername !== storedUsername) {
                // Username has changed; update the cookie and UI
                updateUsername(newUsername);

                // Optionally, update the UI to reflect the new username
            }
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

setInterval(checkUsernameChange, 1 * 5 * 1000); // Check every 5 seconds

// Check if the username is already stored in a cookie
const storedUsername = getCookie("username");

if (storedUsername) {
    // Use the stored username
    console.log(storedUsername);
} else {
    // Handle the case where the cookie isn't set
}
