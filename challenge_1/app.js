document
  .addEventListener('DOMContentLoaded', function () {
    // your code goes here
    var spots = document.getElementsByTagName('td');
    var board = document.getElementById('board');
    var winners = document.getElementsByTagName('tr > td')
      .classNames = ''



    winners = Array.prototype.slice(winners);
    board.addEventListener('click', (e) => checkIfSolved(e))

    var resetPosition = function () {
      spots.forEach((spot) => {
        spot.innerText = '  ';
        spot.removeAttribute("class")
      });

    }

    var score = [
      ['waiting', 'waiting', 'waiting'],
      ['waiting', 'waiting', 'waiting'],
      ['waiting', 'waiting', 'waiting']
    ];
    var currentGameDetails = {
      roundsLeft: 10,
      currentPiece: function () {
        if (this.roundsLeft % 2 !== 0) {
          this.roundsLeft === 1 ?
            null :
            this.roundsLeft--;

          return 'X'
        } else {
          this.roundsLeft === 1 ?
            null :
            this.roundsLeft--;
          return 'O'
        }

      },
      updatePiece: 'ok' 


    };

    var setPieces = function (e) {
      if (e.target.className !== 'locked-in') {
        e.target.innerText = currentGameDetails.currentPiece();
        e.target.className = 'locked-in';
        var placeArrayPiece = e.target.id.split('-')
          .map(val => parseInt(val));
        e.target.innerText === 'X' ? score[placeArrayPiece[0]][placeArrayPiece[1]] = 1 : score[placeArrayPiece[0]][placeArrayPiece[1]] = 0;
      }
    }

    spots = Array.prototype.slice.call(spots);

    spots.forEach((spot) => {
      spot.addEventListener('click', setPieces, false);
    })

    // board.addEventListener('click', setPieces);
    window.globalScore = score;
    var resetBoard = function (e) {
      for (var i = 0; i < score.length; i++) {
        score[i] = score[i].map(plays => plays = 'waiting');
      }
      currentGameDetails.roundsLeft = 9;
      winner.innerText = '';
      resetPosition()
      console.log(score);
    }
    document
      .getElementById('reset-game')
      .addEventListener('click', resetBoard);

    var checkIfSolved = function () {
      hasAnyRowConflicts();
      hasAnyColConflicts();
      hasMajorDiagConflict();
      hasMinorDiagConflict();
      currentGameDetails.roundsLeft === 1 ? winner.innerText = "Tie game, wow you humans sure are smart..." : "";
    }

    var hasRowConflictAt = function (index) {
      return score[index].reduce((a, b) => a + b);
    }

    var hasAnyRowConflicts = function (e) {
      for (var i = 0; i < 3; i++) {
        var conflicts = hasRowConflictAt(i);
        if (conflicts === 0) {
          winner.innerHTML = 'player 2 wins , good job big O!'
          updateRowWinners(i);
          return i;
        } else if (conflicts === 3) {
          winner.innerHTML = 'player 1 wins, good job X-player!'

          updateRowWinners(i)
          return i;
        }

      }
    }
    var hasAnyColConflicts = function () {
      for (var i = 0; i < 3; i++) {
        var conflicts = hasColConflictAt(i);

        if (conflicts === 0) {
          winner.innerHTML = 'player 2 wins , good job big O!'
          updateColWinners(i);
          return i;
        } else if (conflicts === 3) {
          winner.innerHTML = 'player 1 wins, good job X-player!'
          updateColWinners(i)
          return i;
        }
      }
    }

    var hasColConflictAt = function (colIndex) {
      var colValues = [];
      for (var row = 0; row < 3; row++) {
        colValues.push(score[row][colIndex]);
      }


      return colValues.reduce((a, b) => a + b);
    }

    var hasMajorDiagConflict = function () {
      var diagVals = []
      for (var row = 0; row < 3; row++) {
        diagVals.push(score[row][row])
      }
      var conflicts = diagVals.reduce((a, b) => a + b);
      if (conflicts === 0 || conflicts === 3) {
        conflicts === 0 ? winner.innerHTML = 'player 2 wins , good job big O!' : winner.innerHTML = 'player 1 wins, good job X-player!'
        for (var i = 0; i < 3; i++) {
          document.getElementById(`${i}-${i}`)
            .className = "col-win"
        }
      }
    }

    var hasMinorDiagConflict = function () {
      var diagVals = [];
      var minorDag = score[0][2] + score[1][1] + score[2][0];
      if (minorDag === 0 || minorDag === 3) {
        minorDag === 0 ? winner.innerHTML = 'player 2 wins , good job big O!' : winner.innerHTML = 'player 1 wins, good job X-player!'

        document.getElementById(`0-2`)
          .className = "col-win"
        document.getElementById(`1-1`)
          .className = "col-win"
        document.getElementById(`2-0`)
          .className = "col-win"
      }
    }

    var updateColWinners = function (col) {
      for (var i = 0; i < 3; i++) {
        document.getElementById(`${i}-${col}`)
          .className = "col-win"
      }
    }
    var updateRowWinners = function (row) {
      for (var i = 0; i < 3; i++) {
        document.getElementById(`${row}-${i}`)
          .className = "col-win"
      }
    }




    //TESTING BUTTON
    var testBtn = document.getElementById('debug-helper');

    var testMe = function (score) {
      testBtn
        .addEventListener('click', function () {
          checkIfSolved();
        })
    }
    testMe(score);
    var winner = document.getElementById('winner-message');

  }, false);