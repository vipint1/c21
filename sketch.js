var fixedRect, movingRect;
var wall,car;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  wall=createSprite(1000,100,50,100);
  wall.shapeColor="blue";
  car=createSprite(200,100,30,30);
  car.shapeColor="pink";
  car.velocityX=2;
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if (isTouching(movingRect,fixedRect)){
   fixedRect.shapeColor="red";
   movingRect.shapeColor="red";
 }else{
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
 };
 if (isTouching(movingRect,wall)){
   text("car crashed",150,100);
 }
 bounceOff (car,wall);
  drawSprites();
}

