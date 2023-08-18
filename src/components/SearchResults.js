import React, { useState } from "react";
import "./components_styles/ResultsContainer.css";
import Tracklist from "./Tracklist";
import "./components_styles/ResultsContainer.css";
import Playlist from "./Playlist";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";

export default function SearchResults(props) {
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState("");

	const searchInput = props.searchInput;

	const addTrackToPlaylist = (track) => {
		setPlaylist((prevPlaylist) => {
			const trackKeyNames = prevPlaylist.map((t) => t.keyName);
			if (trackKeyNames.includes(track.keyName)) {
				return prevPlaylist;
			} else {
				return [...prevPlaylist, track];
			}
		});
	};

	const removeTrackFromPlaylist = (track) => {
		setPlaylist((prevPlaylist) => [
			...prevPlaylist.filter(
				(playlistTrack) => playlistTrack.keyName !== track.keyName
			),
		]);
	};

	return (
		<>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<h2>Results</h2>
					</div>
					<div className="tracks-container">
						<Tracklist
							searchInput={searchInput}
							addTrackToPlaylist={addTrackToPlaylist}
						/>
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
							setPlaylistName={setPlaylistName}
							onChange={(event) => {
								setPlaylistName(event.target.value);
							}}
						></input>
						<SaveToSpotifyButton />
					</div>
					<div className="tracks-container">
						<Playlist
							playlistName={playlistName}
							playlist={playlist}
							removeTrackFromPlaylist={removeTrackFromPlaylist}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
