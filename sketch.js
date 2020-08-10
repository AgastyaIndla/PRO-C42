var heading=0;
var player;
var enemy = [];

function setup() {
  createCanvas(400,400);
  player = new Player();
  for(i=0;i<300;i++){
    enemy.push(new Enemy());
  }
}

function draw() {
  background(0,0,0);  
  player.display();
  for(i=0;i<15;i++){
    enemy[i].display();
    enemy[i].move();
  }
}