input = $("#input");
Search = input.val();

// function to add %20 inbetween spaces of searchs

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=%3CREQUIRED%3E&r=json&page=1', options)
	.then(response => response.json())
	.then(response => console.log(response))
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