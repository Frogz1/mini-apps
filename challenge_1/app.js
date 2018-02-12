document
  .addEventListener('DOMContentLoaded', function () {
    // your code goes here
    var spots = document.getElementsByTagName('td');
    var board = document.getElementById('board');
    console.log(spots);
    var resetPosition = function() {
      spots.forEach((spot) => {
        spot.innerText = '  ';
        spot.removeAttribute("class")
      });
    }
    
    var score = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    var currentGameDetails = {
      roundsLeft: 9,
      currentPiece: function() {
         if (this.roundsLeft % 2 !== 0) {
          this.roundsLeft === 1 ? null: this.roundsLeft--;
          
          return 'X'
        } else {
          this.roundsLeft === 1 ? null: this.roundsLeft--;
          return 'O'
        }
        
      },
      updatePiece: 'ok'
      

     
    };
    

    var setPieces = function(e) {
      if (e.target.className !== 'locked-in') {
        e.target.innerText = currentGameDetails.currentPiece();
        e.target.className = 'locked-in';
        var placeArrayPiece = e.target.id.split('-').map(val =>  parseInt(val));      
        score[placeArrayPiece[0]][placeArrayPiece[1]] = e.target.innerText;
      }

      console.table(score);      
      console.log(currentGameDetails.roundsLeft)
      
    }


    spots = Array.prototype.slice.call(spots);
    
    spots.forEach((spot) => {
      spot.addEventListener('click', setPieces,false);
    })
    console.log(spots);
    // board.addEventListener('click', setPieces);
    window.globalScore = score;
    var resetBoard = function(e) {
      for (var i = 0; i < score.length; i++) {
        score[i] = score[i].map(plays => plays = null);
      }

      resetPosition()
      console.log(score);
    }
    document.getElementById('reset-game').addEventListener('click', resetBoard);


  }, false);
