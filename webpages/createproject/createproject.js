import { getCookie } from "/cookie.js";

const username = getCookie("username");

if (username) {
    console.log("Username from createproject.js:", username);
} else {
    console.log("No username stored in the cookie");
}
