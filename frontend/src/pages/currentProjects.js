import React from "react";
function CurrentPtojects() {
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
                <div id="primary-title">
                    <h2 style={{ paddingTop: 30 }}>Current Projects</h2>
                    <p>View and manage your ongoing programming projects</p>
                    <div className="search-container">
                        <input
                            type="text"
                            id="search-input"
                            placeholder="Search Projects"
                        />
                        <button id="search-button">Search</button>
                    </div>
                </div>
                <div id="projects-container" style={{ paddingBottom: 50 }}>
                    {/* Insert Project Cards Here */}
                    <div className="project-element">
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <a href="#" onclick="buttonClicked()">
                                        <img
                                            src="/Assets/images/demo-landscape.jpg"
                                            className="card-img holding-image"
                                            alt="..."
                                        />
                                    </a>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Project 1
                                        </h5>
                                        <p className="card-text">
                                            This is Project 1
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="project-element">
                        <div className="card mb-3" style={{ maxWidth: 540 }}>
                            <div className="row no-gutters">
                                <div className="col-md-4">
                                    <a href="#" onclick="button2Clicked()">
                                        <img
                                            src="/Assets/images/demo-portrait.jpg"
                                            className="card-img holding-image"
                                            alt="..."
                                        />
                                    </a>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            Project 2
                                        </h5>
                                        <p className="card-text">
                                            This is Project 2
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="community-container">
                    <h5 style={{ paddingBottom: 30 }}>Community</h5>
                    <div id="community-cards">
                        <div className="row-no-padding row">
                            <div
                                className="one-single-community-card"
                                style={{ maxWidth: 150, height: 320 }}
                            >
                                <div
                                    className="card w-100"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        className="card-img-top community-image"
                                        src="/Assets/images/demo.png"
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: 12,
                                                marginBottom: 5,
                                                paddingTop: 5,
                                            }}
                                        >
                                            Who thought it would ever be this
                                            hard :\
                                        </p>
                                        <div className="community-user-details">
                                            <img
                                                src="/Assets/images/demo.png"
                                                alt
                                                style={{
                                                    width: 25,
                                                    paddingRight: 5,
                                                    paddingTop: 5,
                                                }}
                                            />
                                            <sub>USER 2</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="one-single-community-card"
                                style={{ maxWidth: 150, maxHeight: 350 }}
                            >
                                <div
                                    className="card w-100"
                                    style={{ width: "18rem" }}
                                >
                                    <img
                                        className="card-img-top community-image"
                                        src="/Assets/images/demo-landscape.jpg"
                                        alt="Card image cap"
                                    />
                                    <div className="card-body">
                                        <p
                                            className="card-text"
                                            style={{
                                                fontSize: 12,
                                                marginBottom: 5,
                                                paddingTop: 5,
                                            }}
                                        >
                                            Finished the PROJECT!!!!!
                                        </p>
                                        <div className="community-user-details">
                                            <img
                                                src="/Assets/images/demo.png"
                                                alt
                                                style={{
                                                    width: 25,
                                                    paddingRight: 5,
                                                    paddingTop: 5,
                                                }}
                                            />
                                            <sub>USER 2</sub>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default CurrentPtojects;
