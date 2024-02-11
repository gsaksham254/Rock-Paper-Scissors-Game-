let Reset = document.querySelector('.reset');
let Choices = document.querySelectorAll('.choice');
let Winner = document.querySelector('.text');
let UserScore = document.querySelector('#userScore');
let CompScore = document.querySelector('#compScore');
let Message = document.querySelector('.message');

let compScore = 0;
let playerScore = 0;


const PlayGame = (UserChoice) => {
    const ComputerChoice = GetComputerChoice();
    if(UserChoice === ComputerChoice){
        Winner.innerText = `Both Choose ${UserChoice} It's a tie`;
        Message.classList.remove('winner');
        Message.classList.remove('looser');
        Message.classList.add('draw');
    }
    else{
        if(UserChoice === "rock"){
            if(ComputerChoice === "paper"){
                Winner.innerText = `Lose You choose ${UserChoice} and Computer choose ${ComputerChoice}`
                Message.classList.remove('winner');
                Message.classList.remove('draw');
                Message.classList.add('looser');
                compScore++;
                CompScore.innerText = `${compScore}`;
            }
            else{
                Winner.innerText = `Winner choose ${UserChoice} and Computer choose ${ComputerChoice}`;
                Message.classList.remove('looser');
                Message.classList.remove('draw');
                Message.classList.add('winner');
                playerScore++;
                UserScore.innerText = `${playerScore}`;
            }
        }
        else if(UserChoice === "paper"){
            if(ComputerChoice === "scissors"){
                Winner.innerText = `Lose You choose ${UserChoice} and Computer choose ${ComputerChoice}`
                Message.classList.remove('winner');
                Message.classList.remove('draw');
                Message.classList.add('looser');
                compScore++;
                CompScore.innerText = `${compScore}`;
            }
            else{
                Winner.innerText = `Winner choose ${UserChoice} and Computer choose ${ComputerChoice}`;
                Message.classList.remove('looser');
                Message.classList.remove('draw');
                Message.classList.add('winner');
                playerScore++;
                UserScore.innerText = `${playerScore}`;
            }
        }
        else if(UserChoice === "scissors"){
            if(ComputerChoice === "rock"){
                Winner.innerText = `Lose You choose ${UserChoice} and Computer choose ${ComputerChoice}`
                Message.classList.remove('winner');
                Message.classList.remove('draw');
                Message.classList.add('looser');
                compScore++;
                CompScore.innerText = `${compScore}`;
            }
            else{
                Winner.innerText = `Winner choose ${UserChoice} and Computer choose ${ComputerChoice}`;
                Message.classList.remove('looser');
                Message.classList.remove('draw');
                Message.classList.add('winner');
                playerScore++;
                UserScore.innerText = `${playerScore}`;
            }
        }
    }    
}



Choices.forEach((choice)=>{
    choice.addEventListener('click', () => {
        const UserChoice = choice.getAttribute("id");
        PlayGame(UserChoice);
    })
});
function GetComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

Reset.addEventListener('click', () => {
    compScore = 0;
    playerScore = 0;
    CompScore.innerText = `${compScore}`;
    UserScore.innerText = `${playerScore}`;
    Winner.innerText = ``;
})