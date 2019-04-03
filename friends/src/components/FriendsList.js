import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";
import "./FriendsList.css";

function FriendsList(props) {
  return (
    <div className="friend-list">
      {props.friends.map(friend => (
        <div className="friend-item" key={friend.id}>
          {friend.name}
          <Link to={`/friend/${friend.id}`}>
            <p>Learn More</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default FriendsList;
