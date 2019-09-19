import React from "react";
import Header from "./Header";
import ToDoList from "./ToDoList";
import ToDoForm from "./ToDoForm";
import uuid from "uuid/v4";
import { getRandomTagline } from "../helpers.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toDoItems: {}
    };
    // updating -> mutation
  }
  addToDo = text => {
    const todo = {
      uuid: uuid(),
      text: text,
      done: false
    };
    this.setState(state => {
      state.toDoItems[todo.uuid] = todo;
      return state;
    });
  };
  render() {
    return (
      <div className="container">
        <Header tagline={getRandomTagline()} />
        <ToDoForm addToDo={this.addToDo} />
        <ToDoList items={this.state.toDoItems} />
      </div>
    );
  }
}
export default App;
