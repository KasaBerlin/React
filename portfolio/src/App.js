import React from "react";
import "./App.css";
import Nav from "./components/Nav";
import Responsive from "./components/Responsive";

function App() {
  return (
    <React.Fragment>
      <div className="App">
        <header className="App-header">
          <Nav></Nav>
          <Responsive></Responsive>
        </header>
      </div>
    </React.Fragment>
  );
}

export default App;
