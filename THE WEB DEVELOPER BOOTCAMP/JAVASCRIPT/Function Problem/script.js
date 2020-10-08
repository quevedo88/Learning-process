//Writhe a function isEven() which takes a single numeric argument and return true if the number is even, and false otherwhise.

function isEven(num) {
if(num % 2 ===0){
	return true;
}
else{
	return false;
}
}

/*//another short way to do it

function isEven(num){
	return num % 2 ===0;
}
*/

/*//Factorial()**** writhe a function factorial() which takes a sigle numeric argument and returns the factorial of that number.

function factorial(num) {
	 // If the number is less than 0, reject it.
  if (num < 0) 
        return -1;
    else if(num ===0)
    	return 1;
    else(num > 0)
    	return (num * factorial(num-1));
}*/

/*Factorialize a Number with a WHILE loop

function factorial(num) {
  var result = num;
  if (num === 0 || num === 1) 
    return 1; 
  while (num > 1) { 
    num--;
    result = result * num; // or result *= num; 
    result *= num;
  }
  return result;
}
factorial(5);*/

//Factoriallize a Number withe a FOR Loop

function factorial(num) {
  if (num === 0 || num === 1)
    return 1;
  for (var i = num - 1; i >= 1; i--) {
  	//num = num * i
    num *= i;
  }
  return num;
}
factorial(5);

//KebabToSnake() write a function kebabToSnake() which takes a single kebab-cased string argument and returns the snake_cased version. 

function kebabToSnake(str){
	//replace all "-" with "_" 's
	var newStr = str.replace(/-/g , "_");
	//return str
	return newStr;
}