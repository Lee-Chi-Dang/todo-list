import React from "react";
import "../todoItem.css";
import Delete from "./delete.jsx";
import Pencil from "./pencil.jsx";

class todoItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      indexUpdate: -1,
      todo: "",
      list: [],
    };
  }
  handleDeleteText(itemIndex) {
    const { list } = this.state;
    // const result = window.confirm("Are your sure to delete this task ?");
    // if (result) {
    list.splice(itemIndex, 1);
    this.setState({ list, todo: "" });
  }
  handleUpdateData(itemDelete) {
    const { list, todo, indexUpdate } = this.state;
    console.log("------------", indexUpdate);
    list.splice(indexUpdate, 1, todo);
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
    list.push(todo);
    this.setState({ list, todo: "" });
  }
  render() {
    const { list, todo } = this.state;
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
                    {item}
                    <div className="locate">
                      <button
                        type="button"
                        className="delete"
                        onClick={() => this.handleEditText(item, index)}
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
