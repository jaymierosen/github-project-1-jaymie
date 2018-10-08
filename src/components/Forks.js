import React from "react";
import styled from 'tachyons-components';

const DL = styled('dl')`f6 lh-title mv2`;
const DT = styled('dd')`sans-serif dib b`;
const DD = styled('dt')`sans-serif dib ml2 gray`;
const Link = styled('a')`f6 dib link mid-gray dim`;
const Section = styled('section')`mt4`;

export default ({ events }) => {
	return (
		<div className="forks">
			{events.map((event, i) => {
				if (event.type === "ForkEvent") {
					return <Section key={`fork-${i}`}>
						<DL>
							<DT>Repo name:</DT>
							<DD key={`forkEvent-${i}`}><Link href={event.payload.forkee.html_url}>{event.repo.name}</Link></DD>
						</DL>
						<DL>
							<DT>Repo URL:</DT>
							<DD key={`forkEventURL-${i}`}><Link href={event.payload.forkee.html_url}>Fork URL</Link></DD>
						</DL>
						</Section>
				} else {
					return null;
				}
			})}
		</div>
	)
}