//function that gives random numbers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//setting the initial cards player and dealer get

//Player cards pre-determined here
let playerFirstInitialCard = 1;
let playerSecondInitialCard = 1;
let playerCardDrawnOne = 1;
let playerCardDrawnOneAvailable = true;
let playerCardDrawnTwo = 1;
let playerCardDrawnTwoAvailable = true;
let playerCardDrawnThree = getRndInteger(1, 10);
let playerCardDrawnThreeAvailable = true;
let playerCardDrawnFour = getRndInteger(1, 10);
let playerCardDrawnFourAvailable = true;
let playerCardDrawnFive = getRndInteger(1, 10);
let playerCardDrawnFiveAvailable = true;

//dealers card pre-determined
let dealerShownCard = getRndInteger(1, 10);
let dealerHiddenCard = getRndInteger(1, 10);
//! KNOWN BUG DETECTED if newly drawn cards get 1 it messes up all the loop
let dealerCardDrawnOne = getRndInteger(1, 10);
let dealerCardDrawnOneAvailable = true;
let dealerCardDrawnTwo = getRndInteger(1, 10);
let dealerCardDrawnTrueAvailable = true;
let dealerCardDrawnThree = getRndInteger(1, 10);
let dealerCardDrawnThreeAvailable = true;
let dealerCardDrawnFour = getRndInteger(1, 10);
let dealerCardDrawnFourAvailable = true;
let dealerCardDrawnFive = getRndInteger(1, 10);
let dealerCardDrawnFiveAvailable = true;

//initial scores, win cons,
let playerScore = playerFirstInitialCard + playerSecondInitialCard;
let DealerScore = dealerShownCard + dealerHiddenCard;
let playerWin = false;
let dealerWin = false;
let playerDecisionAvailable = false;
let playerDecision = ["draw", "stay"];
let playerDecisionInPromt;
let AceCardEffectAvailableForPlayer = false;
let AceCardEffectAvailableForDealer = false;
let plus10Available = false;
let gameOver = false;

console.log(playerFirstInitialCard + " " + playerSecondInitialCard);
// Dealer got Ace card
if (dealerShownCard == 1 && dealerHiddenCard == 1) {
  if (DealerScore <= 21) {
    DealerScore = DealerScore + 10;
    if (DealerScore == 21) {
      dealerWin = true;
    }
  }
}

if (playerFirstInitialCard === 1 || playerSecondInitialCard === 1) {
  AceCardEffectAvailableForPlayer = true;
  plus10Available = true;
}

// show dealer cards
console.log("Dealer got a " + dealerShownCard + " and a hidden card");
prompt("check console:");

//Game loop for player turn
while (!gameOver) {
  // ask the player if he wants to draw continiously until his answer matches with intenden options
  checkIfDecisionAvailable();

  // if he types draw
  drawACardforPlayer();

  // if he types stay
  if (playerDecisionInPromt == playerDecision[1]) {
    // ends player turn
    break;
    // calculate dealer end score
  }

  // if player got Ace card in his deck
  if (AceCardEffectAvailableForPlayer) {
    // we active extra +10 points
    if (playerScore <= 21 && plus10Available) {
      playerScore = playerScore + 10;
      plus10Available = false;
      if (playerScore == 21) {
        playerWin = true;
        break;
      }
    }

    console.log(playerFirstInitialCard + " " + playerSecondInitialCard);
    console.log(playerScore);

    if (AceCardEffectAvailableForPlayer) {
      if (playerScore > 21) {
        AceCardEffectAvailableForPlayer = false;
        playerScore = playerScore - 10;
        console.log("ace effect is deactivated new score:" + playerScore);
      }
    }

    if (AceCardEffectAvailableForPlayer) {
      if (playerScore >= 21) {
        if (playerScore == 21) {
          playerWin = true;
          gameOver = true;
          break;
        } else playerWin = false;
        // // gameOver doesn't stop the loop for some reason (it's bcs loop still works till end
        gameOver = true;
        break;
      }
    }

    console.log(playerScore);
  } else if (!AceCardEffectAvailableForPlayer) {
    if (playerScore >= 21) {
      if (playerScore == 21) {
        playerWin = true;
        gameOver = true;
        break;
      } else playerWin = false;
      // // gameOver doesn't stop the loop for some reason (it's bcs loop still works till end
      gameOver = true;
      break;
    }
  }
}

//after loop

//dealer draws cards until he got 21 or bigger

// !todo calculate 21 - player score smaller score wins
if (playerWin) {
  console.log("you win");
} else {
  console.log("you lost");
}

//! KNOWN BUG DETECTED if newly drawn cards get 1 it messes up all the loop
function drawACardforPlayer() {
  //   // Need to check if new drawn cards are ace or not
  if (playerDecisionInPromt == playerDecision[0] && playerDecisionAvailable) {
    if (playerCardDrawnOneAvailable) {
      if (playerCardDrawnOne == 1) {
        AceCardEffectAvailableForPlayer = true;
        plus10Available = true;
      }
      console.log("You have drawn a " + playerCardDrawnOne + " card");
      playerScore = playerScore + playerCardDrawnOne;
      console.log(playerScore);
      playerDecisionAvailable = false;
      playerCardDrawnOneAvailable = false;
    }
  } else if (playerCardDrawnTwoAvailable && !playerCardDrawnOneAvailable) {
    if (playerCardDrawnTwo === 1 && !(playerCardDrawnOne == 1)) {
      AceCardEffectAvailableForPlayer = true;
      plus10Available = true;
    }
    console.log("You have drawn a " + playerCardDrawnTwo + " card");
    playerScore = playerScore + playerCardDrawnTwo;
    console.log(playerScore);
    playerDecisionAvailable = false;
    playerCardDrawnTwoAvailable = false;
  } else if (playerCardDrawnThreeAvailable && !playerCardDrawnTwoAvailable) {
    if (playerCardDrawnThree == 1) {
      AceCardEffectAvailableForPlayer = true;
      plus10Available = true;
    }
    console.log("You have drawn a " + playerCardDrawnThree + " card");
    playerScore = playerScore + playerCardDrawnThree;
    console.log(playerScore);
    playerDecisionAvailable = false;
    playerCardDrawnThreeAvailable = false;
  } else if (playerCardDrawnFourAvailable && !playerCardDrawnThreeAvailable) {
    if (playerCardDrawnFour == 1) {
      AceCardEffectAvailableForPlayer = true;
      plus10Available = true;
    }
    console.log("You have drawn a " + playerCardDrawnFour + " card");
    playerScore = playerScore + playerCardDrawnFour;
    console.log(playerScore);
    playerDecisionAvailable = false;
    playerCardDrawnFourAvailable = false;
  } else if (playerCardDrawnFiveAvailable && !playerCardDrawnFourAvailable) {
    if (playerCardDrawnFive == 1) {
      AceCardEffectAvailableForPlayer = true;
      plus10Available = true;
    }
    console.log("You have drawn a " + playerCardDrawnFive + " card");
    playerScore = playerScore + playerCardDrawnFive;
    console.log(playerScore);
    playerDecisionAvailable = false;
    playerCardDrawnFiveAvailable = false;
    gameOver = true;
  }
}

function checkIfDecisionAvailable() {
  while (!playerDecisionAvailable) {
    // implemented lower case input // fixed again with brackets
    playerDecisionInPromt = prompt("Please enter draw or stay:").toLowerCase();
    if (
      playerDecisionInPromt == playerDecision[0] ||
      playerDecisionInPromt == playerDecision[1]
    ) {
      playerDecisionAvailable = true;
      break;
    }
  }
}
