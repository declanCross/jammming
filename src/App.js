import "./App.css";
import React, { useState } from "react";
import ChangeHeader from "./components/ChangeHeader";
import SpotifyAuthorize from "./components/SpotifyAuthorize";
import SearchResults from "./components/SearchResults";
import SpotifySearch from "./components/SpotifySearch";

function App() {
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
				<SpotifyAuthorize token={token} setToken={setToken} />
				{token && (
					<SpotifySearch
						token={token}
						results={results}
						setResults={setResults}
					/>
				)}
				<div className="App-main-results">
					{token && <SearchResults results={results} token={token} />}
				</div>
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
