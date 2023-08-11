import "./App.css";
import SearchBar from "./components/SearchBar";
import ChangingHeader from "./components/ChangingHeader";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<h1>Jammmin</h1>
			</header>
			<main className="App-main">
				<ChangingHeader />
				<SearchBar />
			</main>
			<footer className="App-footer"></footer>
		</div>
	);
}

export default App;
