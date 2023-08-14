import React from "react";
import "./components_styles/SearchResults.css";
import Tracklist from "./Tracklist";

export default function SearchResults() {
	return (
		<>
			<div className='container'>
				<div className='search-results-container'>
					SearchResults
					<Tracklist />
				</div>
			</div>
		</>
	);
}
