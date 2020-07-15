class Enemy{
    constructor(x,y,radius){
        this.y = y;
        this.x = rand(0,width);
        this.velocity = 0;
        this.gravity = 0.5;
    }

    display(){
        fill(200,200,200);
        ellipse(this.x,this.y,32,32);
    }

     update(){
        this.velocity += this.gravity
       this.velocity *= 0.9;
       this.y += this.velocity;
     }
    }

    function rand(min,max){
      return floor(random(min,max));
  }
