import React from "react";

function SavedPlaylists(props) {
	const savedPlaylists = props.savedPlaylists;
	const showSavedPlaylist = props.showSavedPlaylist;

	return (
		<div>
			{savedPlaylists.map((playlistInfo) => (
				<button onClick={() => showSavedPlaylist(playlistInfo)}>
					<h3>{playlistInfo.playlistName}</h3>
				</button>
			))}
		</div>
	);
}

export default SavedPlaylists;
