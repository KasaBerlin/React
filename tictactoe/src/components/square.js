import React from "react";

// child component
function Square(props) {
  return (
    // rerenders when button is clicked
    // When you call setState in a component,
    // React automatically updates the child components
    // inside of it too.
    <button className="square" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

export default Square;
