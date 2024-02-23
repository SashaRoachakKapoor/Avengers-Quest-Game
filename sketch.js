var splashscreen;
var playbutton,aboutbutton;
var gameState="wait";
var health1 = 5;
var maxhealth1 = 100;
var score1 = 0;

function preload(){
splashscreen=loadImage('assets/The quest.gif')
}

function setup(){
createCanvas(windowWidth, windowHeight)


playbutton= createImg("assets/play_button.png");
playbutton.position(width-300,height-100);
playbutton.size(200,75);


aboutbutton= createImg("assets/black_widow.png");
aboutbutton.position(width-1300,height-600);
aboutbutton.size(200,75);

}


function draw(){
    if(gameState=="wait"){
        background(splashscreen);
    }
        playbutton.mousePressed(()=>{
            gameState="play";
            playbutton.hide();
    
       })
    
       aboutbutton.mousePressed(()=>{
            gameState="aboutgame";   
            aboutbutton.hide();
    })
    
    if(gameState=="aboutgame"){
        aboutpopup();
    }

    if (gameState == "play") {
        background("cyan");
        aboutbutton.hide();
        playbutton.hide();
       healthBar(50,50,health1,maxhealth1,"violet");
       healthBar(width-300,50,10,200,"green")
      }
    
    
      drawSprites()
    
    if(gameState == "play") {
    textSize(30)
    fill("green")
    text("LEVEL I ",width/2-100,100)
    }
    
    
}

function aboutpopup(){
    swal({
title:"A",
text:"Come on, lets unite together out in space.",
textAlign:"center",
imageUrl:"assets/thor.png",
imageSize:"200x200",
confirmButtonText:"LET's UNITE!!!",
confirmButtonColor:"green",
    },
    function(){
        gameState="wait"
    }
    )
}

function healthBar(x,y,h,mx,clr) {
    noFill();
    stroke("black")
    strokeWeight(2)
    rect(x,y,mx,20)
    fill(clr)
    rect(x,y,h,20)
  }
