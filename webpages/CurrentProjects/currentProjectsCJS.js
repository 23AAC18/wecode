console.log("ALpha");
fetch("/getProfile")
    .then((response) => response.json())
    .then((profile) => {
        console.log("Profile Data:", profile);
        // Do something with the profile data
    })
    .catch((error) => console.error("Error fetching profile:", error));
