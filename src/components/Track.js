import React from "react";
import "./components_styles/Track.css";
import albumImage from "./components_styles/images/image-wireframe-mobile.png";

export default function Track() {
	return (
		<>
			<div className="track-container">
				<div className="album-container">
					<img src={albumImage} alt=""></img>
				</div>
				<div className="info-container">
					<h3>Song name</h3>
					<h5>Artist | Album</h5>
				</div>
			</div>
		</>
	);
}
