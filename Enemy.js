class Enemy{
    constructor(x,y,radius){
        this.y = height/2
        this.x = 64;
        this.velocity = 0;
        this.gravity = 1;
    }

    display(){
        fill(200,200,200);
        ellipse(this.x,this.y,32,32);
    }

     update(){
        this.velocity += this.gravity
        this.velocity *= 0.9;
        this.y += this.velocity;

        distance : this.distance 

        if(this.y > height){
            this.y = height;
            this.velocity = 0;
        }

        if(this.y < 0){
            this.y = 0;
            this.velocity = 0;
        }
    }
}