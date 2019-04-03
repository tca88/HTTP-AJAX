import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

function FriendCard(props) {
  const friend = props.friends.find(
    friend => `${friend.id}` === props.match.params.id
  );
  if (!friend) return <h3>Loading data...</h3>;
  return (
    <div>
      <div>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
      </div>
    </div>
  );
}

export default FriendCard;
