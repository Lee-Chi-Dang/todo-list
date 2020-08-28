import React from "react";

class Counter extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  increment() {
    this.setState({ number: this.state.number + 1 });
  }

  decrement() {
    this.setState({ number: this.state.number - 1 });
  }

  render() {
    return (
      <div>
        <h3>Current week: {this.state.number}</h3>
        <button onClick={() => this.increment()}>Increment</button>
        <button onClick={() => this.decrement()}>Decrement</button>
      </div>
    );
  }
}

Counter.defaultProps = {
  label: "Web Developer Track"
};

export default Counter;
