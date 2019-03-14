import React, { Component } from 'react';
import UniqueId from 'react-html-id';

import './App.css';

import User from './User';


class App extends Component {

  constructor() {
    super();
    UniqueId.enableUniqueIds(this);
    this.state = {
      users: [
        { id: this.nextUniqueId(), name: 'John', age: 20 },
        { id: this.nextUniqueId(), name: 'Peter', age: 30 },
        { id: this.nextUniqueId(), name: 'Alan', age: 50 },
      ]
    }

    console.log(this.state);

  }

  deleteUser = (index, e) => {
    const users = Object.assign([], this.state.users);
    users.splice(index, 1);
    this.setState({
      users
    });
  }

  changeUserName = (userId, e) => {
    const index = this.state.users.findIndex((user)=> {
      return user.id === userId;
    });

    const user = Object.assign({}, this.state.users[index]);

    user.name = e.target.value;

    const users = Object.assign([], this.state.users);

    users[index] = user;

    this.setState({users});
  }

  render() {
    return (
      <div className="App">
        <ul>
          {this.state.users.map((user, index) => {
            return <User key={user.id} name={user.name} age={user.age} delEvent={this.deleteUser.bind(this, index)} 
            changeEvent={this.changeUserName.bind(this, user.id)} />
          })}
        </ul>
      </div>
    );
  }
}

export default App;
