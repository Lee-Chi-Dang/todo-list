import React from "react";
import Input from "./Input";

class Inputrow extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="Input">
        <Input value={this.props.question} />
        <Input value={this.props.answer} />
      </div>
    );
  }
}
export default Inputrow;
