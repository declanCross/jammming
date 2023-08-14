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
						<h2>Playlist</h2>
						<SaveToSpotifyButton />
					</div>
					<Playlist />
				</div>
			</div>
		</>
	);
}
