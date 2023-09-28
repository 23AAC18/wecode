const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const http = require("http");
const socketIo = require("socket.io");
const app = express();
const server = http.createServer(app);
const io = socketIo(server);
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));
app.use(express.static(__dirname + "/webpages/CurrentProjects"));
app.use(express.static(__dirname + "/webpages/codingspace"));
app.use(
    "/socket.io",
    express.static(__dirname + "/node_modules/socket.io/client-dist")
);

//Utilizing bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});
app.get("/home", (req, res) => {
    res.sendFile(__dirname + "/webpages/CurrentProjects/currentProjects.html");
});
app.get("/code", (req, res) => {
    res.sendFile(__dirname + "/webpages/codingspace/coding.html");
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

// WebSocket handling
io.on("connection", (socket) => {
    console.log("A user connected");

    // Listen for changes from clients
    socket.on("codeChange", (newCode) => {
        // Broadcast the new code to all connected clients, including the sender
        io.emit("codeChange", newCode);
    });

    // Handle disconnection
    socket.on("disconnect", () => {
        console.log("A user disconnected");
    });
});
