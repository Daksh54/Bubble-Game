var timer = 1;
var score = 0;
var hitrn = 0;

function increasescore(){
    score += 10;
    document.querySelector("#scoreint").textContent = score;
}

function getnewhit(){
    hitrn = Math.floor(Math.random()*10);
    document.querySelector("#Hitint").textContent = hitrn;
}

function make_bubble(){
    var clutter = "";

    for(var i=1 ; i<=80 ; i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runtimer(){
    var timerint = setInterval(function(){
        if(timer>0){
        timer--;
        document.querySelector("#timer").textContent = timer;
        }
        else{
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000)
}

document.querySelector("#pbtm")
.addEventListener("click", function (details){
    var accessnumber = Number(details.target.textContent);
    if(accessnumber == hitrn){
        increasescore();
        make_bubble();
        getnewhit();
    }
});

make_bubble();

runtimer();

getnewhit();

