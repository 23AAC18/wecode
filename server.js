const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

// Serve static files from the root directory
app.use(express.static(__dirname));

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
        console.log("Connected to MySQL database");
    }
});

//Insert Records

//Search Records

//Delete Records
