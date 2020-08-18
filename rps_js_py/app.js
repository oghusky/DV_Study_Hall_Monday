var rockBtn = document.querySelector(".rock");
var paperBtn = document.querySelector(".paper");
var scissorBtn = document.querySelector(".scissors");
var whoWon = document.querySelector(".who_won");
var playerOne = document.querySelector(".player1-score");
var playerTwo = document.querySelector(".player2-score");
var scoreOne = 0;
var scoreTwo = 0;
var options = ['r', 'p', 's'];
var rockImg = "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-027-512.png"
var scissorImg = "https://content.mycutegraphics.com/graphics/school/scissors-cartoon.png"
var paperImg = "https://cdn0.iconfinder.com/data/icons/rock-paper-scissors-emoji/792/rock-paper-scissors-emoji-cartoon-019-512.png"

rockBtn.addEventListener('click', function (e) {
  document.querySelector(".img_one").setAttribute("src", rockImg);
  checkWin(e.target.innerText);
});
paperBtn.addEventListener('click', function (e) {
  document.querySelector(".img_one").setAttribute("src", paperImg);
  checkWin(e.target.innerText);
})
scissorBtn.addEventListener('click', function (e) {
  document.querySelector(".img_one").setAttribute("src", scissorImg);
  checkWin(e.target.innerText);
})

function checkWin(btnName) {
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  if (computerChoice === 'r') document.querySelector(".img_two").setAttribute("src", rockImg)
  if (computerChoice === 'p') document.querySelector(".img_two").setAttribute("src", paperImg)
  if (computerChoice === 's') document.querySelector(".img_two").setAttribute("src", scissorImg)
  if (btnName === "ROCK") {
    if (computerChoice === "r") {
      whoWon.innerHTML = "It's a tie !!!"
    }
    else if (computerChoice === "s") {
      whoWon.innerHTML = "You won";
      scoreOne++;
    }
    else {
      whoWon.innerHTML = "You Lose"
      scoreTwo++;
    }
  }
  if (btnName === "PAPER") {
    if (computerChoice === "r") {
      whoWon.innerHTML = "You won";
      scoreOne++;
    }
    else if (computerChoice === "s") {
      whoWon.innerHTML = "You Lose";
      scoreTwo++
    }
    else whoWon.innerHTML = "It's a tie !!!"
  }
  if (btnName === "SCISSORS") {
    if (computerChoice === "r") {
      whoWon.innerHTML = "You Lose"
      scoreTwo++;
    }
    else if (computerChoice === "s") {
      whoWon.innerHTML = "It's a tie!!!"
    }
    else {
      whoWon.innerHTML = "You win"
      scoreOne++;
    }
  }
  playerOne.innerHTML = scoreOne;
  playerTwo.innerHTML = scoreTwo;
}
