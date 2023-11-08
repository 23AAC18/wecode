const createProjectButton = document.getElementById("create-project-button");
const homeButton = document.getElementById("home-button");

createProjectButton.addEventListener("click", function () {
    window.location.replace("/createProject");
});
homeButton.addEventListener("click", function () {
    window.location.replace("/home");
});
