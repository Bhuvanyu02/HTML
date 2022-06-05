function f() {
    var int1=Math.floor(Math.random()*6)+1;
    var i1="Dice-"+int1+".png";
    document.querySelector("#img1").setAttribute("src",i1);
    var int2=Math.floor(Math.random()*6)+1;
    var i2="Dice-"+int2+".png";
    document.querySelector("#img2").setAttribute("src",i2);
    if(int2>int1){
        document.querySelector("h1").innerHTML="PLAYER 2 WINS !!!";
    }
    else if(int1>int2){
        document.querySelector("h1").innerHTML="PLAYER 1 WINS !!!";
    }
    else{
        document.querySelector("h1").innerHTML="!!! DRAW !!!";
    }
    
}
