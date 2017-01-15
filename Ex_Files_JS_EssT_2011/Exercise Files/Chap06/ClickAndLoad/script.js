
function prepare() {
let myImage = document.getElementById("mainImage");
	myImage.onclick = function() {
		alert("You have clicked the main image");
};

}

window.onload = function() {
	//prep anything we need to load;
	prepare();
}

// document.onclick = function() {
// 	alert("You have clicked randomly =D");
// }



