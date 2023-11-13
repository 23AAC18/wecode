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

const path = require('path');
const ejs = require("ejs");
const passport = require("passport");
const GoogleStrategy = require('passport-google-oauth20').Strategy

require("./auth");


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


function isLoggedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.get("/home",isLoggedIn, (req, res) => {
    res.sendFile(__dirname + "/webpages/CurrentProjects/currentProjects.html");
});

app.get("/createProject",(req, res) => {
    res.sendFile(__dirname + "/webpages/createproject/page2.html");
});


// Connect to the database here

//Write Server Side Code for Registration here

//Write Server Side Code for Login Here
app.use(express.json());

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(express.static('webpages'));

/* passport.use(new GoogleStrategy({
    clientID: "909967521844-aeudc5tp7rjm58gr4sfjikmt8sf12etk.apps.googleusercontent.com",
    clientSecret:"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",
    callbackURL: "http://localhost:3000/auth/google/callback",
    profileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, done) {
    console.log("passport callback started");
    console.log("User details:", profile);
    
  }
));

passport.serializeUser((user, done) => {
    done(null, user);
  });
  
  passport.deserializeUser((obj, done) => {
    done(null, obj);
  });
 */
/* app.get('/one', (req, res) => {
    res.sendFile('<a href="/auth/google">Sign in with Google</a>');
  });
 */

app.get("/auth/google",
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

app.get("/auth/google/callback",
  passport.authenticate('google', { failureRedirect: "/auth/failure"}),
  (req, res)=>{
    // Successful authentication, redirect to currentProjects.html
    res.send("/webpages/CurrentProjects/currentProjects.html");
  }
);

app.get("/auth/failure", (req, res)=>{
  res.send('Wrong credentials!');
})

/* app.get('/protected', isLoggedIn, (req, res) =>{
  res.send('Hello ${req.user.displayName}');
});
 */

  /* app.get('/currentProjects/currentProjects.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'webpages', 'currentProjects', 'currentProjects.html'));
  }); */

 /* 
  function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/');
} */
  

  app.get("/logout", (req, res) => {
      req.logout();
      res.send('Goodbye!');
      console.log("User logged out");
  });

  server.listen(port, () => {
      console.log(`Server is running on port ${port}`);
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
