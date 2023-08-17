import React from "react";
import "./components_styles/Track.css";
import AddToPlaylistButton from "./buttons/AddToPlaylistButton";
import RemoveFromPlaylistButton from "./buttons/RemoveFromPlaylistButton";

export default function Track(props) {
	return (
		<>
			<div className="track-container">
				<div className="album-container">
					<img src={props.albumArt} alt=""></img>
				</div>
				<div className="info-container">
					<h3>{props.name}</h3>
					<h5>
						{props.artist} | {props.album}
					</h5>
				</div>
				{props.list === "results" ? (
					<AddToPlaylistButton
						addTrackToPlaylist={() =>
							props.addTrackToPlaylist({
								name: props.name,
								artist: props.artist,
								album: props.album,
								list: "playlist",
							})
						}
					/>
				) : (
					<RemoveFromPlaylistButton />
				)}
			</div>
		</>
	);
}
