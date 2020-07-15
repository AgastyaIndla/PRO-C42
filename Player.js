class Player {
    constructor(x, y, width, height) {
      var options={
        isStatic:true
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

    }
    display(){
      this.body.position.x = mouseX;

      if(keyCode===32){
        console.log("Working");
    }
  

      var pos =this.body.position;
    
      rectMode(CENTER);
      fill(255);
      strokeWeight(7);
      stroke("turquoise");
      rect(pos.x,pos.y, this.width, this.height);
      
    }
  };