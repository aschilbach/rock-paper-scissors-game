// GLOBAL

let humanScore = 0;
let computerScore = 0;
let playerName = prompt("Enter your player name.");

function getRandomChoice(){
  const randomNumber = Math.floor(Math.random() * 3);

  if(randomNumber <= 0){
    return 'rock';
  }
  else if(randomNumber === 1){
    return 'paper';
  }
  else{
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return `It's a tie you both chose ${humanChoice}`;
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        humanScore++;
        return 'You win! paper beats rock.'
    }
    else if(humanChoice === 'scissors' && computerChoice === 'paper'){
        humanScore++;
        return 'You win! scissors beats paper'
    }
    else if(humanChoice === 'rock' && computerChoice === 'scissors'){
        humanScore++;
        return 'You win! rock beats scissors'
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        computerScore++;
        return `You lose! paper beats rock.`
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        computerScore++;
        return `You lose! rock beats scissors.`
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        computerScore++;
        return `You lose! scissors beats paper.`
    }
}

// function playRound(humanChoice, computerChoice){
//   if(humanChoice === computerChoice){
//     return `Its a tie! you both chose ${humanChoice}`
//   }

//   const winConditions = {
//     rock: 'scissors', paper: 'rock', scissors: 'paper'
//   };

//   if(winConditions[humanChoice] === computerChoice){
//     humanScore++;
//     return `You win! ${humanChoice} beats ${computerChoice}.`
//   } else{
//     computerScore++;
//     return `You lose! ${computerChoice} beats ${humanChoice}.`;
//   }
// }

function gameOver(){
    console.log(`Final Score: ${humanScore} - ${computerScore}`)
      if(humanScore === computerScore){
        console.log('You tied!')
      }
      else if(humanScore > computerScore){
        console.log('You WIN!!!')
      }
      else{
        console.log('You Lose.')
      }
      console.log('GAME OVER. Refresh to restart.')
  }

// GAME LOOP 

function playGame(){
    
for(let round = 1; round <= 5; round++){

  while (true){
    humanChoice = prompt('Round ' + round + ': Rock, Paper or Scissors').toLowerCase();

    if(humanChoice === 'rock' || humanChoice === 'paper' || humanChoice === 'scissors'){
        break;
    }
    else {
        console.log('Invalid input, please enter rock paper or scissors!')
    }
}wadawd
    let computerChoice = getRandomChoice();

    let playResult = playRound(humanChoice, computerChoice);
    
    console.log(playResult);
    console.log(`Current score: ${playerName} - ${humanScore}, Computer - ${computerScore}`);

    if(round === 5){
        gameOver();
    }
  }
}
playGame();