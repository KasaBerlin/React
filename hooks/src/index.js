import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";

// WHAT ARE HOOKS?
// Hooks are functions that let you "hook intro" React state and lifecycle components,
// Hooks do not work inside class components - they let you use React without CLASS components

// Classes ar complex.
// Classes do not minifiy well.
// Uniformity - why split between class and functional components?
// Added complexity of classes - as our application grows, we add lots of code to the class
// creating complexity. It makes it difficult to break down into pieces of related functionality

// class NoHooks extends React.Component {
//   state = {
//     counter: 0
//   };
//   render() {
//     const { counter } = this.state;
//     return (
//       <div className="App">
//         <header className="App-header">
//           The button is pressed:{counter} times.
//           <button onClick={() => this.setState({ counter: counter + 1 })}>
//             Click me!
//           </button>
//         </header>
//       </div>
//     );
//   }
// }

// USESTATE HOOKS

// const Hooks = () => {
//   Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);
//   In this component, we declare a new state variable by calling the useState hook.
//   It returns a piar of values to which we give names.
//   We call the variable "count" because it holds the number of button clicks.
//   The second returned item is a function - it lets us update the count.
//   count - state variable
//   setCount is the updater Function
//   return (
//     <div>
//       <p>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}></button>
//       When the user clicks, we call setCount with a new value.
//     </div>
//   );
// };

// USE EFFECT HOOK
// you can think of useEffect Hook as componentDidMount, componentDidUpdate
// and componentWillUnmount combined

// class NoEffect extends React.Component {
//   state = {
//     count: 0
//   };
//   componentDidMount() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   componentDidUpdate() {
//     document.title = `You clicked ${this.state.count} times`;
//   }
//   render() {
//     return (
//       <div>
//         <p>You clicked {this.state.count}</p>
//         <button onClick={() => this.setState({ count: this.state.count + 1 })}>
//           Click me
//         </button>
//       </div>
//     );
//   }
// }

function Effect() {
  const [count, setCount] = useState(0);
  // is like component did update/mount
  useEffect(() => {
    //The function that we pass is our effect
    // Inside this effect we set the document title

    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!!!</button>
    </div>
  );
}

ReactDOM.render(<Effect />, document.getElementById("root"));
