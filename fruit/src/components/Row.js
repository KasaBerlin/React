import React from "react";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      display: true
    };
  }

  changeColor = () => {
    let colors = ["red", "orange", "blue", "green", "yellow"];
    this.setState({
      color: colors[Math.floor(Math.random() * 5)]
    });
  };

  deleteRow = e => {
    this.setState({ display: !this.state.display });
  };

  renderThis = () =>
    this.state.display ? (
      <p>
        {this.props.name}, color = {this.state.color}
        <button
          type="button"
          className="color button"
          onClick={() => this.changeColor()}
        >
          change color
        </button>
        <button
          type="button"
          className="delete button"
          onClick={() => this.deleteRow()}
        >
          delete me
        </button>
      </p>
    ) : null;

  render() {
    return <React.Fragment>{this.renderThis()}</React.Fragment>;
  }
}

export default Row;
