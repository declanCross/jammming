import "./App.css";
import ChangeHeader from "./components/ChangeHeader";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import PlaylistResults from "./components/PlaylistResults";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Jammmin</h1>
			</header>
			<main className="App-main">
				<ChangeHeader />
				<SearchBar />
				<SearchResults />
				<PlaylistResults />
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
