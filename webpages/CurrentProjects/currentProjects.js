import { initializeApp } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.4.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    get,
    child,
    update,
    remove,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-database.js";

//Firebase Setup
const firebaseConfig = {
    apiKey: "AIzaSyANafOMY9kojKKxBa9hwKrXAH6u4uTXhcU",
    authDomain: "wecode-91084.firebaseapp.com",
    databaseURL:
        "https://wecode-91084-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "wecode-91084",
    storageBucket: "wecode-91084.appspot.com",
    messagingSenderId: "107117565088",
    appId: "1:107117565088:web:7c3d73d23bf094ecdca5c5",
    measurementId: "G-S8SGHVTC2Z",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getDatabase();
let userProfile;
let username;
let userID;

async function fetchUserProfile() {
    try {
        const response = await fetch("/getProfile");
        const profile = await response.json();

        console.log("Profile Data:", profile);
        userProfile = profile;
        username = userProfile.displayName;
        userID = userProfile.id;
        console.log(username);
        console.log(userID);

        document.cookie = `username=${username}; path=/`;
        document.cookie = `userID=${userID}; path=/`;

        if (document.URL.includes("/home")) {
            console.log("Data from async FetchUserData");
            console.log(username);
            console.log(userID);
            await displayUserProjects();
        } else {
            console.log("WHY THE FUCK IS THIS SCRIPT RUNNING?????");
        }
    } catch (error) {
        console.error("Error fetching profile:", error);
    }
}

async function displayUserProjects() {
    const projectsContainer = document.getElementById("projects-container");
    console.log(projectsContainer);

    if (username) {
        console.log("Data from async DisplayUserProjects");
        console.log(username);
        console.log(userID);

        try {
            const userProjectsRef = ref(db, `users/${username}`);
            const userProjectsSnapshot = await get(userProjectsRef);

            if (userProjectsSnapshot.exists()) {
                const userProjects = userProjectsSnapshot.val();
                const userProjectsData = userProjects.projects;
                console.log("User Projects Data:", userProjectsData);

                Object.values(userProjectsData).forEach((valuePair) => {
                    const projectName = valuePair.projectName;
                    const projectDescription = valuePair.projectSummary;

                    const projectCardHTML = `
                        <div class="project-element" id="${projectName}">
                            <div class="card mb-3" style="max-width: 540px">
                                <div class="row no-gutters">
                                    <div class="col-md-4">
                                        <img
                                            src="/Assets/images/demo-landscape.jpg"
                                            class="card-img holding-image"
                                            alt="..."
                                        />
                                    </div>
                                    <div class="col-md-8">
                                        <div class="card-body">
                                            <h5 class="card-title">${projectName}</h5>
                                            <p class="card-text">${projectDescription}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;

                    projectsContainer.insertAdjacentHTML(
                        "beforeend",
                        projectCardHTML
                    );
                });
            } else {
                console.log("No projects found for the user");
            }
        } catch (error) {
            console.error("Error fetching user projects:", error);
        }
    } else {
        console.error("No username stored in cookie");
    }
}

fetchUserProfile();

export { db };
