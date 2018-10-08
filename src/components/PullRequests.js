import React from "react";
//import Status from "./Status";
import styled from 'tachyons-components';

const DL = styled('dl')`f6 lh-title mv2`;
const DT = styled('dd')`sans-serif dib b`;
const DD = styled('dt')`sans-serif dib ml2 gray`;
const DDGreen = styled('dt')`sans-serif dib ml2 green`;
const DDRed = styled('dt')`sans-serif dib ml2 red`;
const Link = styled('a')`f6 dib link mid-gray dim`;
const Section = styled('section')`mt4`;

export default ({ events }) => {
	return (
		<div className="pull-requests">
			<ul>
				{events.map((event, i) => {
					if (event.type === "PullRequestEvent") {
						return <Section key={`pullRequest-${i}`}>
								<DL>
									<DT>Repo name:</DT>
									<DD key={`pullRequestEvent-${i}`}><Link href={event.html_url}>{event.repo.name}</Link></DD>
								</DL>
								<DL>
									<DT>URL:</DT>
									<DD key={`pullRequestEventURL-${i}`}><Link href={event.html_url}>Pull Request URL</Link></DD>
								</DL>
								<DL>
									<DT>Title:</DT>
									<DD key={`pullRequestTitle-${i}`}>{event.title}</DD>
								</DL>
								<DL>
									<DT>Status:</DT>
									{event.status === "closed" ? <DDGreen key={`pullRequestStatus-${i}`}>{event.status}</DDGreen> : <DDRed key={`pullRequestStatus-${i}`}>{event.status}</DDRed>}
								</DL>
							</Section>
					} else {
						return null;
					}
				})}
			</ul>
		</div>
	)
}