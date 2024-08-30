let userScore=0;
let compScore=0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector(".msg");

const userPara = document.querySelector("#usersc");
const compPara = document.querySelector("#compsc");

const genCompChoice = () => {
    const option = ["rock", "paper", "scissors"];
    const rdmIdx = Math.floor(Math.random()*3);
    return option[rdmIdx];
};

const drawGame = () => {
    console.log("draw");
    msg.innerText = "It's a draw !";
    msg.style.backgroundColor = "rgb(79, 78, 78)"
}

const showWinner = (userWin,userChoice,compChoice) => {
     if (userWin) {
        userScore++;
        msg.innerText = `You Win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userPara.innerText = userScore;
     } else {
        compScore++;
        compPara.innerText = compScore;
        msg.innerText = `You Lose. ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
     }
}


const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    console.log(compChoice);
    if(userChoice === compChoice){
        drawGame();
    }else{
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        console.log("clicked");
        const userChoice = choice.getAttribute("id");
        console.log(userChoice);
        playGame(userChoice);
    });
});

