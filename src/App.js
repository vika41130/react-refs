import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    name: 'TechSmith'
  }

  changeName = (newName) => {
    this.setState({
      name: newName
    });
  }

  changeNameFromInput = (e) => {
    this.setState({
      name: e.target.value
    });
  }

  render() {
    return (
      <div>
        <br /> <br />
        <button onClick={() => this.changeName('Awesome TechSmith')}>Change State Using Anon Funtion</button>
        <button onClick={this.changeName.bind(this, 'Awesome TechSmith -----')}>Change State Using Anon Funtion</button>
        <br /> <br />
        <input type="text" onChange={this.changeNameFromInput} value={this.state.name} />
        <br /> <br />
        <div>{this.state.name}</div>
        
      </div>
    );
  }
}

export default App;
