var fixedrect,movingrect;
var object1, object2;
var gameobject1, gameobject2;

function setup() {
  createCanvas(1200,800);
  fixedrect = createSprite(200, 200, 50, 80);
  movingrect = createSprite(600,200,80,30);

  gameobject1 = createSprite(600,200,50,50);
  gameobject2 = createSprite(600,600,50,50);

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  fixedrect.velocityX = 3;
  movingrect.velocityX = -3;

  gameobject1.shapeColor = "blue";
  gameobject2.shapeColor = "blue";
  gameobject1.velocityY = 2;
  gameobject2.velocityY = -2;
}

function draw() {
  background(0,0,0);

bounceOff(movingrect,fixedrect);
bounceOff(gameobject1,gameobject2);

 drawSprites();
}

function bounceOff(object1, object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2){
      object2.velocityX = object2.velocityX *(-1);
      object1.velocityX = object2.velocityX *(-1);
    }

  if(object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2){
      object2.velocityY = object2.velocityY *(-1);
      object1.velocityY = object1.velocityY *(-1);
    }
}