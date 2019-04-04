import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./Components.css";

function FriendPage(props) {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  if (!friend) return <h3>Loading data...</h3>;

  const updateFriends = e => {
    e.preventDefault();
    props.setActiveFriend(friend);
    props.history.push("/update-friend");
  };

  const deleteFriend = e => {
    e.preventDefault();
    props.deleteFriend(friend.id);
    alert(`${friend.name} was removed from your friends list`);
  };

  return (
    <div>
      <div className="friend-page-module">
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <div className="friend-page-buttons">
          <button className="update-button" onClick={updateFriends}>
            Update Details
          </button>
          <button className="delete-button" onClick={deleteFriend}>
            Delete Friend
          </button>
        </div>
      </div>
    </div>
  );
}

export default FriendPage;
