import React from "react";
import germany from "../images/germany.png";
import alltag from "../images/alltag.png";
import weatherapp from "../images/weatherapp.png";
import blog from "../images/blog.png"
import guess from "../images/guess.png"
import Footer from "./Footer";

const Projects=()=> (
      <React.Fragment>
     <Footer/>
  <section className="projects puff-in-center" id="projects">
    <div className="center"><div className="divider"></div></div>
          <h1 className="hprojects">Projects</h1>
          <div className="center"><div className="divider"></div></div>
          <div className="projectbox">
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
          </div>
          <div className="projectbox">
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
          </div>
          <div className="projectbox">
          <img className="imagecenter" src={weatherapp} alt="homepage" />
          <ul>
            <h2>Weather App</h2>
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
                A simple weather app. 
              </p>
            </li>
            <li>
              <a
                href="https://kasaberlin.github.io/weatherApp/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <span>Homepage</span>
                <i className="fas fa-home"></i>
              </a>{" "}
              <span>|</span>{" "}
            </li>
          </ul>
          </div>
          <div className="projectbox">
          <img
            className="imagecenter"
            src={blog}
            alt="homepage"
            rel="noopener noreferrer"
          />
          <ul>
            <h2>Blogsite</h2>
            <li>
              <h3>Technology</h3>
            </li>
            <li>
              <p>HTML, CSS, Javascript, React</p>
            </li>
            <li>
              <h3>Goal</h3>
            </li>
            <li>
              <p>Created this nice blogsite with React.</p>
            </li>
            <li>
              <a
                href="https://kasaberlin.github.io/blogSite/"
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
          </div>
          <div className="projectbox">
          <img
            className="imagecenter"
            src={guess}
            alt="homepage"
            rel="noopener noreferrer"
          />
          <ul>
            <h2>Game</h2>
            <li>
              <h3>Technology</h3>
            </li>
            <li>
              <p>HTML, CSS, Javascript</p>
            </li>
            <li>
              <h3>Goal</h3>
            </li>
            <li>
              <p>Guess a number.</p>
            </li>
            <li>
              <a
                href="https://kasaberlin.github.io/guessaNumber/"
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
          </div>
        </section>
      </React.Fragment>
    );

export default Projects;
