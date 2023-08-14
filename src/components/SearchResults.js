import React from "react";
import "./components_styles/SearchResults.css";
import Tracklist from "./Tracklist";

export default function SearchResults() {
	return (
		<>
			<div className='search-background-container'>
				<div className='search-results-container'>
					<h2>Results</h2>
					<Tracklist />
				</div>
			</div>
		</>
	);
}
