import React from "react";
//import Status from "./Status";

const PullRequests = props => {
	return (
		<div className="pull-requests">
			<ul>
				{props.pullRequestsEvents.map(
				(repo) =>
					<li key={`repo-prEvent-${repo.id}`}>{repo.repo.name}</li>
				)}
				<hr />
				{props.pullRequestsEventsURLs.map(
					(repo) =>
					<li key={`repo-prEventUrl-${repo.id}`}>state: {repo.state}</li>
				)}
			</ul>
		</div>
	)
}

export default PullRequests;