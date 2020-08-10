class Bullet {
    constructor(x, y, width, height){
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = 10;
    this.height = 10;
    this.velocity = -1;
    this.gravity = 0;
    }
    display(){
        this.body.position.x = player.x;

        var pos =this.body.position;
        rectMode(CENTER);
        fill(255,0,0);
        strokeWeight(1);
        stroke("turquoise");
        rect(100,500,this.width,this.height);
        
      }
      
      update(){
       this.velocity += this.gravity
       this.velocity *= 0.9;
       this.y += this.velocity;
        console.log("Working");
     }
 };