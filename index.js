let buttons=document.querySelectorAll("button");
let your=document.querySelector(".your");
let com=document.querySelector(".com");
let winner=document.querySelector(".winner");
let result=document.querySelector(".result");
let outcome={
WIN:0,
LOST:0,
TIE:0,
};



let arr=Array.from(buttons);
arr.forEach(button => {
    button.addEventListener("click",()=>{
        let text=button.innerText;
your.innerText=text;


let r=Math.random()*3;
let comChoice;
if(r>0&&r<=1){          
    comChoice="STONE";
    com.innerText=comChoice;
    console.log(0,1);
}
if(r>1&&r<=2){
    comChoice="PAPER";
    com.innerText=comChoice;
    console.log(1,2);
}

if(r>2&&r<=3){
    comChoice="SCISSOR";
    com.innerText=comChoice;
    console.log(2,3);
}


if(text===comChoice){
winner.innerText="its a tie.";
outcome.TIE++;
}
 else if(text==="PAPER"&&comChoice==="STONE"){
    winner.innerText="congratulation,you are winner.";
    outcome.WIN++;
}
else if(text==="STONE"&&comChoice==="SCISSOR"){
    winner.innerText="congratulation,you are winner.";
    outcome.WIN++;
}
 else if(text==="SCISSOR"&&comChoice==="PAPER"){
    winner.innerText="congratulation,you are winner.";
    outcome.WIN++;
}
else{
    winner.innerText="ohh! you lost.";
    outcome.LOST++;
}
result.innerText=`WIN:${outcome.WIN}
LOST:${outcome.LOST}
TIE:${outcome.TIE}
`;

    })


});


