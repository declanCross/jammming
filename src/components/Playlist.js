import React from "react";
import Track from "./Track";
import albumArt from "./components_styles/images/what_if_its_me.jpg";

export default function Playlist(props) {
	const playlistName = props.playlistName;
	const playlist = props.playlist;

	return (
		<>
			<div>
				{playlist.map((track) => (
					<div className="results-track">
						<Track
							uri={track.uri}
							name={track.name}
							artist={track.artist}
							album={track.album}
							albumArt={albumArt}
							list="playlist"
							removeTrackFromPlaylist={props.removeTrackFromPlaylist}
						/>
					</div>
				))}
			</div>
		</>
	);
}
