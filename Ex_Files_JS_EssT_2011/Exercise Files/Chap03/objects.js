let playerName = "Chris";
let playerScore = 10000;
let playerRank = 1;

let player = new Object();

player.name = "Chris";
player.score = 10000;
player.rank = 1;

let player1 = {
	name: "Chris",
	score: 10000,
	rank: 1
};

let player2 = {
	name: "John",
	score: 900,
	rank: 5
};

console.log(player1.name);
console.log(player2.name);

function playerDetails() {
	//display information for each player
	console.log(this.name + " Has a rank of: " + this.rank + " and a score of " + this.score);
}

player1.logDetails = playerDetails;
player2.logDetails = playerDetails;

player1.logDetails();
player2.logDetails();