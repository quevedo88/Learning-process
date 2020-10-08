//Print all numbers between -10 and 19

var num = -10
while(num <= 19){
	console.log(num);
	num++;
}


//Print all even numbers between 10 and 40

var evenNum = 10
while(evenNum <= 40){
	if(evenNum % 2 === 0){
		console.log(evenNum);
	}
evenNum++;
}

//Print all odd numbers between 300 and 333 

var oddNum = 300
while(oddNum <= 333){
	if(oddNum % 2 !== 0){
		console.log(oddNum);
	}

	oddNum++;
}

//Print all numbers divisible by 5 and 3 between 5 and 50
//divisibleft=divisible by five and three
var divisibleft = 5
while (divisibleft <= 50){
	if(divisibleft % 3 === 0 && divisibleft % 5 === 0){
       console.log(divisibleft);
	}
	divisibleft++;
}