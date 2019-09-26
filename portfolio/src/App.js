import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Responsive from "./components/Responsive";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <div className="up" id="up">
          <a href="#htmlhome">
            <i className="fas fa-arrow-circle-up"></i>
          </a>
        </div>
        <header className="App-header">
          <Nav></Nav>
          <Responsive></Responsive>
        </header>
        <About></About>
        <Projects></Projects>
        <Contact></Contact>
        <Footer></Footer>
      </div>
    </React.Fragment>
  );
}

export default App;
