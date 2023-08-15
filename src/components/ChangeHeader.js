import React from "react";

export default function ChangeHeader() {
	const jammminLyrics = [
		"We're jammmin",
		"I hope you like jammmin too",
		"Jammmin 'till the jam is through",
		"We're jammmin in the name of the Lord",
		"We're jammmin right straight from yard",
		"Jam down hope you're jammmin too",
		"We're jammmin, we're jammmin, we're jammmin, we're jammmin",
	];
	const jammminLyric =
		jammminLyrics[Math.floor(Math.random() * jammminLyrics.length)];
	return (
		<>
			<div>"{jammminLyric}"</div>
		</>
	);
}
