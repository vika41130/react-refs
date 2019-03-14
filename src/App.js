import React, { Component } from 'react';
// import UniqueId from 'react-html-id';

import './App.css';

const Temp = () => {
  return (
    [
      <div key="1">Hi</div>,
      <div key="2">Hello</div>
    ]
  );
}


class App extends Component {

  render() {
    return (
      <div className="App">
        <Temp />
      </div>
    );
  }
}

export default App;
