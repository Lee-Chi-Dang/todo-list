import React from "react";
import "../Calculator.css";
import { render } from "react-dom";
import { Input } from "./Input";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: 0,
      input1: "",
      operation: "",
    };
  }
  addToInput(numbers) {
    const { input, operation, input1 } = this.state;
    if (operation.length === 0) {
      const str1 = input + numbers;
      this.setState({ input: parseFloat(str1) });
    } else {
      const str2 = input1 + numbers;
      this.setState({ input1: str2 });
    }
    // if (input.length === 0) {
    //   this.setState({ operation: "" });
    //   // this.setState({ input: 0 });
    //   this.setState({ input1: "" });
    // }
  }
  addOperation(sign) {
    this.setState({ operation: sign });
  }
  addEqual() {
    const { input, input1, operation } = this.state;
    if (operation === "+") {
      const result = parseFloat(input) + parseFloat(input1);
      // this.setState({ answer: result });
      this.setState({ input: result });
      this.setState({ input1: "" });
      console.log(input);
      console.log(operation);
      console.log(input1);
      console.log(result);
    }
    if (operation === "-") {
      const result = parseFloat(input) - parseFloat(input1);
      // this.setState({ answer: result });
      this.setState({ input: result });
      this.setState({ input1: "" });
      console.log(result);
    }
    if (operation === ":") {
      const result = parseFloat(input) / parseFloat(input1);
      // this.setState({ answer: result });
      this.setState({ input: result });
      this.setState({ input1: "" });
      console.log(result);
    }
    if (operation === "*") {
      const result = parseFloat(input) * parseFloat(input1);
      // this.setState({ answer: result });
      this.setState({ input: result });
      this.setState({ input1: "" });
      console.log(result);
    }
  }

  showinput() {
    const { input, input1, answer } = this.state;
    // if (answer.length !== 0) {
    //   return answer;
    // }
    if (input1.length !== 0) {
      return input1;
    }
    if (input.length !== 0) {
      return input;
    }
  }
  Delete(AC) {
    this.setState({
      input: "0",
      input1: "",
      answer: "",
      operation: "",
    });
  }
  percent() {
    const { input, input1, answer } = this.state;
    if (input.length !== 0) {
      const percentInput = parseFloat(input) / 100;
      this.setState({ input: percentInput });
    }
    if (input1.length !== 0) {
      const percentInput1 = parseFloat(input1) / 100;
      this.setState({ input1: percentInput1 });
    }
    // if (answer.length !== 0) {
    //   const percentAnswer = parseFloat(answer) / 100;
    //   this.setState({ answer: percentAnswer });
    // }
  }
  onExchange() {
    const { input, input1, answer } = this.state;
    if (input.length !== 0) {
      const str3 = -input;
      this.setState({ input: str3 });
    }
    if (input1.length !== 0) {
      const str4 = -input1;
      this.setState({ input1: str4 });
    }
    if (answer.length !== 0) {
      const str5 = -answer;
      this.setState({ answer: str5 });
    }
  }
  render() {
    return (
      <div className="Calculatorbackground">
        <Input Input={this.showinput()} />
        <div className="rowbackgr">
          <div className="Component-button">
            <button onClick={() => this.Delete("AC")}>AC</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.onExchange()}>+/-</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.percent("%")}>%</button>
          </div>
          <div className="Component-button-orange">
            <button onClick={() => this.addOperation(":")}>:</button>
          </div>
        </div>
        <div className="rowbackgr">
          <div className="Component-button">
            <button onClick={() => this.addToInput("7")}>7</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("8")}>8</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("9")}>9</button>
          </div>
          <div className="Component-button-orange">
            <button onClick={() => this.addOperation("*")}>x</button>
          </div>
        </div>
        <div className="rowbackgr">
          <div className="Component-button">
            <button onClick={() => this.addToInput("6")}>6</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("5")}>5</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("4")}>4</button>
          </div>
          <div className="Component-button-orange">
            <button onClick={() => this.addOperation("+")}>+</button>
          </div>
        </div>
        <div className="rowbackgr">
          <div className="Component-button">
            <button onClick={() => this.addToInput("3")}>3</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("2")}>2</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput("1")}>1</button>
          </div>
          <div className="Component-button-orange">
            <button onClick={() => this.addOperation("-")}>-</button>
          </div>
        </div>
        <div className="rowbackgr">
          <div className="Component-button0">
            <button onClick={() => this.addToInput("0")}>0</button>
          </div>
          <div className="Component-button">
            <button onClick={() => this.addToInput(".")}>.</button>
          </div>
          <div className="Component-button-orange">
            <button onClick={() => this.addEqual()}>=</button>
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
