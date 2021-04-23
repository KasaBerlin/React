import React from "react";
import { Button, ButtonGroup } from "reactstrap";

class Row extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
      display: true,
    };
  }

  changeColor = () => {
    let colors = ["red", "orange", "blue", "green", "yellow"];
    this.setState({
      color: colors[Math.floor(Math.random() * 5)],
    });
  };

  deleteRow = (e) => {
    this.setState({ display: !this.state.display });
  };

  renderThis = () =>
    this.state.display ? (
      <p>
        {this.props.name}, color = {this.state.color}
        <ButtonGroup>
          <Button
            style={styleButton}
            color="warning"
            type="button"
            className="color button"
            onClick={() => this.changeColor()}
          >
            change color
          </Button>
          <Button
            style={styleButton}
            color="info"
            type="button"
            className="delete button"
            onClick={() => this.deleteRow()}
          >
            delete me
          </Button>
        </ButtonGroup>
      </p>
    ) : null;

  render() {
    return <React.Fragment>{this.renderThis()}</React.Fragment>;
  }
}

export default Row;

const styleButton = {
  color: "violet",
  fontSize: "1.3em",
  fontWeight: "bold",
};
// const styleGroup = {
//   width: "50%",
//   margin: "0 auto"
// };
