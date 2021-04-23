import React, { Component } from "react";
class Button extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button
        className="square"
        onClick={this.props.handleClick}
        disabled={this.props.clicked}
      >
        {this.props.buttonText}
      </button>
    );
  }
}

export default Button;
