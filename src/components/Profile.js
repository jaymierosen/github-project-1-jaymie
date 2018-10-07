import React from "react";
import Button from "./Button.js";
import ReposList from "./ReposList";

const Profile = props => {
  return (
    <div className="profile">
      {/* we spread in the repos object */}
      <h2>Hi, {props.firstname}!</h2>
      <Button handleClick={props.handleClick} value="Logout" />
      <ReposList forkEvents={props.forkEvents} pullRequestsEvents={props.pullRequestsEvents} pullRequestsEventsURLs={props.pullRequestsEventsURLs} />
    </div>
  );
};

export default Profile;
