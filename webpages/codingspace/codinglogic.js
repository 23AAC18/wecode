import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";
const database = getDatabase();

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

document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const codingSpace = document.getElementById("codingSpace");
    const roomName = window.location.pathname.slice(1); // Extract room name from the URL

    socket.emit("joinRoom", roomName);

    socket.on("codeChange", (newCode) => {
        codingSpace.value = newCode;
    });

    codingSpace.addEventListener("input", () => {
        const newCode = codingSpace.value;
        socket.emit("codeChange", { roomName, newCode });
    });
});
