import React from "react";
import { Link } from "react-router-dom";

const Nav=()=>(
      <section id="home">
        <nav className="full" id="full">
        <a href="mailto:katrinsalac@gmail.com" className="home">Email Me!</a>
        <Link to="/aboutme">About me</Link>
            <Link to="/work" className="work">Projects</Link>
            <Link to="/contact">Contact</Link>
          <div className="welcome">
            <p>
              Hi, my name is Kasa. <br></br>
              I`m a web developer <br></br>
              in Berlin.
            </p>
          </div>
          <div className="iconsnav">
            <a href="https://codepen.io/Pudel/" target="blank">
              <i className="fab fa-codepen"></i>
            </a>
            <a href="https://de.linkedin.com/" target="blank">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://github.com/pudelgulasch" target="blank">
              <i className="fab fa-github"></i>
            </a>
          </div>
        </nav>
      </section>
    );

export default Nav;
