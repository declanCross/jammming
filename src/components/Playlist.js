import React from "react";
import Track from "./Track";
import albumArt from "./components_styles/images/what_if_its_me.jpg";

export default function Playlist(props) {
	return (
		<>
			<div>
				{props.playlist.map((track) => (
					<div className="results-track">
						<Track
							keyName={track.name + track.artist}
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
