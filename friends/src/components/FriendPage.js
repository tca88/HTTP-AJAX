import React, { Component } from "react";
import { Route, Link, NavLink } from "react-router-dom";

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

  return (
    <div>
      <div>
        <p>{friend.name}</p>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={updateFriends}>Update Details</button>
      </div>
    </div>
  );
}

export default FriendPage;
