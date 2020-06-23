class Player {
    constructor(x,y,width,height){
        this.body = Bodies.rectangle(x,y,width,height);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
        
    }

    display(){
        var position = [this.body.position.x, this.body.position.y];
            rectMode(CENTER);
            fill(255,0,0);
            rect(position.x, position.y,90,40);

    }
    
}