import React, { Component } from "react";
import Button from "./Button";

class Board extends Component {
  constructor() {
    super();
    this.state = {
      player: "X",
      moves: 0,
      btn1: "",
      btn2: "",
      btn3: "",
      btn4: "",
      btn5: "",
      btn6: "",
      btn7: "",
      btn8: "",
      btn9: "",
      btn1Clicked: false,
      btn2Clicked: false,
      btn3Clicked: false,
      btn4Clicked: false,
      btn5Clicked: false,
      btn6Clicked: false,
      btn7Clicked: false,
      btn8Clicked: false,
      btn9Clicked: false,
    };
  }
  resetState = () => {
    this.setState({
      player: "X",
      moves: 0,
      btn1: "",
      btn2: "",
      btn3: "",
      btn4: "",
      btn5: "",
      btn6: "",
      btn7: "",
      btn8: "",
      btn9: "",
      btn1Clicked: false,
      btn2Clicked: false,
      btn3Clicked: false,
      btn4Clicked: false,
      btn5Clicked: false,
      btn6Clicked: false,
      btn7Clicked: false,
      btn8Clicked: false,
      btn9Clicked: false,
    });
  };
  componentDidUpdate() {
    if (
      (this.state.btn1 === "X" &&
        this.state.btn2 === "X" &&
        this.state.btn3 === "X") ||
      (this.state.btn1 === "O" &&
        this.state.btn2 === "O" &&
        this.state.btn3 === "O") ||
      (this.state.btn4 === "X" &&
        this.state.btn5 === "X" &&
        this.state.btn6 === "X") ||
      (this.state.btn4 === "O" &&
        this.state.btn5 === "O" &&
        this.state.btn6 === "O") ||
      (this.state.btn7 === "X" &&
        this.state.btn8 === "X" &&
        this.state.btn9 === "X") ||
      (this.state.btn7 === "O" &&
        this.state.btn8 === "O" &&
        this.state.btn9 === "O") ||
      (this.state.btn1 === "X" &&
        this.state.btn4 === "X" &&
        this.state.btn7 === "X") ||
      (this.state.btn1 === "O" &&
        this.state.btn4 === "O" &&
        this.state.btn7 === "O") ||
      (this.state.btn2 === "X" &&
        this.state.btn5 === "X" &&
        this.state.btn8 === "X") ||
      (this.state.btn2 === "O" &&
        this.state.btn5 === "O" &&
        this.state.btn8 === "O") ||
      (this.state.btn3 === "X" &&
        this.state.btn6 === "X" &&
        this.state.btn9 === "X") ||
      (this.state.btn3 === "O" &&
        this.state.btn6 === "O" &&
        this.state.btn9 === "O") ||
      (this.state.btn1 === "X" &&
        this.state.btn5 === "X" &&
        this.state.btn9 === "X") ||
      (this.state.btn1 === "O" &&
        this.state.btn5 === "O" &&
        this.state.btn9 === "O") ||
      (this.state.btn3 === "X" &&
        this.state.btn5 === "X" &&
        this.state.btn7 === "X") ||
      (this.state.btn3 === "O" &&
        this.state.btn5 === "O" &&
        this.state.btn7 === "O")
    )
      if (this.state.player === "X") {
        this.resetState();
        return alert("player O has won");
      } else if (this.state.moves > 9) {
        this.resetState();
        return alert("It's a draw!");
      } else {
        this.resetState();
        return alert("player X has won");
      }
  }

  render() {
    return (
      <>
        <div style={{ textAlign: "center" }}>
          <h1>Tic Tac Toe Game</h1>
          <br />
          <button
            onClick={() => {
              this.resetState();
            }}
            className="col-md-4 offset-md-4"
          >
            Reset Game
          </button>
        </div>
        <br />

        <div style={{ width: "60%", marginLeft: "auto", marginRight: "auto" }}>
          {/* {myAlert} */}
          <Button
            clicked={this.state.btn1Clicked}
            buttonText={this.state.btn1}
            handleClick={() => {
              this.setState({
                btn1Clicked: true,
                btn1: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn2Clicked}
            buttonText={this.state.btn2}
            handleClick={() => {
              this.setState({
                btn2Clicked: true,
                btn2: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn3Clicked}
            buttonText={this.state.btn3}
            handleClick={() => {
              this.setState({
                btn3Clicked: true,
                btn3: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn4Clicked}
            buttonText={this.state.btn4}
            handleClick={() => {
              this.setState({
                btn4Clicked: true,
                btn4: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn5Clicked}
            buttonText={this.state.btn5}
            handleClick={() => {
              this.setState({
                btn5Clicked: true,
                btn5: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn6Clicked}
            buttonText={this.state.btn6}
            handleClick={() => {
              this.setState({
                btn6Clicked: true,
                btn6: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn7Clicked}
            buttonText={this.state.btn7}
            handleClick={() => {
              this.setState({
                btn7Clicked: true,
                btn7: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn8Clicked}
            buttonText={this.state.btn8}
            handleClick={() => {
              this.setState({
                btn8Clicked: true,
                btn8: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
          <Button
            clicked={this.state.btn9Clicked}
            buttonText={this.state.btn9}
            handleClick={() => {
              this.setState({
                btn9Clicked: true,
                btn9: this.state.player === "X" ? "X" : "O",
                player: this.state.player === "X" ? "Y" : "X",
                moves: this.state.moves + 1,
              });
            }}
          />
        </div>
      </>
    );
  }
}

export default Board;
