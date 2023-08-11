import React from "react";
import SaveToSpotifyButton from "./buttons/SaveToSpotifyButton";
import Track from "./Track";

export default function Playlist() {
	return (
		<>
			<div>Playlist</div>
			<Track />
			<SaveToSpotifyButton />
		</>
	);
}
