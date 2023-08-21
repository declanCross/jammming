import "./App.css";
import React, { useState } from "react";
import ChangeHeader from "./components/ChangeHeader";
import SearchBar from "./components/SearchBar";
import SpotifyAuthorize from "./components/SpotifyAuthorize";
import SearchResults from "./components/SearchResults";

function App() {
	const [searchInput, setSearchInput] = useState("");

	return (
		<div className="App">
			<header className="App-header">
				<h1>Jammmin</h1>
			</header>
			<div className="App-header-gradient">
				<ChangeHeader />
			</div>
			<main className="App-main">
				<SearchBar setSearchInput={setSearchInput} />
				<SpotifyAuthorize />
				<div className="App-main-results">
					<SearchResults searchInput={searchInput} />
				</div>
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
