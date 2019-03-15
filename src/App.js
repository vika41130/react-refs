import React, { Component, PureComponent } from 'react';

import './App.css';

const Temp = (props) => {
  console.log("render temp");
  return (
    <div>{props.test}</div>
  );
}

class App extends PureComponent {

  state = {
    val: 1
  }

  componentDidMount() {
    setInterval(() => {
      this.setState(() => {
        return { val: 2 }
      });
    }, 2000);
  }


  // componentDidMount() {
  //   setInterval(() => {
  //     this.setState(() => {
  //       return { val: Math.random() }
  //     });
  //   }, 2000);
  // }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log("nextState", nextState);
  //   console.log("current state", this.state);
  //   return ( this.state === nextState ? false : true );
  // }

  render() {
    console.log("render App");
    return (
      <div className="App">
        <Temp test={ this.state.val } />
      </div>
    );
  }
}

export default App;
