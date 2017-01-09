let singleVariable;
singleVariable = 99;

let multipleValues = [];
multipleValues[0] = 50;
multipleValues[1] = 60;
multipleValues[2] = "mouse";


console.log(multipleValues[2]);


function looper () {
let newMultipleValues = [1, 2, "buckle", "my", "shoe"];
newMultipleValues.forEach(function (x,value){
	console.log(value);
	
})
	console.log("Length of array is ", newMultipleValues.length);
}

looper();
