import React from "react";
import "../components_styles/RemoveFromPlaylistButton.css";

function RemoveFromPlaylistButton(props) {
	return (
		<input
			type="button"
			className="removeFromPlaylistButton"
			value="-"
			onClick={props.removeTrackFromPlaylist}
		></input>
	);
}

export default RemoveFromPlaylistButton;
