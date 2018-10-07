import React from "react";

const Forks = props => {
	return (
		<div className="forks">
			{props.forkEvents.map(
				(repo, i) =>
					repo.type === "ForkEvent" ? (
					<div key={`fork-${repo.id}`}>
						<hr />
						<h3 key={`fork-name-${repo.id}`}>Repo name: {repo.repo.name}</h3>
						<h4 key={`fork-url-name-${repo.id}`}>
							<a key={`fork-url-${repo.id}`} href={repo.payload.forkee.html_url}>Forked URL</a>
						</h4>
					</div>
				) : null
			)}
		</div>
	)
}

export default Forks;