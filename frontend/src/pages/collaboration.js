import React from "react";
function Collaboration() {
    return (
        <div>
            <div className="header">
                <div id="header-content">
                    {/* Insert Code Here for Logo */}
                    <div id="header-text">WeCode</div>
                </div>
            </div>
            <div id="sidebar">
                <ul className="list-group">
                    <li
                        className="list-group-item"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <button className="sidebar-button">Home</button>
                    </li>
                    <li
                        className="list-group-item"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                    >
                        <button className="sidebar-button">
                            Create Project
                        </button>
                    </li>
                </ul>
            </div>
            <div id="content">
                <div id="collab-card-container">
                    <div className="card">
                        <div className="card-body">
                            <img
                                src="/Assets/images/demo.png"
                                alt
                                className="holding-img"
                            />
                            <h5 className="card-title">Collaboration</h5>
                            <p className="card-text">
                                Collaboration with team members is made easier
                                through real-time updates, and chat function
                            </p>
                        </div>
                        c
                    </div>
                </div>
                <div id="text-spam">
                    <div id="collaborators-access-card">
                        <div className="card text-center">
                            <div className="card-body">
                                <h5 className="card-title">Project View</h5>
                                <p className="card-text">
                                    Click the button below to view all the
                                    coders working on the project
                                </p>
                                <a
                                    href="#"
                                    className="btn btn-secondary"
                                    onclick="displayCollaborators();"
                                >
                                    View Collaborators
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="collaborators-view">
                        <h2>PROJECT MEMBERS</h2>
                        <h5 style={{ paddingBottom: 30 }}>
                            Here are all the active coders working on this
                            sproject
                        </h5>
                        <div id="collaborators-cards">
                            {/* Collaborator Cards from JS inject here */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Collaboration;
