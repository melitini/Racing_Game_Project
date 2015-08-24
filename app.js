
$(function() {


      var p1Moves = 0;
      var p2Moves = 0;
      var max = 27;
      var p1Wins = 0;
      var p2Wins = 0;

function Game (player1, player2, winner) {
  this.player1 = player1;
  this.player2 = player2;
  this.winner = winner;
  this.init();
}

// `Game.prototype.init` kicks off a new game with a board and two players
/*
Game.prototype.init = function() {
  $(document).keypress(function() {


  });


};
*/


// A starter Player constructor.
function Player(playerName, position, wins) {
  this.playerName = playerName;
  this.position = position;
  this.wins = wins;
};

var player1 = new Player("Player 1", $('.startPos1'));
var player2 = new Player("Player 2", $('.startPos2'));




// Remember: prototypes are shared functions between all game instances
// Player.prototype.move = function() {
//   update player's position
// };


Player.constructor.prototype.move = $(document).keypress (function(event) {   
      
      var keycode = (event.keyCode ? event.keyCode : event.which); 

      if (p1Moves < max) {

       if(keycode == '97'){ 
          $('.startPos1').animate({'margin-left': '+=40px' }, 50);
          p1Moves++
        } 
      }

      if (p2Moves < max) {
        
       if(keycode == '108') {
          $('.startPos2').animate({'margin-left': '+=40px' }, 50);
          p2Moves++;
        } 
      }
});


Player.constructor.prototype.winOnce = $(document).keypress (function (winner) {
  
  if (p1Moves >= max) {
    p1Wins++;
    alert("player1 wins");
    console.log(p1Wins + " p1Wins");
}

  if (p2Moves >= max) {
    p2Wins++;
    alert("player2 wins");
    console.log(p2Wins + " p2Wins");
  }

});

//<<<<<<<<<< Win Counter >>>>>>>>>>>>>>




//<<<<<<<<<< Soft Reset Button >>>>>>>>>>
$( "#soft-reset" ).click(function() {
  $( ".startPos1" ).css({'margin-left': '0'});
  p1Moves = 0;
  $( ".startPos2" ).css({'margin-left': '0'});
  p2Moves = 0;
  });

});




//<<<<<<<<<< Soft Reset (Next Round) >>>>>>>>>>>>>>>>>>>>>>>
/*
function softReset() {
  $( ".startPos1" ).css({'margin-left': '0'});
  $( ".startPos2" ).css({'margin-left': '0'});
    p1Moves = 0;
    p2Moves = 0;
};


});

*/
/*
    $('.startPos1').css('margin-left', '0px');
      p1Moves = 0;
      console.log(p1Wins +"p1Wins " + p1Moves +" p1Moves");


    $('.startPos2').animate({'margin-left': '-200px' }, 0);
      p2Moves = 0;
      console.log(p2Wins +"p2Wins " + p2Moves +" p2Moves");


Player.constructor.prototype.softReset = $(document).keypress(function () {
  this.position = 0;

}


Game.constructor.prototype.reset = function() {
  this.player.position= 0;
}

var timeOut= setTimeout (function () {
  Game.reset();
},3000)

*/
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

// Start the game!
//var game = new Game();
//game.init();

