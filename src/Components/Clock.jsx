import React from "react";

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
        console.log("constructor");
    }
    
    componentDidMount() {
        console.log("componentDidMount da chay");
    }

    componentWillMount() {
        console.log("componentWillMount da chay");
    }
  
    render() {
        console.log("render da chay");
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }


  export default Clock;