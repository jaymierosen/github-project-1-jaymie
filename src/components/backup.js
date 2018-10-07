this.getGithubUser(this.state.username, this.state.token)
		.then(res => res.json())
		.then((events) => {
			// filter only ForkEvents
			const forkEvents = events.filter((event) => event.type === "ForkEvent");
			// filter only PullRequestEvent
			const pullRequestsEvents = events.filter(event => event.type === 'PullRequestEvent');
			const pullRequestsEventsURLs = pullRequestsEvents.map((pr) => {
				//return console.log(pr.payload.pull_request.url)
				return fetch(pr.payload.pull_request.url)
				.then(response => response.json())
				.then((pr) => {
					console.log(pr)
					//return pr
				});
			})
			this.setState({
				forkEvents: forkEvents,
				pullRequestsEvents: pullRequestsEvents,
				pullRequestsEventsURLs: pullRequestsEventsURLs,
				loggedin: true
			})
		})