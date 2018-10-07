import React from "react";
import FollowingList from "./FollowingList.js";
import Button from "./Button.js";
import ReposList from "./ReposList.js";

const Profile = props => {
  return (
    <div className="profile">
      {/* we spread in the profile object */}
      <h2>Hi, {props.firstname.charAt(0).toUpperCase() + props.firstname.slice(1)}!</h2>
      <img src={props.avatar_url} alt="me" />
      <Button handleClick={props.handleClick} value="Logout" />
      <FollowingList followers={props.followers} />
      <ReposList events={props.events} />
    </div>
  );
};

export default Profile;
