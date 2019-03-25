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

  onClick = () => {
    alert(`yey : ${this.firstName.value} | ${this.lastName.value} submitted !`);
  }

  onKeyUp = (target, e) => {
    console.log(e.keyCode);
    if (e.keyCode === 13) {
      switch (target) {
        case 'firstName': this.lastName.focus(); break;
        case 'lastName': this.age.focus(); break;
        case 'age': this.submit.focus(); break;
        default: this.firstName.focus();
      }
    }
  }

  render() {
    return (
      <div className="App">
        <div>
          <span>First Name: </span>
          <input ref={(input) => { this.firstName = input }} type="text"
            onKeyUp={this.onKeyUp.bind(this, 'firstName')} />
        </div>
        <div>
          <span>Last Name: </span>
          <input ref={(input) => { this.lastName = input }} type="text"
            onKeyUp={this.onKeyUp.bind(this, 'lastName')} />
        </div>
        <div>
          <span>Age: </span>
          <input ref={(input) => { this.age = input }} type="text"
            onKeyUp={this.onKeyUp.bind(this, 'age')} />
        </div>
        <div>
          <input type="submit" value="Submit" onClick={this.onClick} ref={(input) => { this.submit = input }}
            onKeyUp={this.onKeyUp.bind(this, 'submit')} />
        </div>
      </div>
    );
  }
}

export default App;
