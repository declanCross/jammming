import React from "react";
import Track from "./Track";
import albumArray from "./dummyTracks";
import albumArt from "./components_styles/images/what_if_its_me.jpg";

export default function Tracklist() {
	return (
		<>
			<div>
				{albumArray.map((track) => (
					<div className="results-track">
						<Track
						name={track.name}
						artist={track.artist}
						album={track.album}
						albumArt={albumArt}
						list="results"
						/>
					</div>
				))}
			</div>
		</>
	);
}
