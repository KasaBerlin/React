import React from "react";
import ReactDOM from "react-dom";
import Row from "./components/Row";
import "./index.css";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAll: true,
      fruits: [
        { key: 1, name: "Apple" },
        { key: 2, name: "Mango" },
        { key: 3, name: "Banana" },
        { key: 4, name: "Lemon" }
      ]
    };
  }

  deleteAll = e => {
    this.setState({ displayAll: !this.state.displayAll });
  };

  renderThis = () =>
    this.state.displayAll ? (
      <div>
        {this.state.fruits.map(el => {
          return <Row key={el.key} name={el.name} />;
        })}
        <button
          type="button"
          className="deleteAll button"
          onClick={() => this.deleteAll()}
        >
          delete all!!!
        </button>
      </div>
    ) : null;

  render() {
    return (
      <React.Fragment>
        <h1>Components 1</h1>
        {this.renderThis()}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
