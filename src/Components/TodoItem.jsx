import React from "react";
import "../todoItem.css";
import Delete from "./delete.jsx";
import Pencil from "./pencil.jsx";
import { v4 as uuidv4 } from "uuid";
import Check from "./check";
import Tick from "./tick";
class todoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: "",
      list: [
        { id: uuidv4(), title: "task 1", isCompleted: false },
        { id: uuidv4(), title: "task 2", isCompleted: true },
      ],
      S,
    };
  }
  onItemClicked(itemIndex, item) {
    const { list } = this.state;
    item.isCompleted = !item.isCompleted;
    list.splice(itemIndex, 1, item);
    this.setState({ list, todo: "" });
  }

  handleDeleteText(itemIndex) {
    const { list } = this.state;
    const result = window.confirm("Are your sure to delete this task ?");
    if (result) {
      list.splice(itemIndex, 1);
      this.setState({ list, todo: "" });
    }
  }
  handleUpdateData(itemDelete) {
    const { list, todo, indexUpdate } = this.state;
    const item = { id: uuidv4(), title: todo, isCompleted: false };
    console.log("------------", indexUpdate);
    list.splice(indexUpdate, 1, item);
    this.setState({ list, todo: "" });
  }
  handleEditText(itemEdit, index) {
    const { list, todo } = this.state;
    this.setState({ todo: itemEdit, indexUpdate: index });
  }
  onChangeText(event) {
    this.setState({ todo: event.target.value });
  }

  pushlist() {
    const { list, todo } = this.state;
    const item = { id: uuidv4(), title: todo, isCompleted: false };
    list.push(item);
    this.setState({ list, todo: "" });
  }
  render() {
    const { list, todo } = this.state;
    const item = { id: uuidv4(), title: todo, isCompleted: false };
    return (
      <div className="todoItemBackground">
        <div className="todoList">
          <h1 className="h1"> Todo List</h1>
          <p className="p">A Simple React Todo List App</p>
          <div className="update">
            <div className="div">
              <ul>
                {list.map((item, index) => (
                  <li key={index}>
                    {item.title}
                    <div className="locate">
                      <button
                        type="button"
                        className="delete"
                        onClick={() => this.handleEditText(item.title, index)}
                      >
                        <Pencil />
                      </button>
                      <button
                        type="button"
                        className="delete"
                        onClick={() => this.handleDeleteText(index)}
                      >
                        <Delete />
                      </button>
                      <button
                        type="button"
                        className="delete"
                        onClick={() => this.onItemClicked(index, item)}
                      >
                        {item.isCompleted ? <Tick /> : <Check />}
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <input
              type="text"
              value={todo}
              placeholder="New Todo"
              onChange={(event) => this.onChangeText(event)}
            />
            <button
              type="submit"
              className="submit"
              onClick={() => this.pushlist()}
            >
              Add Todo
            </button>
            <button
              type="submit"
              className="submit"
              onClick={() => this.handleUpdateData()}
            >
              Update
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default todoItem;
