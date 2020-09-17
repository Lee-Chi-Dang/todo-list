import React from "react";
import "./Tictactoe.css";
import { array, string } from "prop-types";

class Tictactoe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isCompleted: true,
      obj: {},
      win: "",
      choose: "",
      isCompleted1: false,
    };
  }

  X_O(index) {
    const { isCompleted, obj, win, choose, isCompleted1 } = this.state;
    // this.checkWin(obj);
    if (obj[index] === undefined && win.length === 0) {
      if (choose === "X") {
        obj[index] = isCompleted;
        this.checkWin(obj);
        this.setState({ isCompleted: !isCompleted, obj });
      } else {
        obj[index] = isCompleted1;
        this.checkWin(obj);
        this.setState({ isCompleted1: !isCompleted1, obj });
      }
    }

    console.log(win);
    console.log(isCompleted1);
    console.log(obj);
    console.log(Object.values(obj).length);
  }
  display(index) {
    const { obj, choose } = this.state;
    if (obj[index] === undefined) {
      return " ";
    }
    if (choose === "X") {
      if (obj[index] === true) {
        return "X";
      }
      if (obj[index] === false) {
        return "O";
      }
    } else if (choose === "O") {
      if (obj[index] === false) {
        return "O";
      }
      if (obj[index] === true) {
        return "X";
      }
    }
  }
  chooseX() {
    this.setState({ choose: "X" });
  }
  chooseO() {
    this.setState({ choose: "O" });
  }
  restart() {
    this.setState({
      isCompleted: true,
      obj: {},
      win: "",
      isCompleted1: false,
      choose: "",
    });
  }
  checkWin(obj) {
    const arrNum = Object.values(obj).length;
    if (obj[1] === true && obj[2] === true && obj[3] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[1] === false && obj[2] === false && obj[3] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[4] === true && obj[5] === true && obj[6] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[4] === false && obj[5] === false && obj[6] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[7] === true && obj[8] === true && obj[9] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[7] === false && obj[8] === false && obj[9] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[1] === true && obj[4] === true && obj[7] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[1] === false && obj[4] === false && obj[7] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[2] === true && obj[5] === true && obj[8] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[2] === false && obj[5] === false && obj[8] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[3] === true && obj[6] === true && obj[9] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[3] === false && obj[6] === false && obj[9] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[1] === true && obj[5] === true && obj[9] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[1] === false && obj[5] === false && obj[9] === false) {
      this.setState({ win: "O is Win" });
    } else if (obj[3] === true && obj[5] === true && obj[7] === true) {
      this.setState({ win: "X is Win" });
    } else if (obj[3] === false && obj[5] === false && obj[7] === false) {
      this.setState({ win: "O is Win" });
    } else if (arrNum === 9) {
      this.setState({ win: "Draw" });
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
        <p className="p1">{this.state.win}</p>
        <p>Please choose who start ?</p>
        <button className="button1" onClick={() => this.chooseX()}>
          X
        </button>
        <button className="button1" onClick={() => this.chooseO()}>
          O
        </button>
      </div>
    );
  }
}
export default Tictactoe;
