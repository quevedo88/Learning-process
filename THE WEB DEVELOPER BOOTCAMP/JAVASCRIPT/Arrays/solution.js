//printReverse()  write a function printReverse() that takes an array as an argument and prints out the elements in the array in reverse order(don't actually reverse the array itself)


function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
    console.log(arr[i]);
	}
}
printReverse([5,6,4,3]);

/*
function printReverse(input) {
    var ret = new Array;
    for(var i = input.length-1; i >= 0; i--) {
        ret.push(input[i]);
    }
    return ret;
}

//var a = [3,5,7,8]
//var b = printReverse(a);*/


//isUniform()  write a function isUniform() which tkaes an array an argument and returns true if all elements in the array are identical.

function isUniform(arr){
	var first = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] !== first){
			return false;
		}
    }
    return true;
}


//write a function sumArray() that accepts an array of numbers and returns the sum of all numbers in the array. this code was made by me huuuuuu!!!!

function sumArray(arr){
    var result = 0;
      for(var i = 0; i < arr.length; i++){
         result += arr[i];
      } 
      return result;
}

/*function sumArray(arr){
	var total = 0;
	arr.forEach(function(element){
		total += element;
	});
	return total;
}*/

//max() write a function max() that accepts an array of numbers and returns the maximum number in the array.

function max(arr){
	var max = arr[0];
	for(var i = 1; i < arr.length; i++){
		if(arr[i] > max){
			max = arr[i];
		}
	}
return max;
}

