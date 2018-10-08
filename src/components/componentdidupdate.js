  // props before update
  // state before update
  // ** use this when props or state changes **
  componentDidUpdate(prevProps, prevState) {
    //console.log(prevState);
    //console.log(this.state);
    // if loggedin is false
    if (prevState.loggedin !== this.state.loggedin) {
      //console.log(prevState.loggedin);
      //console.log(this.state.loggedin);
      // if loggedin is true
      if (this.state.loggedin) {
        /* this.getGithubFollowing(this.state.profile.followers_url).then(res =>
          res.json().then(data =>
            this.setState({
              followers: data
            })
          )
        ); */
        this.getGithubEvents(this.state.username, this.state.token)
      .then(res => res.json())
      .then(events => {
        const filteredEvents = events
        .filter(
          event => event.type === "ForkEvent" || event.type === "PullRequestEvent"
        );
        return filteredEvents;
      })
      .then(data => {
        const events = data.map(event => {
          if (event.type === "PullRequestEvent") {
            return fetch(event.payload.pull_request.url)
            .then(res => res.json())
            .then(data =>  ({...event, status: data.state, title: data.title, html_url: data.html_url }))
          } else {
            return event
          }
        });
        Promise.all([...events]).then(events => this.setState({ events }));
      })
      // .then(filteredEvents => {
      //   const newfilteredEvents = filteredEvents.map((event) => {
      //     if (event.type === "PullRequestEvent") {
      //       this.getGithubFollowing(event.payload.pull_request.url)
      //       .then(res => res.json())
      //       .then(res => [...this.state.events])
      //     } else {
      //       return this.state.events
      //     }
      //   })
      //   return newfilteredEvents;
      // })
      }
    }
  }