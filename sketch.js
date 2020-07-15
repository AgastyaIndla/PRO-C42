const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine;
var world;
var player;
var enemy;
var bullet;

function setup() {
  createCanvas(1000,600);

  engine = Engine.create();
  world = Engine.world;

  player = new Player(mouseX,height,100,50);
  
  cLocation();
}


function cLocation(){
  enemy = new Enemy(floor(random(1,1000)),100);
}

function draw() { 
  text("x:"+mouseX,50,50); 
  text("y:"+mouseY,50,70);
  
  background(0); 
  player.display();
  enemy.display();
  enemy.update();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(player.body, {x: mouseX , y: mouseY});
}



