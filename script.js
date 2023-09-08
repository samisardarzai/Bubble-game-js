var timer=60;
var score = 0;
hitrn= 0;

function increaseScore (){
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

function Makebubble (){
    var sam = "";
    for (var i = 1; i<=120; i++) { 
        var rn = Math.floor(Math.random()*10);
        sam += `<div class="bubble">${rn}</div>`
    }
    document.querySelector("#pbtm").innerHTML=sam;
}
function GetNewHit (){
hitrn = Math.floor(Math.random()*10);
document.querySelector("#hitval").textContent=hitrn;
}

function runTimer(){
   var timerint = setInterval(function(){
        if (timer>0){
            timer --;
            document.querySelector("#timerval").textContent=timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=`<h1> GAME OVER </h1>` 
         
        }
        
    },1000);
}
document.querySelector("#pbtm").addEventListener("click", function (dets){
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitrn){
        increaseScore();
        Makebubble();
        GetNewHit();

    }
})
runTimer();
Makebubble();
GetNewHit();
