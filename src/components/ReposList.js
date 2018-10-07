import React from "react";
import Forks from "./Forks";
import PullRequests from "./PullRequests";

const ReposList = props => {
	return (
		<div className="repos-list">
			<h2>My Forked Repos</h2>
			<Forks forkEvents={props.forkEvents} />
			<h2>My PullRequests</h2>
			<PullRequests pullRequestsEvents={props.pullRequestsEvents} pullRequestsEventsURLs={props.pullRequestsEventsURLs} />
		</div>
	);
};

export default ReposList;
