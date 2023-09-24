document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-field");

    registrationForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document
            .getElementById("registration-username")
            .value.trim();
        const password = document
            .getElementById("registration-password")
            .value.trim();

        // Send a POST request to your Express.js server
        fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ username, password }),
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle the response from the server (e.g., show a success message)
                alert(data.message);
                // Clear the input fields
                document.getElementById("registration-username").value = "";
                document.getElementById("registration-password").value = "";
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });

    const loginForm = document.getElementById("login-field");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const username = document.getElementById("login-username").value.trim();
        const password = document.getElementById("login-password").value.trim();

        // Send a GET request to check login credentials
        fetch(`/login?username=${username}&password=${password}`)
            .then((response) => response.json())
            .then((data) => {
                if (data.message === "Login successful") {
                    // Successful login, handle it (e.g., redirect to a dashboard)
                    alert("Login successful");
                } else {
                    // Invalid login credentials
                    alert("Invalid username or password");
                }
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
});
