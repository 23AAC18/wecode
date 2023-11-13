//Write Client Side Code for both Registration and Login Here

//This is the Page Connected to index.html(Landing Page)

/* /* function onSignIn(googleUser) { */
// Retrieve user details
/* const profile = googleUser.getBasicProfile();
    const id_token = googleUser.getAuthResponse().id_token;
    fetch('/auth/google', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id_token: id_token }),
    })
    .then(response => {
        if (response.ok) {
            // Authentication successful, handle accordingly
            window.location.href = '/currentProjects/currentProjects.html'; // Redirect to dashboard or other page
        } else {
            console.error('Authentication failed');
        }
    })
    .catch(error => {
        console.error('Error during authentication:', error);
    });
} */
