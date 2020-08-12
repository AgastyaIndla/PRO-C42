class Player{
  constructor(){
     
  }

  display(){
      push();
      fill(255);
      translate(300,300);
      rotate(heading);
      triangle(-20,20,20,20,0,-20);
      pop();
      if(keyDown(RIGHT_ARROW)){
          heading+=10;
      }
      if(keyDown(LEFT_ARROW)){
          heading-=10;
      }
       
  }
    
  
}