import React from "react";
import Track from "./Track";

export default function Tracklist({ results, addTrackToPlaylist }) {
	return (
		<>
			<div>
				{results.map((track) => (
					<div className="results-track">
						<Track
							key={track.id}
							uri={track.uri}
							name={track.name}
							artist={track.artists[0].name}
							album={track.album.name}
							albumArt={track.album.images[1].url}
							list="results"
							addTrackToPlaylist={addTrackToPlaylist}
						/>
					</div>
				))}
			</div>
		</>
	);
}
