import React from "react";
//import Status from "./Status";

const PullRequests = props => {
	return (
		<div className="pull-requests">
			<ul>
				{props.pullRequestsEvents.map(
				(repo) =>
					<li key={`repo-prEvent-${repo.id}`}>{repo.id}</li>
				)}
				{props.pullRequestsEventsURLs.map(
					(repo) =>
					<li key={`repo-prEventUrl-${repo.id}`}>{repo.id}</li>
				)}
			</ul>
		</div>
	)
}

export default PullRequests;