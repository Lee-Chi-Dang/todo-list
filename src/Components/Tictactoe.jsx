import React from "react";
import "./Tictactoe.css";
import { array } from "prop-types";

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      isCompleted: true,
      obj: {},
    };
  }

  X_O(index) {
    const { isCompleted, obj } = this.state;
    if (obj[index] === undefined) {
      obj[index] = isCompleted;
      this.setState({ isCompleted: !isCompleted, obj });
    }
    console.log(isCompleted);
    console.log(obj);
    console.log(Object.values(obj).length);
  }
  display(index) {
    const { obj } = this.state;
    if (obj[index] === undefined) {
      return " ";
    }
    if (obj[index] === true) {
      return "X";
    }
    if (obj[index] === false) {
      return "O";
    }
  }
  restart() {
    this.setState({
      isCompleted: true,
      obj: {},
    });
  }
  checkWin() {
    const { obj, isCompleted } = this.state;
    const arrNum = Object.values(obj).length;
    // for (arrNum = 5; arrNum <= 9; arrNum++) {
    if (obj[1] === true && obj[2] === true && obj[3] === true) {
      return "X is Win";
    } else if (obj[1] === false && obj[2] === false && obj[3] === false) {
      return "O is Win";
    } else if (obj[4] === true && obj[5] === true && obj[6] === true) {
      return "X is Win";
    } else if (obj[4] === false && obj[5] === false && obj[6] === false) {
      return "O is Win";
    } else if (obj[7] === true && obj[8] === true && obj[9] === true) {
      return "X is Win";
    } else if (obj[7] === false && obj[8] === false && obj[9] === false) {
      return "O is Win";
    } else if (obj[1] === true && obj[4] === true && obj[7] === true) {
      return "X is Win";
    } else if (obj[1] === false && obj[4] === false && obj[7] === false) {
      return "O is Win";
    } else if (obj[2] === true && obj[5] === true && obj[8] === true) {
      return "X is Win";
    } else if (obj[2] === false && obj[5] === false && obj[8] === false) {
      return "O is Win";
    } else if (obj[3] === true && obj[6] === true && obj[9] === true) {
      return "X is Win";
    } else if (obj[3] === false && obj[6] === false && obj[9] === false) {
      return "O is Win";
    } else if (obj[1] === true && obj[5] === true && obj[9] === true) {
      return "X is Win";
    } else if (obj[1] === false && obj[5] === false && obj[9] === false) {
      return "O is Win";
    } else if (obj[3] === true && obj[5] === true && obj[7] === true) {
      return "X is Win";
    } else if (obj[3] === false && obj[5] === false && obj[7] === false) {
      return "O is Win";
    }
  }
  render() {
    return (
      <div>
        <div className="background">
          <button onClick={() => this.X_O(1)}>{this.display(1)}</button>
          <button onClick={() => this.X_O(2)}>{this.display(2)}</button>
          <button onClick={() => this.X_O(3)}>{this.display(3)}</button>
          <button onClick={() => this.X_O(4)}>{this.display(4)}</button>
          <button onClick={() => this.X_O(5)}>{this.display(5)}</button>
          <button onClick={() => this.X_O(6)}>{this.display(6)}</button>
          <button onClick={() => this.X_O(7)}>{this.display(7)}</button>
          <button onClick={() => this.X_O(8)}>{this.display(8)}</button>
          <button onClick={() => this.X_O(9)}>{this.display(9)}</button>
        </div>
        <button onClick={() => this.restart()}>restart</button>
        {/* <button onClick={() => this.checkWin()}>check</button> */}
        <p className="p1">{this.checkWin()}</p>
      </div>
    );
  }
}
export default Tictactoe;
