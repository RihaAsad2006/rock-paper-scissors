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
console.log(getComputerChoice());

function getHumanChoice(){
    let humanChoice = prompt("Your turn, rock paper or scissor?)");
    return humanChoice;
}
console.log( getHumanChoice());
