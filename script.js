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

