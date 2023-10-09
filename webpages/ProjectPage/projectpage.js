import React from "react";
import "./projectpage.css";

function ProjectPage() {
  return (
    <div>
      <div className="header">
        <div id="header-content">
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
            <button className="sidebar-button">Create Project</button>
          </li>
        </ul>
      </div>
      <div id="content">
        <div id="content-contents">
          <div id="folders-container">
            <p>FOLDERS</p>
            <div id="folders">
              <div className="row-no-padding row">
                <div
                  className="one-single-folder-card"
                  style={{ maxWidth: "175px" }}
                >
                  <div className="card w-100">
                    <img
                      className="card-img-top folder-image"
                      src="/Assets/images/demo-folder.png"
                      alt="Card image cap"
                    />
                    <div className="card-body folder-card-body">
                      <sub className="card-text">Folder1</sub>
                      <p className="card-text">3 Files</p>
                    </div>
                  </div>
                </div>
                {/* Repeat similar folder card components */}
              </div>
            </div>
          </div>
          <div id="active-coders-container">
            <p
              style={{
                float: "left",
                paddingRight: "30px",
                paddingTop: "6px",
              }
            }
            >
              ACTIVE CODERS
            </p>
            <button id="collab-btn">CLICK HERE</button>
          </div>
          <div id="coding-space">
            <p
              style={{
                float: "left",
                paddingRight: "30px",
                paddingTop: "6px",
              }}
            >
              CODING SPACE
            </p>
            <button id="codespace-btn">CLICK HERE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectPage;
