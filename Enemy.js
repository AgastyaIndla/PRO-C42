class Enemy{
    constructor(){
        this.iWidth = random(width);
        this.iHeight = random(height);
        this.Velocity = random(0.1,0.5);
    }

    display(){
        push();
        fill("Lightgrey");
        stroke("white");
        ellipse(this.iWidth,this.iHeight,25,25);
        pop();
    }

    move(){
        this.iWidth+=this.Velocity;
        this.iHeight+=this.Velocity;
    }
}