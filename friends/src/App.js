import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import FriendList from './Components/friend-list';
import FriendForm from './Components/friend-forms';


class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      friendsList: [],
    }
  }
  componentDidMount () {
    console.log("component has mounted");
    axios
      .get('http://localhost:5000/friends')
        .then (res =>{
          console.log(res);
          this.setState({ friendsList: res.data });
          console.log(this.state.friendsList)
        })
        .catch (err =>{
          console.log(err);
        })

  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            Friends List
          </h1>
          <FriendForm 
          
          
          />
          <FriendList 
            arrayOfFriends = {this.state.friendsList}

          />
          
        </header>
      </div>
    );
  }
}

export default App;
