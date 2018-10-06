import React from "react";

const ReposList = props => {
  return (
    <React.Fragment>
      <h2>My Forked Repos</h2>
      <div className="fork">
        {props.repos.map(
          (repo, i) =>
            repo.type === "ForkEvent" ? (
              <React.Fragment>
                <hr />
                <h3>Repo name: {repo.repo.name}</h3>
                <h4>
                  <a href={repo.repo.url}>Repo base URL</a>
                </h4>
              </React.Fragment>
            ) : null
        )}
      </div>
      <h2>My PullRequests</h2>
      <p>{props.username}</p>
      <div className="pr">
        {props.repos.map(
          (repo, i) =>
            repo.type === "PullRequestEvent" ? (
              <React.Fragment>
                <div>
                  mapping over pullrequest url
                  {props.pullRequests.map(item => {
                    return <p>{item.id}</p>;
                  })}
                </div>
                <hr />
                <h3>Repo name: {repo.repo.name}</h3>
                {/* <p>{repo.payload.pull_request.url}</p>*/}
                <h4>
                  <a href={repo.payload.pull_request.base.repo.html_url}>
                    Repo base URL
                  </a>
                </h4>
                <h4>PR title: {repo.payload.pull_request.title}</h4>
                <h4>
                  <a href={repo.payload.pull_request.html_url}>PR URL</a>
                </h4>
                {repo.payload.pull_request.state === "open" ? (
                  <h4 style={{ color: "red" }}>
                    PR state: {repo.payload.pull_request.state}
                  </h4>
                ) : (
                  <h4 style={{ color: "green" }}>
                    PR state: {repo.payload.pull_request.state}
                  </h4>
                )}
              </React.Fragment>
            ) : null
        )}
      </div>
    </React.Fragment>
  );
};

export default ReposList;
