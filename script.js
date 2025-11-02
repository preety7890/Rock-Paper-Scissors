let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

 const compChoice=()=>{
    // rock,paper,scissors randomly choose
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
 }

 const drawGame=()=>{
    console.log("game was draw...");
    msg.innerText="Game was Draw.Play again";
    msg.style.backgroundColor="#081b31";
 }

 const showWin=(userWin,userChoice,computerChoice)=>{
    if(userWin){
      userScore++;
      userScorePara.innerText=userScore;
        console.log("you win..");
        msg.innerText=`You Win! your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="green";
    }else{
         compScore++;
         compScorePara.innerText=compScore;
        console.log("you lose...");
        msg.innerText=`You lose!your ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor="red";
    }
 }

let playGame=(userChoice)=>{
    console.log("choice was clicked",userChoice);
    // generate computer chioce
    const computerChoice=compChoice();
    console.log("computer was clicked",computerChoice);
  // check condition

  if(userChoice==computerChoice){
    // draw game
    drawGame();
  } else {
    let userWin=true;
    if(userChoice==="rock"){
     // scissors ,paper
     userWin =computerChoice==="paper" ? false:true;
  } else if(userChoice==="paper"){
    //rock,scissors
    userWin =computerChoice==="scissors" ? false:true;
  } else{
    //rock,paper
    userWin =computerChoice==="rock" ? false:true;
  }
  showWin(userWin,userChoice,computerChoice);
 }
};
choices.forEach((choice) => {
    choice.addEventListener("click", ()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});