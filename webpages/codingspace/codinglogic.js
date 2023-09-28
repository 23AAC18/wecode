document.addEventListener("DOMContentLoaded", () => {
    const socket = io();

    const codingSpace = document.getElementById("codingSpace");

    // Listen for code changes from the server and update the text area
    socket.on("codeChange", (newCode) => {
        codingSpace.value = newCode;
    });

    // Listen for user input and send code changes to the server
    codingSpace.addEventListener("input", () => {
        const newCode = codingSpace.value;
        socket.emit("codeChange", newCode);
    });
});
