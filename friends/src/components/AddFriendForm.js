import React, { Component } from "react";
import axios from "axios";
import "./Components.css";

class AddFriendForm extends Component {
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
    e.persist();
    console.log(this.state.friend);
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

  addFriends = e => {
    e.preventDefault();
    this.props.addFriends(this.state.friend);

    this.setState({
      friend: {
        name: "",
        age: "",
        email: ""
      }
    });
  };

  render() {
    return (
      <div className="form-container">
        <h2>Add a New Friend</h2>
        <form onSubmit={this.addFriends} className="form">
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

export default AddFriendForm;
