import React, { Component } from 'react';
import './App.css';
import Validation from './Validation/Validation';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    text: '',
    length: 0,
    lists: []
  }
  changedValueHandler = (event) => {
      event.preventDefault;
      let textLength = [...this.state.length];
      let updatedText = [...this.state.text];
      const lists = [...this.state.lists];
      if(updatedText.length >5){
        lists.push(updatedText);
      }
      updatedText = event.target.value;
      textLength = updatedText.length;

      this.setState({text: updatedText, length: textLength, lists: lists });
  }

  deleteList = (event, listIndex) => {
      const lists = [...this.state.lists];
      lists.splice(listIndex,1);
      this.setState({lists: lists});
  }
  render() {
    let lists = null;

    lists = (
      <div>
        {this.state.lists.map((list, index) => {
            return <CharComponent name={list} key={index} click={this.deleteList.bind(this, index)}/>
        })}
      </div>
    );
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={(event) => this.changedValueHandler(event)} value={this.state.text}/>
        <Validation length={this.state.length}/>
        {lists}
      </div>
    );
  }
}

export default App;
