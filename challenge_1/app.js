document
  .addEventListener('DOMContentLoaded', function () {
    // your code goes here
    var board = document.getElementById('board');
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
    board.addEventListener('click', setPieces);


  }, false);
