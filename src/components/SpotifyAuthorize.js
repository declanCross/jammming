import React, { useEffect } from "react";

const SpotifyAuthorize = ({ token, setToken }) => {
	const stateKey = "spotify_auth_state";

	const generateRandomString = (length) => {
		let text = "";
		const possible =
			"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
		for (let i = 0; i < length; i++) {
			text += possible.charAt(Math.floor(Math.random() * possible.length));
		}
		return text;
	};

	const handleAuth = () => {
		const client_id = "5d7811d8349c47e4a018459905b57f82";
		const redirect_uri =
			"https://jammmin-spotify-playlist-creator.netlify.app/";
		const state = generateRandomString(16);
		localStorage.setItem(stateKey, state);
		const scope =
			"user-read-private user-read-email playlist-modify-public playlist-modify-private";
		let url = "https://accounts.spotify.com/authorize";
		url += "?response_type=token";
		url += "&client_id=" + encodeURIComponent(client_id);
		url += "&scope=" + encodeURIComponent(scope);
		url += "&redirect_uri=" + encodeURIComponent(redirect_uri);
		url += "&state=" + encodeURIComponent(state);
		window.location = url;
	};

	useEffect(() => {
		const hash = window.location.hash
			.substring(1)
			.split("&")
			.reduce(function (initial, item) {
				if (item) {
					var parts = item.split("=");
					initial[parts[0]] = decodeURIComponent(parts[1]);
				}
				return initial;
			}, {});
		window.location.hash = "";
		let _token = hash.access_token;
		if (_token) {
			setToken(_token);
			// use the access token to make requests to the Spotify Web API
		}
	}, [setToken]);

	return (
		<div>
			<button onClick={handleAuth}>Log in to Spotify</button>
			{/* {token && <p>Access token: {token}</p>} */}
		</div>
	);
};

export default SpotifyAuthorize;

// In this example, we have a `SpotifyAuthorize` component that renders a button for authorizing with Spotify. When the user clicks the "Authorize with Spotify" button, the `handleAuth` function is called, which constructs the authorization URL using the code you provided and then uses `window.location` to redirect the user to that URL. Once the user has authorized your application and been redirected back to your `redirect_uri`, the `useEffect` hook is called, which extracts the access token from the URL fragment using JavaScript and stores it in the component's state using the `setToken` function. You can then use this access token to make requests to the Spotify Web API on behalf of the user.

// I hope this example helps you understand how to use the code you provided in your React application! Let me know if you have any other questions. 😊

//words that make AI friend respond with a working answer
// I tried the Spotify Developer Documentation. All they provide is the example code I provided earlier. Please help, I just want to know how to USE it in my application.
