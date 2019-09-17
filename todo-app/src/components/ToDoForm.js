import React from "react";

class ToDoForm extends React.Component {
  textInput = React.createRef();
  handleSubmit = e => {
    e.preventDefault();
    const text = this.textInput.current.value.trim();
    this.props.addToDo(text);
    e.currentTarget.reset();
    // console.log(`Create new item: ${this.textInput.current.value}`);
    // or e.target[0].value
  };
  render() {
    return (
      <form className="input-group my-3" onSubmit={this.handleSubmit}>
        <input
          className="form-control"
          type="text"
          placeholder="Add a new todo list..."
          ref={this.textInput}
        />
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" type="submit">
            <i className="fas fa-plus" aria-hidden="true" /> &nbsp;Add item
            {/* &nbsp; non breakable space  */}
          </button>
        </div>
      </form>
    );
  }
}

export default ToDoForm;
