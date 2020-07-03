var wall,bullet;
var weight,speed,thickness;
function setup() {
  thickness=random(22,83);
  speed=random(223,321);
  weight=random(30,52);
  createCanvas(1600,400);
  bullet=createSprite(50, 200, 50,10);
  wall=createSprite(1200,200,thickness,height/2);
}

function draw() {
  background("pink");  
  wall.shapeColor=(80,80,80);
  bullet.velocityX=speed;
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  bullet.velocityX=0;
  {
    var  damage = 0.5 * weight * speed * speed / (thickness*thickness*thickness);
    if(damage>10)
    {
      wall.shapeColor=("green")
    }
    if(damage<10)
    {
      wall.shapeColor=("red")
    }
  }
  drawSprites();
}