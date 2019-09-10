import React from "react";
import ReactDOM from "react-dom";

// const tick = () => {
//   const element = (
//     <>
//       <h1>What time is it?</h1>
//       <h2>Hey, its {new Date().toLocaleTimeString()}.</h2>
//     </>
//   );
//   ReactDOM.render(element, document.getElementById("root"));
// };

// class Clock extends React.Component {
//   render() {
//     return (
//       <React.Fragment>
//         <h1>Can you tell me the time?</h1>
//         <h2>Yup, it is {this.props.date.toLocaleTimeString()}</h2>
//       </React.Fragment>
//     );
//   }
// }
// const tick = () => {
//   ReactDOM.render(<Clock date={new Date()} />, document.getElementById("root"));
// };
// setInterval(tick, 1000);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  render() {
    return (
      <React.Fragment>
        <h1>This is really it, I promise.</h1>
        <h2>For the last time, it is {this.state.toLocaleTimeString()}</h2>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Clock />, document.getElementById("root"));

// state

// State is referred to the local state off the component which cannot be accessed on the
// outside of the component and only can be used and modified inside the component.

// const Dummy = () => {
//   let name = "Dracula";
//   console.log(`Good evening ${name}`);
// };

// Dummy();

// class Dummy extends React.Component {
//   state = { name: "Dracula" };
//   render() {
//     return <h1>{this.state.name}</h1>;
//   }
// }
