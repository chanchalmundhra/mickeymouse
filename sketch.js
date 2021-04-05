var back_img,background,mickey,mickey_img
function preload(){
back_img=loadImage("backg.jpg")
mickey_img=loadAnimation("mic0.gif","mic1.gif","mic2.gif","mic3.gif","mic4.gif","mic5.gif","mic6.gif","mic7.gif","mic8.gif","mic9.gif")
}

function setup() {
  createCanvas(1200,900);
 
 background=createSprite(550,350,300,25);
 background.addImage(back_img)
 background.velocityX=-5

 mickey=createSprite(40,370,10,10)
 mickey.addAnimation("moving",mickey_img)
 mickey.scale=0.5
}

function draw(){
 // background("white")
  if(keyDown(LEFT_ARROW)){
    mickey.x=mickey.x-3;
  }
  if(keyDown(RIGHT_ARROW)){
    mickey.x=mickey.x+3;
  }
  if(keyDown(UP_ARROW)){
    mickey.y=mickey.y-3;
  }
  if(keyDown(DOWN_ARROW)){
    mickey.y=mickey.y+3;
  }
  if(background.x<30){
    background.x=background.width/2
  }
 camera.position.x=mickey.x
 drawSprites()
}
