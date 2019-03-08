import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: ""
    };
  }

  updateNoteeText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  render() {
    return (
      <div className="Container">
        <div className="header"> React to Do application></div>
        <div className="button">+</div>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChangeText={noteText => this.updateNoteeText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
