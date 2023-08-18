import React from "react";

function SavedPlaylists(props) {
	const savedPlaylists = props.savedPlaylists;

	return (
		<div>
			{savedPlaylists.map((playlistInfo) => (
				<h3>{playlistInfo.playlistName}</h3>
			))}
		</div>
	);
}

export default SavedPlaylists;
