function  getComputerChoice(){
    let randomChoice = Math.random();
    if(randomChoice < 0.33) {
        return "rock";
    }
    else if(randomChoice < 0.66){
        return "paper";
    }
    else{
        return "scissor";
    }
}


function getHumanChoice(){
    let humanChoice = prompt("Your turn, rock paper or scissor?)");
    return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

let playRound= function(humanChoice, computerChoice){
    if(humanChoice=="rock"&&computerChoice=="scissor"||
    humanChoice=="paper"&&computerChoice=="rock" ||
    humanChoice=="scissor"&&computerChoice=="paper"
    ){
         console.log(`Congratulations your choice "${humanChoice}" beats computer's choice "${computerChoice}"`);
         humanScore++;
         console.log(`human score is ${humanScore}`);
    }

   else if(humanChoice=="rock"&&computerChoice=="rock"||
    humanChoice=="paper"&&computerChoice=="paper" ||
    humanChoice=="scissor"&&computerChoice=="scissor"
    ){
         console.log("its a tie!");
    }

    else{
        
         console.log(`OH NO! computer's choice "${computerChoice}" beats your choice "${humanChoice}"`);
         computerScore++;
         console.log(`Computer score is ${computerScore}`)
    }
}



function playGame(playRound){
    for(let i=0; i<5; i++){
        let computerSelection =getComputerChoice();
let humanSelection = getHumanChoice();
 playRound(humanSelection, computerSelection);
    }
}

console.log(playGame(playRound));






