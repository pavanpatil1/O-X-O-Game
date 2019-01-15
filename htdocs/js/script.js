var turn = "x"
var tiles = document.getElementsByClassName("tile")

//loop through the tiles and add click handlers to each one.
for (var i=0; i< tiles.length; i++) {
  tiles[i].addEventListener("click", callback)
}

function callback (event) {
  event.target.innerHTML = turn
  winCheck()

  if(turn === "x") {
    turn = "o"
  } else {
    turn = "x"
  }
  event.target.removeEventListener("click", callback)
}


function winCheck () {
  var win = false
  var winCombos = [
    [0,1,2], //across
    [3,4,5],
    [6,7,8],
    [0,3,6], //down
    [1,4,7],
    [2,5,8],
    [0,4,8], //diagonals
    [6,4,2]
  ]

  winCombos.forEach(function (combo) { //with each iteration, combo will be one of the elements in the winCombos array
    var tile1 = tiles[combo[0]].innerHTML
    var tile2 = tiles[combo[1]].innerHTML
    var tile3 = tiles[combo[2]].innerHTML

    if(tile1 === tile2 && tile2 === tile3 && tile1 !== " "){
      console.log("player " + turn + " wins")
      win = true

      //disable game after win
      for (var i=0; i< tiles.length; i++) {
        tiles[i].removeEventListener("click", callback)
      }
    }
  })

  //check for tie
  console.log("win = ", win)

  if(win){
    return console.log("game finished")
  }

  var tie = true
  console.log("initialized tie as tie = ", tie)
  for (var i=0; i<tiles.length; i++) {
    if (tiles[i].innerHTML == " ") {
      tie = false
    }
    console.log("now tie =", tie)
  }

  if (tie) {
    console.log("the game is a tie")
  }

}

document.getElementById("reset").addEventListener("click", function () {
  for (var i=0; i<tiles.length; i++) {
    tiles[i].innerHTML = " "
    tiles[i].addEventListener("click", callback)
  }
})
