let myString = "double quotes";
let singleString = "single quotes";
let mixQuotes = "That's fine."
// back slash allows single quotes, makes an exit.
let newMix = "He said \"that's,\" and left."
console.log(myString);
console.log(singleString);
console.log(mixQuotes);
console.log(newMix);

//string properties
console.log(mixQuotes.length);
console.log(mixQuotes.toUpperCase());
console.log(mixQuotes.toLowerCase());
console.log(mixQuotes.split(" "));
console.log(mixQuotes.indexOf("That's"));
console.log(mixQuotes.slice(1,4));

let str1 = "Hello";
let str2 = "Hello";

if( str1.toLowerCase() == str2.toLowerCase()) {
	console.log("They're the same");
}

let str3 = "aaaa";
let str4 = "bbbb";

if (str3 < str4) {
	console.log("lowerCase a is less than lowerCase b");
}


