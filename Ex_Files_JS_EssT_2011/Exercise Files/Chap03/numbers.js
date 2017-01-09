function returnNumber() {
let foo = "55";
let newNumber =  Number(foo);
//Number is a built in function to convert
// to a number if possible. 
// returns if it is not a number
	if (isNaN(newNumber)) {
		console.log("It's not a number");
	} else {
		console.log(newNumber);
	}
}
returnNumber()


//math object

let x = 200.6;
let y = Math.round(x);
console.log(y);

let a = 200;
let b = 100;
let c = 300;
let biggest = Math.max(a,b,c);
console.log(biggest);
let smallest = Math.min(a,b,c);
console.log(smallest);
let random = Math.random(a) * 100 + 1;
console.log(random);
