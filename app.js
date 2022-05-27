//function that gives random numbers
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

//setting the initial cards player and dealer get
let playerFirstInitialCard = 1;
let playerSecondInitialCard = getRndInteger(1, 10);
let playerCardDrawnOne = getRndInteger(1, 10);
let playerCardDrawnOneAvailable = true;
let playerCardDrawnTwo = getRndInteger(1, 10);
let playerCardDrawnTwoAvailable = true;
let playerCardDrawnThree = getRndInteger(1, 10);
let playerCardDrawnThreeAvailable = true;
let dealerShownCard = getRndInteger(1, 10);
let dealerHiddenCard = getRndInteger(1, 10);
let dealerCardDrawnOne = getRndInteger(1, 10);
let dealerCardDrawnTwo = getRndInteger(1, 10);
let dealerCardDrawnThree = getRndInteger(1, 10);
let playerScore = playerFirstInitialCard + playerSecondInitialCard;
let DealerScore = dealerShownCard + dealerHiddenCard;
let playerWin = false;
let dealerWin = false;
let playerDecisionAvailable = false;
let playerDecision = ["draw", "stay"];
let playerDecisionInPromt;
let AceCardEffectAvailableForPlayer = false;
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

if (playerFirstInitialCard == 1 || playerSecondInitialCard == 1) {
  AceCardEffectAvailableForPlayer = true;
  plus10Available = true;
}

// show dealer cards
console.log("Dealer got a " + dealerShownCard + " and a hidden card");
prompt("check console:");

//game loop ? Player turn
while (!gameOver) {
  // if player got Ace card in his dec

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

    console.log(playerScore);
  }

  // if there is no ace card effect
  if (!AceCardEffectAvailableForPlayer) {
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
  }
}

// after loop
if (playerWin) {
  console.log("you win");
} else {
  console.log("you lost");
}

function drawACardforPlayer() {
  //   TODO: Need to check if new drawn cards are ace or not
  if (playerDecisionInPromt == playerDecision[0] && playerDecisionAvailable) {
    if (playerCardDrawnOneAvailable) {
      if (playerCardDrawnOne == 1) {
        AceCardEffectAvailableForPlayer = true;
      } else {
        console.log("You have drawn a " + playerCardDrawnOne + " card");
        playerScore = playerScore + playerCardDrawnOne;
        console.log(playerScore);
        playerDecisionAvailable = false;
        playerCardDrawnOneAvailable = false;
      }
    } else if (playerCardDrawnTwoAvailable && !playerCardDrawnOneAvailable) {
      if (playerCardDrawnTwo == 1) {
        AceCardEffectAvailableForPlayer = true;
      } else {
        console.log("You have drawn a " + playerCardDrawnTwo + " card");
        playerScore = playerScore + playerCardDrawnTwo;
        console.log(playerScore);
        playerDecisionAvailable = false;
        playerCardDrawnTwoAvailable = false;
      }
    } else if (playerCardDrawnThreeAvailable && !playerCardDrawnTwoAvailable) {
      if (playerCardDrawnThree == 1) {
        AceCardEffectAvailableForPlayer = true;
      } else {
        console.log("You have drawn a " + playerCardDrawnThree + " card");
        playerScore = playerScore + playerCardDrawnThree;
        console.log(playerScore);
        playerDecisionAvailable = false;
        playerCardDrawnThreeAvailable = false;
        gameOver = true;
      }
    }
  }
}

function checkIfDecisionAvailable() {
  while (!playerDecisionAvailable) {
    playerDecisionInPromt = prompt("Please enter draw or stay:");
    if (
      playerDecisionInPromt == playerDecision[0] ||
      playerDecisionInPromt == playerDecision[1]
    ) {
      playerDecisionAvailable = true;
    }
  }
}
