var myRE = /hello/;

var myString = "Does this sentence have the word hello in it?";
if ( myRE.test(myString) ) {
	console.log("Yes");
}

//var myRE = /hello/;

//var myString = "Does this sentence have the word hello in it?";

var myNewString = myString.replace(myRE,"goodbye");
console.log(myString);
console.log(myNewString);

var zip = /\d{5}(?:[-\s]\d{4})?$/;
var zipCode = "Does the end contain 33024";
	if (zip.test(zipCode)) {
		alert("There is a match on the end! ");
	}
// /^[0-9]{5}(?:-[0-9]{4})?$/
// This expression is saying it starts with numbers 
// 0 to 9 and contains 5. with an optional 0-9 containing 4 on the end.