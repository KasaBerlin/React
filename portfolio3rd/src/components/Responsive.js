import React from "react";
import {Link} from "react-router-dom";

const Responsive =()=>(
  <React.Fragment className="responsive">
        <nav className="resFooter">
        <div className="goback left" id="goback">
      <i className="fas fa-mobile-alt"></i>
    </div>
          <li>
            <Link to="/aboutme">
              <i className="fas fa-book-reader"></i>
            </Link>
          </li>
          <li>
            <Link to="/work">
            <i className="fas fa-hammer"></i>
            </Link>
          </li>
          <li>
            <a href="mailto:katrinsalac@gmail.com">
            <i className="fas fa-envelope"></i>
            </a>
          </li>
        </nav>
            <p className="resWelcome">
            Hi, my name is Kasa.<br></br>
              I`m a web developer <br></br>
              in Berlin.
            </p>
            <div className="resFooter">
              <div className="bottom">
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
      </div>
      </React.Fragment>
    );

export default Responsive;
