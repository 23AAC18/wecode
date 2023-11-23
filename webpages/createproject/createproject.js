import { db } from "../CurrentProjects/currentProjects.js";
import {
    ref,
    set,
    get,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const username = "Alexei";

if (username) {
    console.log("Username from createproject.js:", username);
} else {
    console.log("No username stored in the cookie");
}

const projectsRef = ref(db, `users/${username}/projects`);

document.addEventListener("DOMContentLoaded", () => {
    const createForm = document.getElementById("form-field");

    function addProjectToDatabase(projectData) {
        get(projectsRef)
            .then((snapshot) => {
                const existingProjects = snapshot.val() || [];
                existingProjects.push(projectData);
                return set(projectsRef, existingProjects);
            })
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

    createForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const projectName = document.getElementById("project-name-input").value;
        const projectDescription = document.getElementById(
            "project-description-input"
        ).value;
        const project = {
            projectName: projectName,
            projectSummary: projectDescription,
        };
        addProjectToDatabase(project);
    });
});
