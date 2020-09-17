import React from "react";
import "./GiaiPT.css";

class GiaiPT extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      a: 0,
      b: 0,
      c: 0,
      x1: 0,
      x2: 0,
    };
  }
  onChangeNumberA(event) {
    this.setState({ a: event.target.value });
  }
  onChangeNumberB(event) {
    this.setState({ b: event.target.value });
  }
  onChangeNumberC(event) {
    this.setState({ c: event.target.value });
  }
  Result() {
    const { a, b, c, x1, x2 } = this.state;
    const delta = b * b - 4 * a * c;
    if (a !== 0) {
      if (delta < 0) {
        window.alert("Phương trình vô nghiệm");
      }
      if (delta === 0) {
        const result1 = -b / (2 * a);
        const result2 = -b / (2 * a);
        this.setState({ x1: result1 });
        this.setState({ x2: result2 });
      }
      if (delta > 0) {
        const delta1 = Math.sqrt(delta);
        const result1 = (-b + delta1) / (2 * a);
        const result2 = (-b - delta1) / (2 * a);
        this.setState({ x1: result1 });
        this.setState({ x2: result2 });
        console.log(x1);
        console.log(x2);
      }
    }
  }
  // isNumberKey(evt) {
  //   var charCode = evt.which ? evt.which : evt.keyCode;
  //   if (charCode > 31 && (charCode < 48 || charCode > 57)) return false;
  //   return true;
  // }
  // validate(evt) {
  //   if (evt.keyCode != 8) {
  //     var theEvent = evt || window.event;
  //     var key = theEvent.keyCode || theEvent.which;
  //     key = String.fromCharCode(key);
  //     var regex = /[0-9]|\./;
  //     if (!regex.test(key)) {
  //       theEvent.returnValue = false;

  //       if (theEvent.preventDefault) theEvent.preventDefault();
  //     }
  //   }
  // }
  render() {
    const { a, b, c, x1, x2 } = this.state;
    return (
      <div>
        <input
          type="text"
          placeholder=""
          //   oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1');"
          //   onkeydown="validate(event);"
          //onkeypress="return isNumberKey(event)"
          value={a}
          onChange={(event) => this.onChangeNumberA(event)}
        />
        <h1> X^2 + </h1>
        <input
          type="text"
          placeholder=""
          value={b}
          onChange={(event) => this.onChangeNumberB(event)}
        />
        <h1> X + </h1>
        <input
          type="text"
          placeholder=""
          value={c}
          onChange={(event) => this.onChangeNumberC(event)}
        />
        <h1>=</h1>
        <button onClick={() => this.Result()}>Result</button>
        <h1>
          X1 = <p>{this.state.x1}</p>
        </h1>
        {/* <p>{this.state.x1}</p> */}
        <h1>
          {" "}
          X2 = <p>{this.state.x2}</p>{" "}
        </h1>
        {/* <p>{this.state.x2}</p> */}
      </div>
    );
  }
}
export default GiaiPT;
