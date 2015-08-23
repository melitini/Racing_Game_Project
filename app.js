


// function Game() {
  //Create a new instance of player 1
  //this.player1 = ...

  //Do the same for a player 2
  //this.player2 = ...

  //Create the track
  //this.track = ...
// }


function Game (player1, player2, track) {
  this.player1 = player1;
  this.player2 = player2;
  this.track = track;
}

// `Game.prototype.init` kicks off a new game with a board and two players
// Game.prototype.init = function() {
  //
// };

// A starter Player constructor.
function Player(playerName, position) {
  this.playerName = playerName;
  this.position = position;
};

var player1 = new Player("Player 1", $('.startPos1').append("P1"));
var player2 = new Player("Player 2", $('.startPos2').append("P2"));


// Remember: prototypes are shared functions between all game instances
// Player.prototype.move = function() {
//   update player's position
// };


      var p1Moves = 0;
      var p2Moves = 0;
      var max = 30;
Player.constructor.prototype.move = $(document).keypress(function(event) {   
      var keycode = (event.keyCode ? event.keyCode : event.which); 
      if (p1Moves < max) {
       
       if(keycode == '97'){ 
          $('.startPos1').animate({'margin-left': '+=60px' }, 50);
          p1Moves++
        } if (p1Moves === 19) {
          alert("player1 wins");
        } 

      }
        
       if(keycode == '108') {
          $('.startPos2').animate({'margin-left': '+=50px' }, 50);
          p2Moves++;
        }


});



/*


var p1Margin = $('.startPos1').css('margin-left');
var p2Margin = $('.startPos2').css('margin-left');

function winner(p1Margin, p2Margin) {
  console.log(p1Margin, p2Margin);

};
  
  if(p1Margin > 100px) {
    alert("Player 1 Wins");
  };

  else if(p2Margin > '100px') {
    alert("Player 2 wins");
  };
};

winner();
*/

// A starter Track constructor.
// function Track() {
  //Tracks the cells of the board instance
  //this.$cells = ...

  //Store any other properties that board may have below, such as a reset option
// };

// // Start the game!
// var game = new Game();
// game.init();

