var button = document.querySelector("button");
//var isOrange = false;

/*button.addEventListener("click", function (){
	if(isOrange){
		document.body.style.background = "white";
		isOrange = false;
	} else{
		document.body.style.background = "orange";
		isOrange = true;
	}

	//A shortcut with isOrange true or false is doing this: isOrange = !isOrange;
	//add some logic
	//if white
		//make it orange
	//else 
	//make it white

	
	//document.body.style.background = "orange";
	button.style.background = "purple";
	//console.log("Someone clicked the button");
});*/

 //Another solution
 button.addEventListener("click", function (){
		document.body.classList.toggle = ("orange");
	});
