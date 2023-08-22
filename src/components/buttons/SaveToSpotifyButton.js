import React from "react";
import "../components_styles/SaveToSpotifyButton.css";

export default function SaveToSpotifyButton({ saveToSpotify }) {
	return (
		<>
			<input
				className="SaveToSpotifyButton"
				type="button"
				value="Save to Spotify"
				onClick={saveToSpotify}
			></input>
		</>
	);
}
