var zenia,tourus,cyclap;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  zenia = createSprite(30,120,50,50);
  zenia.shapeColor = "green";
  zenia.velocityX = 3;
  tourus = createSprite(30,180,50,50);
  tourus.shapeColor = "yellow";
  tourus.velocityX = 3;
  cyclap = createSprite(30,240,50,50);
  cyclap.shapeColor = "red";
  cyclap.velocityX = 3;

  car = createSprite(30,60,50,50);
  car.shapeColor = "white";
  car.velocityX = 3;
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}var zenia,tourus,cyclap;
var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  zenia = createSprite(30,120,50,50);
  zenia.shapeColor = "green";
  zenia.velocityX = 3;
  tourus = createSprite(30,180,50,50);
  tourus.shapeColor = "yellow";
  tourus.velocityX = 3;
  cyclap = createSprite(30,240,50,50);
  cyclap.shapeColor = "red";
  cyclap.velocityX = 3;

  car = createSprite(30,60,50,50);
  car.shapeColor = "white";
  car.velocityX = 3;
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
}

function draw() {
  background(0);  

  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5*weight*speed*speed/22509;
    if(deformation>180){
      car.shapeColor = color(255,0,0);
    }

    if(deformation<180 && deformation>100) {
      car.shapeColor = color(230,230,0);
    }

    if(deformation<100) {
      car.shapeColor = color(0,255,0);
    }
  }

  drawSprites();
}