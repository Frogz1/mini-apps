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
        if (roundsLeft % 2 !== 0) {
          return 'X'
        } else {
          return 'O'
        }
      },
      updatePiece: 'ok'
      

     
    };
    //top left position
      //*[@id="board"]/tbody/tr[1]/td[1]
    //top middle
      //*[@id="board"]/tbody/tr[1]/td[2]
    //top right
      //*[@id="board"]/tbody/tr[1]/td[3]
    //middle row left position
      //*[@id="board"]/tbody/tr[2]/td[1]
    //middle row middle
      //*[@id="board"]/tbody/tr[2]/td[2]
    //middle row right
      //*[@id="board"]/tbody/tr[2]/td[3]
    //bottom row left position
      //*[@id="board"]/tbody/tr[3]/td[1]
    //bottom row middle
      //*[@id="board"]/tbody/tr[3]/td[2]
    //bottom row right
      //*[@id="board"]/tbody/tr[3]/td[3]

    var setPieces = function() {
      
    }
    board.addEventListener('click', setPieces);


  }, false);
