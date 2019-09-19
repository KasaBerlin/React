import React from "react";
import ReactDOM from "react-dom";
import Spinner from "./Loader";

class App extends React.Component {
  state = { lat: null, errorMessage: "" };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }
  renderThis() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }
    if (!this.state.errorMessage && this.state.lat) {
      return (
        <div
          className="ui huge header"
          style={{ textAlign: "center", marginTop: "30%" }}
        >
          lat:{this.state.lat.toFixed(4)}
        </div>
      );
    }
    return <Spinner message="Hold up!" />;
  }
  render() {
    return (
      <div style={{ border: "20px solid orangered", height: "100vh" }}>
        {this.renderThis()}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
