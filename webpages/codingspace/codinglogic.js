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
import { get } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const editor = ace.edit("editor");
editor.setTheme("ace/theme/cobalt");
editor.getSession().setMode("ace/mode/javascript");

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

const codeRef = ref(db, "code");

document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const codingSpace = document.getElementById("codingSpace");
    const roomName = window.location.pathname.slice(1);

    socket.emit("joinRoom", roomName);

    const fetchAndDisplayInitialData = async () => {
        try {
            // Fetch the initial data from Firebase Realtime Database
            const dataSnapshot = await get(child(codeRef, roomName));
            if (dataSnapshot.exists()) {
                const initialCode = dataSnapshot.val();
                codingSpace.value = initialCode;
                editor.setValue(initialCode, -1);
            }
        } catch (error) {
            console.error("Error fetching initial data:", error);
        }
    };
    fetchAndDisplayInitialData();

    socket.on("codeChange", (newCode) => {
        // Update the codingSpace value with the received code
        codingSpace.value = newCode;

        // Update Firebase Realtime Database with the new code
        update(codeRef, { [roomName]: newCode });

        editor.setValue(newCode, -1);
    });

    codingSpace.addEventListener("input", () => {
        const newCode = codingSpace.value;
        socket.emit("codeChange", { roomName, newCode });

        // Update Firebase Realtime Database with the new code
        update(codeRef, { [roomName]: newCode });
        editor.setValue(newCode, -1);
    });

    editor.on("input", (event) => {
        const newCode = editor.getValue();
        codingSpace.value = newCode;

        // Update Firebase Realtime Database with the new code
        update(codeRef, { [roomName]: newCode });
    });
});
