


{props.pullRequestsEvents.map(
				(repo, i) =>
					repo.type === "PullRequestEvent" ? (
					<div key={`pr-${repo.id}`}>
						<hr />
						<h3 key={`pr-name-${repo.id}`}>Repo name: {repo.repo.name}</h3>
						<h4 key={`pr-url-name-${repo.id}`}>
							<a key={`pr-url-${repo.id}`} href={repo.payload.pull_request.base.repo.html_url}>Repo base URL</a>
						</h4>
						<h4 key={`pr-title-${repo.id}`}>Pull Request Title: {repo.payload.pull_request.title}</h4>
						{/* separate api call for status? */}
						<Status pullRequests={props.pullRequests} />
					</div>
				) : null
			)}