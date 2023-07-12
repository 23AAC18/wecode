"use strict";
let i;
const collaboratorsCards = document.querySelector("#collaborators-cards");
const displayCollaborators = function () {
    document.querySelector("#collaborators-view").style.display = "block";
    console.log("AAA");
};

const collaborators = ["A", "B", "C"];

for (i of collaborators) {
    console.log(i);
}

for (i of collaborators) {
    collaboratorsCards.insertAdjacentHTML(
        "beforeEnd",
        `<div class="collaborator-card-container">
            <div class="card">
                <div class="card-body">
                    <img
                        src="/Assets/images/demo.png"
                        alt=""
                        class="holding-img"
                    />
                    <div class="card-body-text">
                        <h5 class="card-title">${i}</h5>
                        <p class="card-text">
                            Click here to Access
                        </p>
                    </div>
                </div>
            </div>
        </div>`
    );
}
