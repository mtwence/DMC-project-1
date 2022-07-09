var input = $("#input");
var form = $("#form");

var movieInput = "American Psycho";

// function to add %20 inbetween spaces of searchs for input into MDA API
form.on("submit", function (x) {
    x.preventDefault();
	var search = input.val();
	var rep = / /gi;
	movieInput = search.replace(rep, "%20");
	console.log(movieInput)
});

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s='+movieInput+'&r=json&page=1', options)
	.then(function(response){
		return response.json();
	}).then(function (data) {
		console.log(data);
		for(var i=0;i<data.Search.length-1;i++){
			var poster = data.Search[i].Poster;
			console.log(poster);

			var title = data.Search[i].Title;
			console.log("Title: "+title);

			var year = data.Search[i].Year;
			console.log("Year: "+year);
		}
	})
	.catch(err => console.error(err));

var imdbCode = []

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + imdbCode + '&source=imdb&country=us', options1)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));