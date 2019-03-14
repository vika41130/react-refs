import React, { Component } from 'react';
import './App.css';

import Parent from './components/ParentToChild/Parent';

class App extends Component {

  state = {
    title: 'placeholder title'
  }

  changeTheWorld = (NewTitle) => {
    this.setState({
      title: NewTitle
    });
  }

  render() {
    return (
      <div className="App">
          <Parent changeTheWorldEvent={ this.changeTheWorld.bind(this, 'new world') } 
            keepTheWorldSameEvent={ this.changeTheWorld.bind(this, 'same world') }
            title= { this.state.title }
          />
      </div>
    );
  }
}

export default App;
