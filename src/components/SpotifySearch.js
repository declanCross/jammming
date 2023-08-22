// To make your search bar return results from searching through the Spotify API tracks from Spotify's database of songs, you can use the Spotify Web API's Search endpoint¹. This endpoint allows you to search for content within the Spotify catalog, including tracks, by sending a GET request to `https://api.spotify.com/v1/search` with the appropriate query parameters.

// Here is an example of how you could implement a search bar in a React component that returns track results from the Spotify API:

import React, { useState } from "react";
import "./components_styles/SpotifySearch.css";

const SpotifySearch = ({ token, results, setResults }) => {
	const [query, setQuery] = useState("");
	// const [results, setResults] = useState([]);

	const handleSearch = async (event) => {
		event.preventDefault();
		const response = await fetch(
			`https://api.spotify.com/v1/search?q=${query}&type=track`,
			{
				headers: {
					Authorization: `Bearer ${token}`,
				},
			}
		);
		const data = await response.json();
		setResults(data.tracks.items);
	};

	return (
		<div>
			<form onSubmit={handleSearch}>
				<input
					className="search"
					type="text"
					value={query}
					onChange={(event) => setQuery(event.target.value)}
					placeholder="Search for songs/artists/albums here"
				/>
				<button className="search-button" type="submit">
					Search
				</button>
			</form>
		</div>
	);
};

export default SpotifySearch;

// In this example, we have a `SpotifySearch` component that takes a `token` prop, which is the access token obtained through the authorization process. The component renders a form with an input field for the search query and a "Search" button. When the user submits the form by clicking the "Search" button or pressing enter, the `handleSearch` function is called, which sends a GET request to the Spotify API's Search endpoint with the `query` and `type=track` parameters. The results are then stored in the component's state using the `setResults` function and displayed in a list.

// I hope this example helps you understand how to implement a search bar that returns track results from the Spotify API! Let me know if you have any other questions. 😊
