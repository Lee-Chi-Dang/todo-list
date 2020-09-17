import React from "react";
import "./Item.css";
import PropTypes from "prop-types";

class Item1 extends React.Component {
  static propTypes = {
    value: PropTypes.number,
    data: PropTypes.object,
    onRemove: PropTypes.func,
    onPlus: PropTypes.func,
    onSubtract: PropTypes.func,
  };
  onZero() {
    if (this.props.value === 0) {
      return <p>Zero</p>;
    } else {
      return this.props.value;
    }
  }
  render() {
    const { onPlus, onSubtract, onRemove } = this.props;
    return (
      <div className="back">
        {/* { <div className="row">{this.state.input}</div> } */}
        <div className="row">{this.onZero()}</div>
        <div className="function">
          <button className="plus" onClick={onPlus}>
            +
          </button>
          <button className="substract" onClick={onSubtract}>
            -
          </button>
          <button className="delete" onClick={onRemove}>
            del
          </button>
        </div>
      </div>
    );
  }
}
export default Item1;
