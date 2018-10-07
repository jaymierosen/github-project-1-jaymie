import React from "react";
//import Status from "./Status";

const PullRequests = props => {
	return (
		<div className="pull-requests">
			<ul>
			{props.events.map((item) => {
				//console.log(item.repo.id)
				return <p>{item.repo.id}</p>
			})}
			</ul>
		</div>
	)
}

export default PullRequests;