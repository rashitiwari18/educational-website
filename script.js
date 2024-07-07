let userScore=0;
let compScore=0;

const userScorePara=document.querySelector(".user-score");
const compScorePara=document.querySelector(".comp-score");

// display this if choices matched
function draw(){
    let msg=document.querySelector(".msgBox");
    msg.innerText='Draw!  Try Again!';
    msg.style.backgroundColor="#364652";
}
// to display winner i.e. user or computer will get one point.
const showWinner=(userWin ,userChoice,compChoice)=>{
    let msg=document.querySelector(".msgBox");
    msg.style.backgroundColor="Red";
   if(userWin){
    msg.innerText=`You win your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor="green";
    userScore++;
    userScorePara.innerText=userScore
   }else{
    msg.innerText=`You lose ${compChoice} beats your ${userChoice}`
    msg.style.backgroundColor="Red";
    compScore++;
    compScorePara.innerText=compScore;
   } 
}
