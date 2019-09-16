import React from "react";
import ReactDOM from "react-dom";
import Row from "./components/Row";
import "./index.css";

// function mapFruit() {
//   const fruitList = fruits.map(item => <span>item</span>);
//   return fruitList;
// }

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayAll: true,
      fruits: [
        { id: 1, name: "Apple" },
        { id: 2, name: "Mango" },
        { id: 3, name: "Banana" },
        { id: 4, name: "Lemon" }
      ]
    };
  }

  deleteAll = e => {
    this.setState({ displayAll: !this.state.displayAll });
  };
  render() {
    console.log(this.state.fruits);
    return (
      <React.Fragment>
        <h1>Components 1</h1>
        {this.state.displayAll ? (
          <div>
            {this.state.fruits.map(el => {
              console.log(el);
              return <Row id={el.id} name={el.name} />;
            })}
            <button
              type="button"
              className="deleteAll button"
              onClick={() => this.deleteAll()}
            >
              delete all!!!
            </button>
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}

ReactDOM.render(<List />, document.getElementById("root"));
