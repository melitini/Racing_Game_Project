console.log("sanity check!");


// OOP Racing Game example boilerplate code

function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
}

function Game (player1, player2, track) {
  this.player1 = player1;
  this.player2 = player2;
  this.track = track;
}



// `Game.prototype.init` kicks off a new game with a board and two players
Game.prototype.init = function() {
  //
};



// A starter Player constructor.

function Player(team) {
  //this.name = ...
  //this.position = ...
};


function Player(playerName, position) {
  this.playerName = playerName;
  this.position = position;
};

var player1 = new Player("Player 1", $('.startPos1').append("P1"));
var player2 = new Player ("Player 2", $('startPos2').append("P2"));


// Remember: prototypes are shared functions between all game instances
Player.prototype.move = function() {
  //update player's position
};


// A starter Track constructor.
function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
};

// Start the game!
var game = new Game();
game.init();


