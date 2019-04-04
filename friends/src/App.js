import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import axios from "axios";
import FriendsList from "./components/FriendsList";
import FriendPage from "./components/FriendPage";
import AddFriendForm from "./components/AddFriendForm";
import UpdateFriendForm from "./components/UpdateFriendForm";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      friends: [],
      activeFriend: []
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

  // POST Request to add a new friend.

  addFriends = newFriend => {
    axios
      .post("http://localhost:5000/friends", newFriend)
      .then(res => {
        // console.log("printing res");
        // console.log(res);
        this.setState({
          friends: res.data
        });
        this.props.history.push("/");
      })
      .catch(err => {
        console.log(err);
      });
  };

  // Put request to update a friend's information.

  updateFriends = updatedFriend => {
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data });
        console.log(res);
        // redirect
        this.props.history.push(`/friend/${updatedFriend.id}`);
      })
      .catch(err => {
        console.log(err);
      });
  };

  setActiveFriend = friend => {
    this.setState({ activeFriend: friend });
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
              <FriendPage
                friends={this.state.friends}
                setActiveFriend={this.setActiveFriend}
                {...props}
              />
            )}
          />
          <Route
            path="/add-friend"
            render={props => (
              <AddFriendForm
                {...props}
                friends={this.state.friends}
                addFriends={this.addFriends}
              />
            )}
          />
          <Route
            path="/update-friend"
            render={props => (
              <UpdateFriendForm
                updateFriends={this.updateFriends}
                activeFriend={this.state.activeFriend}
              />
            )}
          />
        </div>
      </div>
    );
  }
}

export default App;
