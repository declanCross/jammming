import React from "react";
import Track from "./Track";
import ApiResults from "./ApiResults";
import albumArt from "./components_styles/images/what_if_its_me.jpg";

export default function Tracklist(props) {
	return (
		<>
			<div>
				{ApiResults.map((track) => (
					<div className="results-track">
						<Track
							keyName={track.name + track.artist}
							name={track.name}
							artist={track.artist}
							album={track.album}
							albumArt={albumArt}
							list="results"
							addTrackToPlaylist={props.addTrackToPlaylist}
						/>
					</div>
				))}
			</div>
		</>
	);
}
