import React from "react";
import ReactDOM from "react-dom";

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isToggleOne: true
//     };
//     // This binding is necessary to make "this" work
//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState(state => ({
//       // is an Object
//       isToggleOn: !state.isToggleOn
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "ON" : "OFF"}
//       </button>
//     );
//   }
// }

// ReactDOM.render(<Toggle />, document.getElementById("root"));

class App extends React.Component {
  state = {
    // Initial State - Ausgangszustand
    input: "",
    reversedText: ""
  };
  // function to set a new state for the input
  handleChange = e => {
    const value = e.target.value;
    this.setState({ input: value });
  };
  handleReverse = e => {
    e.preventDefault();
    const text = this.state.input;
    this.setState({
      reversedText: text
        .split("")
        .reverse("")
        .join("")
    });
  };
  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleReverse}>
          <div>
            <label>Text: {this.state.input}</label>
          </div>
          <div>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
              placeholder="ENTER TEXT"
            />
          </div>
          <div>
            <button>Reverse Text</button>
          </div>
        </form>
        <p>Reversed Text: {this.state.reversedText}</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
