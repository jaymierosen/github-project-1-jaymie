import React from "react";

const Status = props => {
	return (
		<div>
			{props.events.map((event, i) => {
				if (event.type === "PullRequestEvent") {
					return <React.Fragment>
							<p key={`status-${i}`}>{event.status}</p>
						</React.Fragment>
				} else {
					return null;
				}
			})}
		</div>
	);
};

export default Status;

