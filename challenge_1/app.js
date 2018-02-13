document
  .addEventListener('DOMContentLoaded', function () {
    // your code goes here
    var spots = document.getElementsByTagName('td');
    var board = document.getElementById('board');

    var resetPosition = function () {
      spots.forEach((spot) => {
        spot.innerText = '  ';
        spot.removeAttribute("class")
      });
    }

    var score = [[null, null, null],
                [null, null, null],
                [null, null, null]];
    var currentGameDetails = {
      roundsLeft: 9,
      currentPiece: function () {
        if (this.roundsLeft % 2 !== 0) {
          this.roundsLeft === 1
            ? null
            : this.roundsLeft--;

          return 'X'
        } else {
          this.roundsLeft === 1
            ? null
            : this.roundsLeft--;
          return 'O'
        }

      },
      updatePiece: 'ok'

    };

    var setPieces = function (e) {
      if (e.target.className !== 'locked-in') {
        e.target.innerText = currentGameDetails.currentPiece();
        e.target.className = 'locked-in';
        var placeArrayPiece = e
          .target
          .id
          .split('-')
          .map(val => parseInt(val));
        e.target.innerText === 'X' ? score[placeArrayPiece[0]][placeArrayPiece[1]] = 1 : score[placeArrayPiece[0]][placeArrayPiece[1]] = 0;
      }

    }

    spots = Array
      .prototype
      .slice
      .call(spots);

    spots.forEach((spot) => {
      spot.addEventListener('click', setPieces, false);
    })
    
    // board.addEventListener('click', setPieces);
    window.globalScore = score;
    var resetBoard = function (e) {
      for (var i = 0; i < score.length; i++) {
        score[i] = score[i].map(plays => plays = null);
      }
      currentGameDetails.roundsLeft = 9;

      resetPosition()
      console.log(score);
    }
    document
      .getElementById('reset-game')
      .addEventListener('click', resetBoard);

    var checkIfSolved = function (pieces) {
      //Win solutions:
      //1. 3 in a vertical / horizontal line
      // 2. diagonal left, diagonal right if there is a win, halt play and add win
      // class Win types : All values in array match All values at rows 0, 1, 2 have a
      // match vertically e.g [x,0,x][0][1] [x,0,0][1, 1] [x,0,null][2, 1];
      for (var i = 0; i < 3; i++) {
        console.log(hasRowConflictAt(i))
      }
      
     
    }
    var hasRowConflictAt = function (index) {
      //
      var count = 0;
      console.log(score[index]);
      return score[index].reduce((a, b) => a + b);

    

      


    }

    var colHelper = function (currentBoard) {
      var col = 0;
      var result = false;

      for (var i = 0; i < currentBoard.length; i++) {
        var currentCol = [];
        for (var j = 0; j < currentBoard[i].length; j++) {

          currentCol.push(currentBoard[j][i])
          // loop through places places of currentboard but go col, by col so [0][0]
          // [1][0] [2][0]
        }
        if (currentCol.reduce((a, b) => a === b)) {
          console.table(currentCol)
          console.log(currentCol.reduce((a, b) => a === b))
          result = true;
          break;
        }
      }

      console.log(result);
      return result;
    }

    var testBtn = document.getElementById('debug-helper');

    var testMe = function (score) {
      testBtn
        .addEventListener('click', function (score) {
          checkIfSolved(score);
        })
    }
    testMe(score);

  }, false);
