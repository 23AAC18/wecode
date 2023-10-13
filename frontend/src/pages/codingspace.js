import React from "react";
import "./coding.css";
function CodingSpace() {
    return (
        <div>
            <div className="header">
                <div id="header-content">
                    <div id="header-text">WeCode</div>
                </div>
                <div className="search-group">
                    <input
                        type="text"
                        id="project-name-input"
                        name="project-name-input"
                        placeholder="search here"
                        required
                    />
                </div>
            </div>
            <div id="sidebar">
                <ul className="list-group">
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Home
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Search
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        New Project
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Current Projects
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        statistics
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Foldres
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Active Coders
                    </li>
                    <li
                        className="list-group-item"
                        style="background-color: rgba(0, 0, 0, 0)"
                    >
                        Collabarations
                    </li>
                </ul>
            </div>
            <div className="content">
                <div className="button-container">
                    <button className="button" onClick="saveFunction()">
                        Save
                    </button>
                    <button className="button" onClick="runFunction()">
                        Run
                    </button>
                    <button className="button" onClick="debugFunction()">
                        Debug
                    </button>
                    <button className="button" onClick="stopFunction()">
                        Stop
                    </button>
                    <button className="button" onClick="shareFunction()">
                        Share
                    </button>
                </div>
                <textarea id="codingSpace" rows="4" cols="50"></textarea>
            </div>
            <script
                type="module"
                src="/webpages/codingspace/firebase.js"
            ></script>
        </div>
    );
}

export default CodingSpace;
