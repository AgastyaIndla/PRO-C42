var heading=0;
var player;
var enemy = [];
var score=0;

function setup() {
  createCanvas(600,600);
  player = new Player();
  for(i=0;i<10;i++){
    enemy.push(new Enemy());
  }
}

function draw() {
  background(0,0,0);

  fill(255);
  //textStyle("ITALIC");
  textSize(30);
  text("SCORE: "+score,15,25);

  player.display();
  for(i=0;i<15;i++){
    enemy[i].display();
    enemy[i].move();
    enemy.push(new Enemy());
  }
}