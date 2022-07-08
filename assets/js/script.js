













var imdbCode = "tt8009428"

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',

		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
    }
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + imdbCode
+ '&source=imdb&country=us', options)

		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

fetch('https://movie-database-alternative.p.rapidapi.com/?s=American%20Psycho&r=json&page=1', options)

	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));