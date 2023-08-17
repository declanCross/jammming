import React, { useState } from "react";
import "./components_styles/ResultsContainer.css";
import Tracklist from "./Tracklist";
import "./components_styles/ResultsContainer.css";
import Playlist from "./Playlist";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";

export default function SearchResults() {
	const [playlist, setPlaylist] = useState([]);

	const addTrackToPlaylist = (track) => {
		setPlaylist((prevPlaylist) => [...prevPlaylist, track]);
	};
	return (
		<>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<h2>Results</h2>
					</div>
					<div className="tracks-container">
						<Tracklist addTrackToPlaylist={addTrackToPlaylist} />
					</div>
				</div>
			</div>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<input
							className="playlist-name"
							type="text"
							placeholder="Name your playlist"
						></input>
						<SaveToSpotifyButton />
					</div>
					<div className="tracks-container">
						<Playlist playlist={playlist} />
					</div>
				</div>
			</div>
		</>
	);
}
