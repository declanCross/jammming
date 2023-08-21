import "./App.css";
import React, { useState } from "react";
import ChangeHeader from "./components/ChangeHeader";
import SearchBar from "./components/SearchBar";
import SpotifyAuthorize from "./components/SpotifyAuthorize";
import SearchResults from "./components/SearchResults";
import SpotifySearch from "./components/SpotifySearch";

function App() {
	const [searchInput, setSearchInput] = useState("");
	const [token, setToken] = useState(null);
	const [results, setResults] = useState([]);

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
				<SpotifyAuthorize token={token} setToken={setToken} />
				<SpotifySearch
					token={token}
					results={results}
					setResults={setResults}
				/>
				<div className="App-main-results">
					<SearchResults searchInput={searchInput} />
				</div>
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
