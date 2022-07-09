// var input = $("#input");
// var form = $("#form");
// var streamName = $("#name")
// var

// // function to add %20 inbetween spaces of searchs for input into MDA API
// form.on("submit", function (x) {
//     x.preventDefault();
// 	var search = input.val();
// 	var rep = / /gi;
// 	var movieInput = search.replace(rep, "%20");
// 	console.log(movieInput)


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
// 		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
// 	}
// };

// fetch('https://movie-database-alternative.p.rapidapi.com/?s=' + movieInput + '&r=json&page=1', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));


// });

var imdbCode = ["tt4154796"]

const options1 = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'a341e5528dmshfb626c60584810dp17d30ejsnb83576f61579',
		'X-RapidAPI-Host': 'utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com'
	}
};

fetch('https://utelly-tv-shows-and-movies-availability-v1.p.rapidapi.com/idlookup?source_id=' + imdbCode + '&source=imdb&country=us', options1)
	.then(function (res) {
		return res.json();
	}).then(function (data){
		console.log(data);
		showData(data);
	})
	// .catch(err => console.error(err));
	

function showData() {
	for (let i = 0; i < 6; i++) {
	var streamName = data.collection.locations[i].display_name;
	var icon = data.collection.locations[i].icon;
	console.log(icon);
	var link = data.collection.locations[i].url;
	console.log(link);

	}
}