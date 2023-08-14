import React from "react";
import "./components_styles/ResultsContainer.css";
import Playlist from "./Playlist";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";

export default function PlaylistResults() {
	return (
		<>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<input className="playlist-name" type="text" placeholder="Name your playlist"></input>
						<SaveToSpotifyButton />
					</div>
					<Playlist />
				</div>
			</div>
		</>
	);
}
