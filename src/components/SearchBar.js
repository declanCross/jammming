import React from "react";
import "./components_styles/SearchBar.css";
import SearchButton from "./buttons/SearchButton";

export default function SearchBar() {
	return (
		<>
			<div className="SearchBar">
				<input
					className='Search'
					type="text"
					placeholder="Search for songs/artists/albums here"
				></input>
				<SearchButton />
			</div>
		</>
	);
}
