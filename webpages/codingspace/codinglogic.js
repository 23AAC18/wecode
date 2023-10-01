import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    child,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();

const codeRef = ref(db, "code");

document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const codingSpace = document.getElementById("codingSpace");
    const roomName = window.location.pathname.slice(1); // Extract room name from the URL

    socket.emit("joinRoom", roomName);

    socket.on("codeChange", (newCode) => {
        // Update the codingSpace value with the received code
        codingSpace.value = newCode;

        // Update Firebase Realtime Database with the new code
        update(codeRef, { [roomName]: newCode });
    });

    codingSpace.addEventListener("input", () => {
        const newCode = codingSpace.value;
        socket.emit("codeChange", { roomName, newCode });

        // Update Firebase Realtime Database with the new code
        update(codeRef, { [roomName]: newCode });
    });
});
