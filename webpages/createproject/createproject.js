import { getCookie } from "../../cookie.js";

const username = getCookie("username");

if (username) {
    console.log("Username from createproject.js:", username);
} else {
    console.log("No username stored in the cookie");
}

// createProject.js

import { db } from "../CurrentProjects/currentProjects.js";
import {
    ref,
    set,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

const projectsRef = ref(db, "projects");

function addProjectToDatabase(projectData) {
    set(projectsRef, projectData)
        .then(() => {
            console.log("Project data added to the database");
        })
        .catch((error) => {
            console.error("Error adding project data to the database:", error);
        });
}
