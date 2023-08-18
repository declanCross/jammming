import React from "react";
import "../components_styles/SaveToSpotifyButton.css";

export default function SaveToSpotifyButton(props) {
	return (
		<>
			<input className="SaveToSpotifyButton" type="button" value="Save to Spotify" onClick={props.saveToSpotify} ></input>
		</>
	);
}
