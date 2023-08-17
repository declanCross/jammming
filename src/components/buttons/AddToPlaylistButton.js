import React from "react";
import "../components_styles/AddToPlaylistButton.css";

function AddToPlaylistButton(props) {
	return (
		<input
			type="button"
			className="addToPlaylistButton"
			value="+"
			onClick={props.addTrackToPlaylist}
		></input>
	);
}

export default AddToPlaylistButton;
