import {
    setCookie,
    getCookie,
    checkUsernameChange,
    updateUsername,
} from "./cookie.js";
setInterval(checkUsernameChange, 10 * 60 * 1000); // Check username Change every 10 mins

// Get username from cookie stored in browser
const storedUsername = getCookie("username");

if (storedUsername) {
    console.log(storedUsername);
} else {
    //It honestly shouldn't come here, but if it does, you know who to call.
}
