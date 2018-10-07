import React from "react";
import Forks from "./Forks";
import PullRequests from "./PullRequests";

const ReposList = props => {
	return (
		<div className="repos-list">
			<h2>Forks</h2>
			<Forks events={props.events} />
			<h2>PullRequests</h2>
			<PullRequests events={props.events} />
		</div>
	);
};

export default ReposList;
