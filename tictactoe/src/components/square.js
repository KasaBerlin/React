import React from "react";

// child component
class Square extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null
    };
  }
  render() {
    return (
      // rerenders when button is clicked
      // When you call setState in a component,
      // React automatically updates the child components
      // inside of it too.
      <button className="square" onClick={() => this.setState({ value: "X" })}>
        {this.state.value}
      </button>
    );
  }
}

export default Square;
