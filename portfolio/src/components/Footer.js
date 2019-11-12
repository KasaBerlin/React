import React from "react";
import { Link } from "react-router-dom";

const Footer=()=>(
  <React.Fragment>
    <footer className="navstyle">
      <div className="goback left" id="goback">
      <Link to="/">
        <i className="fas fa-arrow-circle-left"></i>
      </Link>
    </div>
    <div className="right">
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
      </footer>
    </React.Fragment>
    );

export default Footer;
