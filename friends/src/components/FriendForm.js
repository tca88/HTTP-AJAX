import React, { Component } from "react";
import axios from "axios";

class FriendForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friend: {
        name: "",
        age: "",
        email: ""
      }
    };
  }

  handleChange = e => {
    console.log(this.state.friend);
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
        <h2>Add a New Friend</h2>
        <form onSubmit={this.updateFriends}>
          <input
            name="name"
            placeholder="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
          <input
            name="age"
            placeholder="age"
            onChange={this.handleChange}
            value={this.state.age}
          />
          <input
            name="email"
            placeholder="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

export default FriendForm;
