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
  createCanvas(700,700);

  engine = Engine.create();
  world = engine.world;

  player = new Player(350,700); 

  enemy = new Enemy();
}

function draw() { 
  text("x:"+mouseX,50,50); 
  text("y:"+mouseY,50,70);
  
  background(0,100); 
  player.display();
  enemy.display();
}

function mouseMoved(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}


