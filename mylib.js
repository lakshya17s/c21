function bounceOFF(o1,o2){
    if(o1.x-o2.x>o1.width/2+o2.width/2
      &&o2.x-o1.x>02.width/2+o1.width/2){
        o1.velocityX=-o1.velocityX;
        o2.velocityX=-o2.velocityX;
      }
      if(o1.y-o2.y<o1.height/2+o2.height/2
        &&o2.y-o1.y<o1.height/2+o2.height/2){
          o1.velocityY=-o1.velocityY;
          o2.velocityY=-o2.velocityY;
        }
  }