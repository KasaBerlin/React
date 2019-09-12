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

// class App extends React.Component {
//   state = {
//     // Initial State - Ausgangszustand
//     input: "",
//     reversedText: ""
//   };
//   // function to set a new state for the input
//   handleChange = e => {
//     const value = e.target.value;
//     this.setState({ input: value });
//   };
//   handleReverse = e => {
//     e.preventDefault();
//     const text = this.state.input;
//     this.setState({
//       reversedText: text
//         .split("")
//         .reverse("")
//         .join("")
//     });
//   };
//   render() {
//     return (
//       <React.Fragment>
//         <form onSubmit={this.handleReverse}>
//           <div>
//             <label>Text: {this.state.input}</label>
//           </div>
//           <div>
//             <input
//               type="text"
//               value={this.state.input}
//               onChange={this.handleChange}
//               placeholder="ENTER TEXT"
//             />
//           </div>
//           <div>
//             <button>Reverse Text</button>
//           </div>
//         </form>
//         <p>Reversed Text: {this.state.reversedText}</p>
//       </React.Fragment>
//     );
//   }
// }

// ReactDOM.render(<App />, document.getElementById("root"));

// class Welcome extends React.Component {
//   render() {
//     return <button onClick={() => this.sayName()}>What is my name</button>;
//   }
//   sayName() {
//     alert(this.props.name);
//   }
// }

// ReactDOM.render(<Welcome name="2Pac" />, document.getElementById("root"));

// React doesn't bind behind the scenes -
// let onClick=this.sayName
// onClick()

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.boundsayName = () => this.sayName();
  }
  render() {
    return <button onClick={this.boundsayName}>What's my name?</button>;
  }
  sayName() {
    alert(this.props.name);
  }
}

ReactDOM.render(<Welcome name="2Pac" />, document.getElementById("root"));

// IF you do not need state or binding event handlers, use a functional component
