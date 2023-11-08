import { getCookie } from "../../cookie.js";
import { db } from "../CurrentProjects/currentProjects.js";
import {
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const username = getCookie("username");

if (username) {
    console.log("Username from createproject.js:", username);
} else {
    console.log("No username stored in the cookie");
}

const projectsRef = ref(db, "projects");

document.addEventListener("DOMContentLoaded", () => {
    const createForm = document.getElementById("form-field");

    createForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if()
    });

    function addProjectToDatabase(projectData) {
        set(projectsRef, projectData)
            .then(() => {
                console.log("Project data added to the database");
            })
            .catch((error) => {
                console.error(
                    "Error adding project data to the database:",
                    error
                );
            });
    }
});
