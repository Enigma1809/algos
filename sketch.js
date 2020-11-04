function setup() {
  createCanvas(800,400);
  fixedRect=createSprite(200, 200, 50, 80);
  fixedRect.shapeColor='green';
  fixedRect.debug=true;

  movingRect=createSprite(400, 200, 80, 30);
  movingRect.shapeColor='green';
  movingRect.debug=true;

  //giving velocities to the objects
  fixedRect.velocityX=3;
  movingRect.velocityX=-4;
  
}
function draw() {
  background(0,0,0);
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;  

  bounceOff(fixedRect,movingRect);
  drawSprites(); 
}
function bounceOff(rectA,rectB)
{
    if (Math.abs(rectA.x-rectB.x) < rectA.width/2 + rectB.width/2 && 
    Math.abs(rectA.y-rectB.y) < rectA.height/2 + rectB.height/2){
        rectA.velocityX = -1*rectA.velocityX
        rectA.velocityY = -1*rectA.velocityY
      }
}