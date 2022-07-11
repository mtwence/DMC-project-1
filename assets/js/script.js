var movieInput;
var submitButton = document.querySelector("#submit-button");

submitButton.addEventListener("click",function(event){
	event.preventDefault();
	movieInput = document.querySelector("#movie-input").value;
	console.log(movieInput);
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
				var imageDisplay = document.getElementById(i+1).children[0].children[0].children[0].children[0].children[0];
				imageDisplay.setAttribute("src",poster);
				//Movie title
				var title = data.Search[i].Title;
				var titleDisplay = document.getElementById(i+1).children[0].children[0].children[1].children[1];
				titleDisplay.textContent = title;
				//Release year
				var year = data.Search[i].Year;
				var yearDisplay = document.getElementById(i+1).children[0].children[0].children[1].children[3];
				yearDisplay.textContent = "Release year: "+year;
				//Critical imdbID
				var imdbID = data.Search[i].imdbID;
				IDstorage.push(imdbID);
			}
			console.log(IDstorage);

			const options1 = {
				method: 'GET',
				headers: {
					'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
					'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
				}
			};
			// Fetch request to utelly API which gathers data on movie availability on streaming platforms| for loop to add all the imdb codes pushed to idStorage
			for (var j = 0; j < IDstorage.length; j++) {
				fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + IDstorage[j] + '&source=imdb&country=us', options1)
					.then(function (res) {
						return res.json();
					}).then(function (data) {
						console.log(data);
						// for loop to gather streaming platform name, icon, and link to watch/buy 
						for (var i = 0; i < data.collection.locations.length - 1; i++) {
							var streamName = data.collection.locations[i].display_name;
							console.log(streamName);
							
							var icon = data.collection.locations[i].icon;
							console.log(icon);
							
							var link = data.collection.locations[i].url;
							console.log(link);
						}
					})
			}
		})
})

/*var input = $("#input");
var form = $("#form");
var streamName = $("#name")
//var movieInput = "Ba";

// function to add %20 inbetween spaces of searchs for input into MDA API
form.on("submit", function (x) {
	x.preventDefault();
	var search = input.val();

	var rep = / /gi;
	var movieInput = search.replace(rep, "%20");
	console.log(movieInput)


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
		for (var i = 0; i < data.Search.length - 1; i++) {
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
		// Fetch request to utelly API which gathers data on movie availability on streaming platforms| for loop to add all the imdb codes pushed to idStorage
		for (var j = 0; j < IDstorage.length; j++) {
			fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + IDstorage[j] + '&source=imdb&country=us', options1)
				.then(function (res) {
					return res.json();
				}).then(function (data) {
					console.log(data);
					// for loop to gather streaming platform name, icon, and link to watch/buy 
					for (var i = 0; i < data.collection.locations.length - 1; i++) {
						var streamName = data.collection.locations[i].display_name;
						console.log(streamName);
						var icon = data.collection.locations[i].icon;
						console.log(icon);
						var link = data.collection.locations[i].url;
						console.log(link);
					}
				})
		}
	})
});*/
