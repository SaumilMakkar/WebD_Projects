let userScore=0;
let compScore=0;
let choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const comps=document.querySelector("#user-score");
const users=document.querySelector("#comp-score");
 const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const result=Math.floor(Math.random(options)*3);
    return options[result];
 }
 choices.forEach((choice)=>{
    let userChoice=choice.getAttribute("id");
    choice.addEventListener("click",()=>{

playgame(userChoice);
    })



})
const drawGame=()=>{
    console.log("game was draw.");
    msg.innerText="Game is drawn!";
   msg.style.backgroundColor="#081b31";
}
let showWinner=(userWin,compChoice,userChoice)=>{
    if(userWin){
        
        console.log("you win");
        msg.innerText=`You win!${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green"
        userScore++;
        let updatedUserScore=userScore;
        comps.innerText= updatedUserScore;
        
    }
    else{
        console.log("you lose");
        msg.innerText=`You lose!${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor="red";
        compScore++;
        let updatedCompScore=compScore;
        users.innerText=updatedCompScore;
    }
}


let playgame=(userChoice)=>{
console.log("user choice ",userChoice);
const compChoice=genCompChoice();
console.log("computer choice ",compChoice);
if(userChoice===compChoice){
drawGame();
}else{
    let userWin=true;
    if(userChoice==="rock"){
        userWin=compChoice==="paper"?false:true;
    }else if(userChoice==="paper"){
userWin=compChoice==="scissor"?true:false;
    }
    else {
        userWin=compChoice==="rock"?false:true
    }
     showWinner(userWin,compChoice,userChoice);
}

};
