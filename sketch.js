var movingRect
var fixedRect

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(200,200,50,50);
  movingRect.shapeColor = "green";
  fixedRect = createSprite(250,200,55,55);
  fixedRect.shapeColor = "green";
}

function draw() {
  background(0);  
  drawSprites();
  if(fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2
    && fixedRect.x-movingRect.x < movingRect.width/2+fixedRect.width/2
    &&movingRect.y-fixedRect.y < movingRect.height/2+fixedRect.height/2
    && movingRect.x-fixedRect.x < movingRect.width/2+fixedRect.width/2 ){
    fixedRect.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY
}