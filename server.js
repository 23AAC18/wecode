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
app.use(
    session({
        secret: "quartz/Q:-)097",
        resave: false,
        saveUninitialized: true,
    })
);
//Utilizing bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/webpages/CurrentProjects/currentProjects.html");
    const username = req.session.username;
    console.log(username);
});

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

const db = mysql.createConnection({
    host: "localhost",
    user: "admin",
    password: "0000",
    database: "userauth",
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to MySQL:", err);
    } else {
        console.log(`Connected to MySQL database`);
    }
});

//Register User
app.post("/register", (req, res) => {
    const { username, password } = req.body;
    const sql = "INSERT INTO authdetails (username, password) VALUES (?, ?)";
    db.query(sql, [username, password], (err, results) => {
        if (err) {
            console.error("Error inserting user:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            res.json({ message: "User inserted successfully" });
        }
    });
});

//Log Into User Account
app.get("/login", (req, res) => {
    const { username, password } = req.query;
    const sql = "SELECT * FROM authdetails WHERE username = ? AND password = ?";
    db.query(sql, [username, password], (err, results) => {
        console.log(results);
        if (err) {
            console.error("Error searching for user:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            req.session.username = username;
            if (results.length > 0) {
                res.json({
                    message: "Login successful",
                    url: "/home",
                });
            } else {
                res.json({ message: "Invalid username or password" });
            }
        }
    });
});

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
