import React from "react";
import Forks from "./Forks";
import PullRequests from "./PullRequests";

const ReposList = props => {
	return (
		<div className="repos-list">
			<h2>My Forked Repos</h2>
			<section>
				<Forks forkEvents={props.forkEvents} />
			</section>
			<h2>My PullRequests</h2>
			<section>
				<PullRequests pullRequestsEvents={props.pullRequestsEvents} pullRequestsEventsURLs={props.pullRequestsEventsURLs} />
			</section>
		</div>
	);
};

export default ReposList;
