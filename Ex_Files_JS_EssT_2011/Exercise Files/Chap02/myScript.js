alert("Hello, world!");

function number(value){
let amount = value
	if (amount === 1000) {
		return alert("I am 1000");
	} else {
		return alert("Greater than 1000");
	}
}
number(1000);

// ternary operator involves three pieces. ex condition ? true:false;
// if condition 
function score() {
let playerOne = 500;
let playerTwo = 600;

 if(playerOne > playerTwo) {
 	highScore = playerOne;
 } else {
 	highScore = playerTwo;
 }
 return alert(" New High Score! " + highScore);
}
 	
score()

//ternary ... write condition separate by comma, then return your true false value separated by colons.
function score() {
let playerOne = 500;
let playerTwo = 600;
var highScore = (playerOne > playerTwo) ? playerOne : playerTwo;
alert("New high score!!! " + highScore);
console.log("New high score!!! " + highScore);
}	
score()


function loop() {
	let a = 1
	while (a < 10) {
		console.log(a);
		a++;	
	}
}
loop()

function forLoop() {
	for(let i =0; i < 10; i++) {
		if ( i === 0) {
			continue;
		} else {
			console.log(i)
		}	 
	}
}	
forLoop();

function multiply(n1,n2) {
	let result = n1 * n2;
	console.log(result + ", Tricked you, different function =D");
}
multiply(5,2)
var newResult = multiply(11,1); 


function calculateLoan(amount,months,interest,name) {
	console.log(amount,months,interest,name);
}
calculateLoan(1000, 12, "5%","creditCard");


