
class Obstacle{
  constructor(x, index){
    this.p = createVector(x, random(164, height));
    this.v = createVector(-random(5,10), 0);
    this.size = createVector(100,50);
    this.typeOfObstacle = index;
  }
  draw(){
    rect(this.p.x, this.p.y, this.size.x, this.size.y);
    /*
    if (this.typeOfObstacle%20==0){
      image(oil_spill, this.p.x, this.p.y);
    }
    else if (this.typeOfObstacle%10==0){
      image(net, this.p.x, this.p.y);
    }
    else if (this.typeOfObstacle%3==0){
      image(bottle, this.p.x, this.p.y);
    }
    else if(this.typeOfObstacle%2==0){
      image(bag, this.p.x, this.p.y);
    }
    else{
      image(jelly, this.p.x, this.p.y);
    }
    */
		if (this.p.x < width/8 + 262 && this.p.x + 100 > width/8 + 262){
			if (turtleHeight <= this.p.y + this.size.y && turtleHeight + 164 > this.p.y + this.size.y) hit = true;
			if (turtleHeight + 164 >= this.p.y && turtleHeight < this.p.y) hit = true;
		}

  }
  checkCollision(turtle){
    
  }
  move(){
    this.p.add(this.v);
    if(this.p.x + this.size.x < 0){
      this.v.set(0,0);
      //this.p.set(width, random(height));
    }
  }
}