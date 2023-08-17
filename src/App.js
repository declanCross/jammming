import "./App.css";
import ChangeHeader from "./components/ChangeHeader";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Jammmin</h1>
			</header>
			<div className="App-header-gradient">
				<ChangeHeader />
			</div>
			<main className="App-main">
				<SearchBar />
				<div className="App-main-results">
					<SearchResults />
				</div>
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
