//Create an array of movie objects. Each movie should have a title, rating, and hasWatched properties. Iterate through the array and print out something that looks like:

var movie= [
{
	title: "IN Brugues",
	hasWatched: true,
	rating: 5
},

{
	title: "Frozen",
	hasWatched: false,
	rating: 4.5
},
{
	title: "Les Miserable",
	hasWatched: false,
	rating: 4
}
]
//En algun momento arreglar el por que no funciono con el for loop. Cuando aprenda un poco m'as volver a revisar
/*	for(i = 0; i < movie.length; i++){
	var result = "You have ";
	if(movie[i].hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie[i].title + "\" - ";
	result += movie[i].rating + " stars";
	//return result;
	//console.log(result);
};
console.log(buildString(movie));
}*/

// This is the way to solve it with forEach loop

function buildString(movie){	
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;
}

console.log(buildString(movie));

	
movie.forEach(function(movie){
	console.log(buildString(movie));
});


 //You have watched "IN Brugues" - 5 stars
//You have not seen "Frozen" - 4.5 stars
//You have not seen "Les Miserable" - 4 stars































/*movies.forEach(function(movie)){
	var result = "You have ";
	if(movie.hasWatched){
		result += "watched ";
	} else {
		result += "not seen ";
	}
	result += "\"" + movie.title + "\" - ";
	result += movie.rating + " stars";
	return result;

	console.log(result)
}*/