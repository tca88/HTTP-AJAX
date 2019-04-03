import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendPage from "./components/FriendPage";
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
        </div>
      </div>
    );
  }
}

export default App;
