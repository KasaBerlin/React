import React from "react";
import PropTypes from "prop-types";

class ShowAllPosts extends React.Component {
  render() {
    return (
      <div>
        <h2>Good morning Developers!</h2>
        {Object.keys(this.props.items).map(uuid => {
          uuid = this.props.items[uuid].uuid;
          return (
            <div className="post" key={uuid}>
              <p className="title">
                {" "}
                <span style={titleStyle}>
                  {this.props.items[uuid].title}
                </span>{" "}
              </p>
              <button
                className="read"
                onClick={this.props.handleClick.bind(this, uuid)}
              >
                open...
              </button>
              {this.props.items[uuid].showing ? (
                <p className="comment">{this.props.items[uuid].comment}</p>
              ) : null}
              <p className="userdate">
                <span style={usernameStyle}>{this.props.items[uuid].user}</span>{" "}
                | <span style={dateStyle}>{this.props.items[uuid].date}</span>{" "}
              </p>
            </div>
          );
        })}
      </div>
    );
  }
}

// PropTypes
ShowAllPosts.propTypes = {
  items: PropTypes.object.isRequired
};

//Styles
const titleStyle = {
  borderRight: "1px solid rgba(255, 0, 180, 0.5)",
  paddingRight: "3px"
};

const usernameStyle = {
  color: "salmon",
  textTransform: "uppercase",
  textDecorationLine: "overline"
};
const dateStyle = {
  color: "rgba(248, 148, 6, 1)",
  borderBottom: "1px solid rgb(248, 148, 6)",
  paddingRight: "3px"
};

export default ShowAllPosts;
