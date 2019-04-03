import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendPage from "./components/FriendPage";
import FriendForm from "./components/FriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/friends")
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateFriends = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        console.log("printing res");
        console.log(res);
        this.setState({
          friends: [...this.state.friends, newFriend]
        });
      })
      .then((window.location.href = "/"))
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <div className="App">
        <nav className="main-nav">
          <NavLink
            exact
            to="/"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Home
          </NavLink>
          <NavLink
            to="/add-friend"
            className="nav-item"
            activeClassName="nav-item-active"
          >
            Add a Friend
          </NavLink>
        </nav>
        <div className="container">
          <Route
            exact
            path="/"
            render={props => (
              <FriendsList {...props} friends={this.state.friends} />
            )}
          />
          <Route
            path="/friend/:id"
            render={props => (
              <FriendPage {...props} friends={this.state.friends} />
            )}
          />
          <Route
            path="/add-friend"
            render={props => (
              <FriendForm
                {...props}
                friends={this.state.friends}
                updateFriends={this.updateFriends}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
