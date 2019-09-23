import React, { Component } from "react";

export class Responsive extends Component {
  render() {
    return (
      <div>
        <nav classNameName="responsive">
          <li>
            <a href="#home">
              <i className="fas fa-home"></i>
            </a>
          </li>
          <li>
            <a href="#about">
              <i className="fas fa-book-reader"></i>
            </a>
          </li>
          <li>
            <a href="#projects">
              <i className="fas fa-keyboard"></i>
            </a>
          </li>
          <li>
            <a href="#contact">
              <i className="fas fa-id-card"></i>
            </a>
          </li>
        </nav>
      </div>
    );
  }
}

export default Responsive;
