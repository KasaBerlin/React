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

  render() {
    console.log(this.name);

    return (
      <React.Fragment>
        {this.state.display ? (
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
        ) : null}
      </React.Fragment>
    );
  }
}

export default Row;
