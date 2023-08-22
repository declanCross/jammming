import React, { useState } from "react";
import "./components_styles/ResultsContainer.css";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";

export default function SearchResults({ results, token }) {
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState("");
	const [savedPlaylists, setSavedPlaylists] = useState([]);
	//
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
	//
	const removeTrackFromPlaylist = (track) => {
		setPlaylist((prevPlaylist) => [
			...prevPlaylist.filter(
				(playlistTrack) => playlistTrack.uri !== track.uri
			),
		]);
	};
	//
	async function saveToSpotify(playlist, playlistName) {
		const trackUris = Object.keys(playlist).map((key) => playlist[key].uri);
		console.log(trackUris);
		console.log(playlist);
		// Obtain user ID
		fetch("https://api.spotify.com/v1/me", {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		})
			.then((response) => response.json())
			.then(async (data) => {
				const userId = data.id;
				// Create a new playlist
				const response = await fetch(
					`https://api.spotify.com/v1/users/${userId}/playlists`,
					{
						method: "POST",
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							name: playlistName,
							public: false,
						}),
					}
				);
				const playlistData = await response.json();
				const playlistId = playlistData.id;
				// Add tracks to the new playlist
				await fetch(
					`https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
					{
						method: "POST",
						headers: {
							Authorization: `Bearer ${token}`,
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							uris: trackUris,
						}),
					}
				);
				console.log(
					`Playlist saved: ${playlistName} consisting of ${playlist}`
				);
				const playlistInfo = {
					playlist: playlist,
					playlistName: playlistName,
				};
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
			});
	}
	//
	const showSavedPlaylist = (playlistInfo) => {
		setPlaylist(playlistInfo.playlist);
		setPlaylistName(playlistInfo.playlistName);
	};
	//
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
							onChange={(event) => {
								setPlaylistName(event.target.value);
							}}
						></input>
						<input
							className="SaveToSpotifyButton"
							type="button"
							value="Save to Spotify"
							onClick={() => saveToSpotify(playlist, playlistName)}
						></input>
					</div>
					<div className="tracks-container">
						<Playlist
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
						{savedPlaylists.map((playlistInfo) => (
							<button onClick={() => showSavedPlaylist(playlistInfo)}>
								<h3>{playlistInfo.playlistName}</h3>
							</button>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
