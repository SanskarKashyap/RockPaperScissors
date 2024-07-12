let player = document.querySelector("#player-score");
let Computer = document.querySelector("#computer-score");

let choices = document.querySelectorAll(".choice");
let WhoWin = document.querySelector("#WhoWin");

const GeneratedChoise = () => {
  const option = ["rock", "paper", "scissors"];
  // getting Random whole number between 0 and 2 (one less then 3)
  // https://www.youtube.com/watch?v=_V33HCZWLDQ&list=PLGjplNEQ1it_oTvuLRNqXfz_v_0pq6unW&index=11
  const randomInt = Math.floor(Math.random() * 3);
  return option[randomInt];
};

const GamePlay = (userChoise) => {
  console.log(userChoise + " is clicked");
  //Generate Coumputer Choise
  const ComputerChoise = GeneratedChoise();
  console.log(ComputerChoise + " is Choised");
  const result = Result(userChoise, ComputerChoise);
  console.log(result);
};

//ternary operator instead of if-else statements
const Result = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    console.log("Draw");
    WhoWin.innerText = "Draw"
    return null; // return null for a draw
  } else {
    const userWin =
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "scissors" && computerChoice === "paper")
        ? true
        : false;

    return PrintResult(userWin);
  }
};


const PrintResult = (userWin) => {
    let WhoWin = document.getElementById('WhoWin'); 
    if (WhoWin) {
        WhoWin.innerText = userWin ? "You Win !" : "Computer Win !";
    }

    if (userWin) {
        player.innerText = parseInt(player.innerText) + 1;
    } else {
        Computer.innerText = parseInt(Computer.innerText) + 1;
    }

    console.log(userWin ? "You win" : "You lose");
};

  

//for each loop
choices.forEach((choise) => {
  //   console.log(choise);

  //click on individual choise
  choise.addEventListener("click", () => {
    GamePlay(choise.id);
  });
});
