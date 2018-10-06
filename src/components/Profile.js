import React from "react";
import Button from "./Button.js";
import ReposList from "./ReposList";

const Profile = props => {
  return (
    <div className="profile">
      {/* we spread in the repos object */}
      <h2>Hi, {props.firstname}!</h2>
      <Button handleClick={props.handleClick} value="Logout" />
      <ReposList repos={props.repos} pullRequests={props.pullRequests} />
    </div>
  );
};

export default Profile;
