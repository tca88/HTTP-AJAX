import React, { Component } from "react";
import axios from "axios";

class UpdateFriendForm extends Component {
  state = {
    friend: this.props.activeFriend
  };

  handleChange = e => {
    e.persist();
    if (e.target.name === "age") {
      e.target.value = parseInt(e.target.value, 10);
    }
    this.setState({
      friend: {
        ...this.state.friend,
        [e.target.name]: e.target.value
      }
    });
  };

  updateFriends = e => {
    e.preventDefault();
    this.props.updateFriends(this.state.friend);
  };

  render() {
    return (
      <div>
        <h2>Update Your Friend's Info</h2>
        <form onSubmit={this.updateFriends}>
          <input
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.friend.name}
          />
          <input
            type="number"
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.friend.age}
          />
          <input
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.friend.email}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default UpdateFriendForm;
