import React from "react";
//import Status from "./Status";

const PullRequests = props => {
	return (
		<div className="pull-requests">
			<ul>
				{props.events.map((event, i) => {
					if (event.type === "PullRequestEvent") {
						return <React.Fragment key={`pullRequest-${i}`}>
							<hr />
							<li key={`pullRequestEvent-${i}`}><a href={event.html_url}>{event.repo.name}</a></li>
							<li key={`pullRequestEventURL-${i}`}><a href={event.html_url}>Pull Request URL</a></li>
							<li key={`pullRequestTitle-${i}`}>{event.title}</li>
							</React.Fragment>
					} else {
						return null;
					}
				})}
			</ul>
		</div>
	)
}

export default PullRequests;