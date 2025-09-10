let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ranIds=Math.floor(Math.random()*3); 
    return options[ranIds];
};

const drawGame=()=>{
    // console.log("Game was Draw.");
    msg.innerText="Game was Draw! Play again";
    msg.style.backgroundColor="#ade8f4";
};

const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        // console.log("You Win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="#95D5B2";
    }else{
        compScore++;
        compScorePara.innerText=compScore;
        // console.log("You lose!");
        msg.innerText=`You Lose! Computer's ${compChoice} beats ${userChoice}`;;
        msg.style.backgroundColor="#ffc2d1";
    }

};
const playGame=(userChoice)=>{
    // console.log("user choice is =", userChoice);
    const compChoice=genCompChoice();
    // console.log("computer choice= ", compChoice);

    if(userChoice===compChoice){
        drawGame();
        return;
    }else{
        let userWin=true;
        if(userChoice==="rock" ){
            userWin=compChoice==="paper"?false:true;
        }else if(userChoice==="paper"){
            userWin=compChoice==="scissors"?false:true;
        }else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
    }
    
};
choices.forEach((choice)=>{
    // console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        // console.log("choice was clicked",userChoice);
        playGame(userChoice);
    });
});

const resetBtn = document.querySelector("#reset-btn");
resetBtn.addEventListener("click", () => {
    userScore = 0;
    compScore = 0;
    document.querySelector("#user-score").innerText = userScore;
    document.querySelector("#comp-score").innerText = compScore;

    const msg = document.querySelector("#msg");
    msg.innerText = "Play your move";

    // ✅ Resetting to default styles (optional, in case changed elsewhere)
    msg.style.backgroundColor = "#f0f0f0";
    msg.style.color = "#333";
    msg.style.boxShadow = "2px 2px 6px rgba(0, 0, 0, 0.1)";
    msg.style.transform = "scale(1)";
});
