import React, { Component } from "react";
import "./App.css";
import Note from "./Components/index";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteText: "",
      notes: []
    };
  }

  updateNoteeText(noteText) {
    this.setState({ noteText: noteText.target.value });
  }

  addNote() {
    if (this.state.noteText === "") {
      return;
    }
    let notesArr = this.state.notes;
    notesArr.push(this.state.noteText);
    this.setState({ noteText: "" });
    this.textInput.focus();
  }

  handleKeyPress = event => {
    if (event.key === "Enter") {
    }
  };

  deleteNote(index) {
    let notesArr = this.state.notes;
    notesArr.splice(index, 1);
    this.setState({ notes: notesArr });
  }

  render() {
    let notes = this.state.notes.map((value, key) => {
      return (
        <Note
          key={key}
          text={value}
          deleteMethod={() => this.deleteNote(key)}
        />
      );
    });

    return (
      <div className="Container">
        <div className="header"> React to Do application></div>
        {notes}
        <div className="button" onClick={this.addNote.bind(this)}>
          +
        </div>
        <input
          type="text"
          ref={input => {
            this.textInput = input;
          }}
          className="textInput"
          value={this.state.noteText}
          onChange={noteText => this.updateNoteeText(noteText)}
          onKeyPress={this.handleKeyPress.bind(this)}
        />
      </div>
    );
  }
}

export default App;
