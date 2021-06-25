var sea, seaImg, ship, shipImg;
function preload(){
  seaImg = loadImage("sea.png")
  shipImg = loadAnimation("ship-1.png","ship-2.png");
  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(0,0)
  sea.addImage("sea", seaImg)
  sea.velocityX = -3;
  sea.scale=0.5
  
  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("ship",shipImg);
  ship.scale =0.3;
}

function draw() {
  background("blue");
  
   if(sea.x < 0){
    sea.x = 300
  }
  
  if(keyDown("space")) {
    ship.addAnimation("ship",shipImg1);
  }
  
  drawSprites();
 
}