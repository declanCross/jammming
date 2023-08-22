import React, { useState } from "react";
import "./components_styles/ResultsContainer.css";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";
import SavedPlaylists from "./SavedPlaylists";

export default function SearchResults({ results, token }) {
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState("");
	const [savedPlaylists, setSavedPlaylists] = useState([]);

	const addTrackToPlaylist = async (track) => {
		const response = await fetch(
			`https://api.spotify.com/v1/tracks/${track.id}`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const data = await response.json();
		setPlaylist((prevPlaylist) => [...prevPlaylist, data]);
	};

	const removeTrackFromPlaylist = (track) => {
		setPlaylist((prevPlaylist) => [
			...prevPlaylist.filter(
				(playlistTrack) => playlistTrack.uri !== track.uri
			),
		]);
	};

	const saveToSpotify = (playlistInfo) => {
		setSavedPlaylists((prevSavedPlaylists) => {
			const savedPlaylistsNames = prevSavedPlaylists.map(
				(sp) => sp.playlistName
			);
			if (savedPlaylistsNames.includes(playlistInfo.playlistName)) {
				alert("This playlist name already exists. Choose another name.");
				return prevSavedPlaylists;
			} else {
				setPlaylist([]);
				setPlaylistName("");
				return [...prevSavedPlaylists, playlistInfo];
			}
		});
	};

	const showSavedPlaylist = (playlistInfo) => {
		setPlaylist(playlistInfo.playlist);
		setPlaylistName(playlistInfo.playlistName);
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
							results={results}
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
							value={playlistName}
							setPlaylistName={setPlaylistName}
							onChange={(event) => {
								setPlaylistName(event.target.value);
							}}
						></input>
						<SaveToSpotifyButton
							saveToSpotify={() =>
								saveToSpotify({
									playlist: playlist,
									playlistName: playlistName,
								})
							}
						/>
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
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<h2>Saved Playlists</h2>
					</div>
					<div className="tracks-container">
						<SavedPlaylists
							savedPlaylists={savedPlaylists}
							showSavedPlaylist={showSavedPlaylist}
						/>
					</div>
				</div>
			</div>
		</>
	);
}
