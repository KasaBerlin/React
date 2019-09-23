import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <div>
        <footer>
          <a className="after" href="#home">
            {" "}
            <i className="fas fa-arrow-circle-up"></i>
          </a>
          <a href="https://codepen.io/Pudel/" target="blank">
            <i className="fab fa-codepen"></i>
          </a>
          <a href="https://de.linkedin.com/" target="blank">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://github.com/pudelgulasch" target="blank">
            <i className="fab fa-github"></i>
          </a>
        </footer>
      </div>
    );
  }
}

export default Footer;
