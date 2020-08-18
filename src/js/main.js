let getTrends = function () {
	const GIPHY_API = 'https://api.giphy.com/v1/gifs/trending?api_key=' + GIPHY_API_KEY + '&rating=G&';

	axios.get(GIPHY_API)
		.then(function (response) {
			showTrends(response.data)
		})
		.catch(function (error) {
			console.warn(error);
		})
}


let showTrends = function (data) {
	console.log(data)
	// you work here
}


// Get your own Giphy API account, and get an API key. Put it in secret.js. 
// Call getTrends() to make the request to Giphy. 
// When it comes back, it will call showTrends for you.
// Put your logic for showing the content in showTrends().