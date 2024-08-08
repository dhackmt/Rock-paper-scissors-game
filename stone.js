let userScore = 0;
let compScore = 0;

let choices = document.querySelectorAll(".choice");
let u = document.querySelector("#u");
let c = document.querySelector("#c");
const msg = document.querySelector("#msg");

const compChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  const compOption = options[randIdx];
  return compOption;
};

const showWinner = (winner, userChoice, compOption) => {
  if (winner) {
    msg.innerHTML = `You won! Your ${userChoice} beats ${compOption}`;
    msg.style.backgroundColor = "Green";
    userScore++;
    console.log(userScore);
    u.innerHTML = userScore;
  } else {
    msg.innerHTML = `You lost !  ${compOption} beats your ${userChoice} `;
    msg.style.backgroundColor = "Red";
    compScore++;
    c.innerHTML = compScore;
    console.log(compScore);
  }
};

const draw = () => {
  msg.innerHTML = "Its a Draw!";
  msg.style.backgroundColor = "purple";
};

const playGame = (userChoice) => {
  console.log(userChoice);

  let compOption = compChoice();
  console.log(compOption);
  if (compOption == "rock" && userChoice == "rock") {
    draw();
  } else if (compOption == "paper" && userChoice == "paper") {
    draw();
  } else if (compOption == "scissors" && userChoice == "scissors") {
    draw();
  } else if (compOption == "rock" && userChoice == "paper") {
    showWinner(true, compOption);
  } else if (compOption == "scissors" && userChoice == "paper") {
    showWinner(false, compOption);
  } else if (compOption == "paper" && userChoice == "scissors") {
    showWinner(true, compOption);
  } else if (compOption == "rock" && userChoice == "scissors") {
    showWinner(false, compOption);
  } else if (compOption == "scissors" && userChoice == "rock") {
    showWinner(true, compOption);
  } else if (compOption == "paper" && userChoice == "rock") {
    showWinner(false, compOption);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});

// const playGame = (userChoice) => {
//   console.log(userChoice);
//   console.log(compOption);

//   if (userChoice == compOption) {
//     draw();
//   } else {
//     let userWin = true;
//     if (userChoice == "rock") {
//       userWin = compOption === "paper" ? false : true;
//     } else if (userChoice == "paper") {
//       userWin = compOption == "scissors" ? false : true;
//     } else {
//       userWin = compOption == "rock" ? false : true;
//     }

//     showWinner(userWin, userChoice);
//   }
// };
