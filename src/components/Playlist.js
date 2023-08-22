import React from "react";
import Track from "./Track";

export default function Playlist({ playlist, removeTrackFromPlaylist }) {
	return (
		<>
			<div>
				{playlist.map((track) => (
					<div className="results-track">
						<Track
							key={track.id}
							id={track.id}
							uri={track.uri}
							name={track.name}
							artist={track.artists[0].name}
							album={track.album.name}
							albumArt={track.album.images[1].url}
							list="playlist"
							removeTrackFromPlaylist={removeTrackFromPlaylist}
						/>
					</div>
				))}
			</div>
		</>
	);
}
