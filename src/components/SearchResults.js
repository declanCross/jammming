import React from "react";
import "./components_styles/ResultsContainer.css";
import Tracklist from "./Tracklist";

export default function SearchResults() {
	return (
		<>
			<div className="background-container">
				<div className="results-container">
					<div className="results-header">
						<h2>Results</h2>
					</div>
					<Tracklist />
				</div>
			</div>
		</>
	);
}
