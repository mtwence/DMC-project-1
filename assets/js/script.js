var input = $("#input");
var form = $("#form");
var streamName = $("#name")
var movieInput = "Morbius";

// function to add %20 inbetween spaces of searchs for input into MDA API
form.on("submit", function (x) {
	x.preventDefault();
	var search = input.val();
	
	var rep = / /gi;
	var movieInput = search.replace(rep, "%20");
	console.log(movieInput)
});

// Fetch request for Movie Database Alternative 
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=' + movieInput + '&r=json&page=1', options)
	.then(function (response) {
		return response.json();
	}).then(function (data) {
		console.log(data);
		var IDstorage = []; // Array for storing IDs
		for (var i = 0; i < data.Search.length-1; i++) {
			//Image link to the poster
			var poster = data.Search[i].Poster;
			console.log(poster);

			//Movie title
			var title = data.Search[i].Title;
			console.log("Title: " + title);
			//Release year
			var year = data.Search[i].Year;
			console.log("Year: " + year);

			//Critical imdbID
			var imdbID = data.Search[i].imdbID;
			IDstorage.push(imdbID);
			//console.log("ID: "+imdbID);
		}
		console.log(IDstorage);

		const options1 = {
			method: 'GET',
			headers: {
				'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
				'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
			}
		};
		
		fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + IDstorage[0] + '&source=imdb&country=us', options1)
			.then(function (res) {
				return res.json();
			}).then(function (data) {
				console.log(data);
				for (var i = 0; i < data.collection.locations.length-1; i++) {
					var streamName = data.collection.locations[i].display_name;
					console.log(streamName);
					var icon = data.collection.locations[i].icon;
					console.log(icon);
					var link = data.collection.locations[i].url;
					console.log(link);
				}
			})
	})
	.catch(err => console.error(err));
<<<<<<< HEAD
=======



>>>>>>> b48c36419f8c471f92fe3a168f56ac9fc10d3285
