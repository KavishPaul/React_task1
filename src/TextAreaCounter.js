import React, { Component } from 'react';

class TextAreaCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      content: '',
    };
  }

  handleInputChange = (event) => {
    const content = event.target.value;

    // count characters
    const charCount = content.length;

    // remove empty spaces from start and end
    const trimmedContent = content.trim();

    // split the trimmed content into words and count them
    const words = trimmedContent.split(/\s/);
    const wordCount = words.filter((element) => element !== '').length;

    this.setState({
      content,
      charCount,
      wordCount,
    });
  };

  render() {
    return (
      <div>
        <center>
        <textarea id="area" onChange={this.handleInputChange} value={this.state.content} />
        <p>Character count: {this.state.charCount}</p>
        <p>Word count: {this.state.wordCount}</p>
        </center>
      </div>
    );
  }
}

export default TextAreaCounter;
