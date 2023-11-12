import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
import {
    setCookie,
    getCookie,
    checkUsernameChange,
    updateUsername,
} from "../../cookie.js";

setInterval(checkUsernameChange, 10 * 60 * 1000); // Check username Change every 10 mins

// Get username from cookie stored in browser
const storedUsername = getCookie("username");

if (storedUsername) {
    console.log(storedUsername);
} else {
    //It honestly shouldn't come here, but if it does, you know who to call.
}

//Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyANafOMY9kojKKxBa9hwKrXAH6u4uTXhcU",
    authDomain: "wecode-91084.firebaseapp.com",
    databaseURL:
        "https://wecode-91084-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wecode-91084",
    storageBucket: "wecode-91084.appspot.com",
    messagingSenderId: "107117565088",
    appId: "1:107117565088:web:7c3d73d23bf094ecdca5c5",
    measurementId: "G-S8SGHVTC2Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
export { db };
