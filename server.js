const express = require("express");
const session = require("express-session");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;
const fs = require("fs");
const cors = require("cors");

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/webpages/CurrentProjects"));
app.use(express.static(__dirname + "/webpages/codingspace"));
app.use(
    "/socket.io",
    express.static(__dirname + "/node_modules/socket.io/client-dist")
);
app.use(cors());

//Utilizing bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/webpages/CurrentProjects/currentProjects.html");
});

app.get("/createProject",(req, res) => {

    res.sendFile(__dirname + "/webpages/createproject/page2.html");
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

// Connect to the database here

//Write Server Side Code for Registration here

//Write Server Side Code for Login Here

app.get("/:roomName", (req, res) => {
    const roomName = req.params.roomName;
    const filePath = __dirname + `/webpages/codingspace/coding.html`;

    fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
            console.error("Error reading HTML file:", err);
            return res.status(500).send("Internal Server Error");
        }
        res.send(data);
    });
});

// WebSocket handling
io.on("connection", (socket) => {
    socket.on("joinRoom", (roomName) => {
        socket.join(roomName);
        console.log(`User joined room: ${roomName}`);
    });

    socket.on("codeChange", (data) => {
        const { roomName, newCode } = data;
        io.to(roomName).emit("codeChange", newCode);
    });

    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
