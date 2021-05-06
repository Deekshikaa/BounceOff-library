var fixedRect, movingRect;

var a,b; 

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  fixedRect.velocityY = -3;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  movingRect.velocityY = 3;

  a=createSprite(200,400,50,80);
  a.shapeColor="green";
  a.velocityY = -3;
  b=createSprite(200,200,30,80);
  b.shapeColor="green";
  b.velocityY = 3;
  

  
}

function draw() {
  background(0,0,0);  

  
  bounceOffD(movingRect, fixedRect);
  bounceOffD(a,b)
 
  drawSprites();
}

function bounceOffD(movingRect, fixedRect) {
  if (movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
    && movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2) {
      fixedRect.velocityY = fixedRect.velocityY*(-1);
      movingRect.velocityY = movingRect.velocityY*(-1);

  }


}