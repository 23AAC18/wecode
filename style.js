const headerSignUpButton = document.getElementById("header-signup");
const headerLogInButton = document.getElementById("header-login");
const signUpField = document.getElementById("registration-field");
const LogInField = document.getElementById("login-field");

function toggleSignUp() {
    signUpField.style.display = "none";
    headerSignUpButton.addEventListener("click", function () {
        if (signUpField.style.display === "none") {
            LogInField.style.display = "none";
            signUpField.style.display = "block";
        } else {
            signUpField.style.display = "none";
            LogInField.style.display = "none";
        }
    });
}

function toggleLogIn() {
    LogInField.style.display = "none";
    headerLogInButton.addEventListener("click", function () {
        if (LogInField.style.display === "none") {
            signUpField.style.display = "none";
            LogInField.style.display = "block";
        } else {
            LogInField.style.display = "none";
            signUpField.style.display == "none";
        }
        console.log("Working");
    });
}

toggleSignUp();
toggleLogIn();
