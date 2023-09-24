const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));
//Utilizing bodyParser
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.listen(port, () => {
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

//Insert Records
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

//Log Into Records
app.get("/login", (req, res) => {
    const { username, password } = req.query; // Get the username and password from the query parameters

    // SQL query to search for a user with the provided username and password
    const sql = "SELECT * FROM authdetails WHERE username = ? AND password = ?"; // Use the correct field names
    db.query(sql, [username, password], (err, results) => {
        console.log(results);
        if (err) {
            console.error("Error searching for user:", err);
            res.status(500).json({ error: "Database error" });
        } else {
            if (results.length > 0) {
                // User with the provided username and password exists
                res.json({ message: "Login successful" });
            } else {
                // User does not exist or invalid login credentials
                res.json({ message: "Invalid username or password" });
            }
        }
    });
});
//Delete Records
