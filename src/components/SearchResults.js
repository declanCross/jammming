import React, { useState } from "react";
import "./components_styles/ResultsContainer.css";
import ApiResults from "./ApiResults";
import Tracklist from "./Tracklist";
import Playlist from "./Playlist";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";
import SavedPlaylists from "./SavedPlaylists";

export default function SearchResults(props) {
	const [playlist, setPlaylist] = useState([]);
	const [playlistName, setPlaylistName] = useState("");
	const [savedPlaylists, setSavedPlaylists] = useState([]);

	const searchInput = props.searchInput.toLowerCase();

	const searchTracks = ApiResults.filter((track) => {
		if (!searchInput) {
			return undefined;
		} else {
			return (
				track.name.toLowerCase().includes(searchInput) ||
				track.artist.toLowerCase().includes(searchInput) ||
				track.album.toLowerCase().includes(searchInput)
			);
		}
	});

	const addTrackToPlaylist = (track) => {
		setPlaylist((prevPlaylist) => {
			const trackUris = prevPlaylist.map((t) => t.uri);
			if (trackUris.includes(track.uri)) {
				return prevPlaylist;
			} else {
				return [...prevPlaylist, track];
			}
		});
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

	return (
		<>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<h2>Results</h2>
					</div>
					<div className="tracks-container">
						<Tracklist
							searchTracks={searchTracks}
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
						<SavedPlaylists savedPlaylists={savedPlaylists} />
					</div>
				</div>
			</div>
		</>
	);
}
