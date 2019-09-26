import React, { Component } from "react";
import germany from "../images/germany.png";
import alltag from "../images/alltag.png";

export class Projects extends Component {
  render() {
    return (
      <React.Fragment>
        <section className="projects slide-in-elliptic-top-fwd" id="projects">
          <h1 className="hprojects">Projects</h1>
          <div className="projectbox"></div>
          <img className="imagecenter" src={alltag} alt="homepage" />
          <ul>
            <h2>Alltagsalternativen</h2>
            <li>
              <h3>Technology</h3>
            </li>
            <li>
              <p>HTML, CSS, JavaScript</p>
            </li>
            <li>
              <h3>Goal</h3>
            </li>
            <li>
              <p>
                This is a political project that started in 2014 as part of a
                science project "Feministisch schreiben lernen" at Humboldt
                University zu Berlin.
              </p>
            </li>
            <li>
              <a
                href="https://alltagsalternativen.jimdo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>Homepage</span>
                <i className="fas fa-home"></i>
              </a>{" "}
              <span>|</span>{" "}
              <a
                href="https://de-de.facebook.com/Alltagsalternativen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span> Facebook </span> <i className="fab fa-facebook"></i>{" "}
              </a>
            </li>
          </ul>

          <div className="projectbox"></div>
          <img
            className="imagecenter"
            src={germany}
            alt="homepage"
            rel="noopener noreferrer"
          />
          <ul>
            <h2>Germany</h2>
            <li>
              <h3>Technology</h3>
            </li>
            <li>
              <p>HTML, CSS, Bootstrap</p>
            </li>
            <li>
              <h3>Goal</h3>
            </li>
            <li>
              <p>A tourist page about Germany.</p>
            </li>
            <li>
              <a
                href="https://alltagsalternativen.jimdo.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>Homepage</span>
                <i className="fas fa-home"></i>
              </a>
              <span>|</span>
              <a
                href="https://de-de.facebook.com/Alltagsalternativen/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span> Facebook </span> <i className="fab fa-facebook"></i>
              </a>
            </li>
          </ul>
        </section>
        <div className="after">
          <a href="#htmlhome">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Projects;
