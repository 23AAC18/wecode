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
