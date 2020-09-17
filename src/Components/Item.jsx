import React from "react";
import Item1 from "./Item1";
import "./Item.css";
class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
    };
  }
  delete(itemIndex) {
    const { list } = this.state;
    list.splice(itemIndex, 1);
    this.setState({ list });
  }

  plusFunct(itemIndex) {
    const { list } = this.state;
    const value1 = list[itemIndex];
    const value2 = value1.value;
    const item = { value: value2 + 1 };
    list.splice(itemIndex, 1, item);
    this.setState({ list });
  }
  subtractFunct(itemIndex) {
    const { list } = this.state;
    const value = list[itemIndex].value;
    if (value === 0) {
      var item = { value: 0 };
    } else {
      var item = { value: value - 1 };
    }
    list.splice(itemIndex, 1, item);
    this.setState({ list });
  }
  onReFreshNum() {
    const { list } = this.state;
    console.log(list);
    const obj = list.length;
    console.log(obj);
    const array = [];
    for (let i = 0; i < obj; i++) {
      const item = { value: 0 };
      array.push(item);
    }
    console.log(array);
    this.setState({ list: array });
  }
  onReFresh() {
    const { list } = this.state;
    if (list.length === 0) {
      this.setState({
        list: [{ value: 0 }, { value: 0 }, { value: 0 }, { value: 0 }],
      });
    }
  }

  // onReFresh() {
  //   if (data === 0) {
  //     this.setState;
  //   }
  // }
  render() {
    const { list } = this.state;
    return (
      <div>
        <div className="display">
          <button onClick={() => this.onReFreshNum()}>reset</button>
          <button onClick={() => this.onReFresh()}>refresh</button>
        </div>
        <div className="back">
          <ul>
            {list.map((item, index) => (
              <li key={index}>
                <Item1
                  value={item.value}
                  data={item}
                  onRemove={() => this.delete(index)}
                  onPlus={() => this.plusFunct(index)}
                  onSubtract={() => this.subtractFunct(index)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default Item;
