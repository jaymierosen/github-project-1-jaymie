import React from "react";

const Forks = props => {
	return (
		<div className="forks">
			<ul>
				{props.events.map((event, i) => {
					if (event.type === "ForkEvent") {
						return <React.Fragment key={`fork-${i}`}>
							<hr />
							<li key={`forkEvent-${i}`}><a href={event.payload.forkee.html_url}>{event.repo.name}</a></li>
							<li key={`forkEventURL-${i}`}><a href={event.payload.forkee.html_url}>Fork URL</a></li>
							</React.Fragment>
					} else {
						return null;
					}
				})}
			</ul>
		</div>
	)
}

export default Forks;