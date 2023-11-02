// cookie.js
export function setCookie(name, value, days) {
    const expires = new Date();
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/`;
}

export function getCookie(name) {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim().split("=");
        if (cookie[0] === name) {
            return cookie[1];
        }
    }
    return null;
}

export function checkUsernameChange() {
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

export function updateUsername(newUsername) {
    // Update the username
    const username = newUsername;

    // Update the corresponding cookie
    setCookie("username", username, 30); // Set the cookie to expire in 30 days

    // Optionally, you can also update the UI to reflect the new username
    // (e.g., update a user profile display)
}
