//------------PRELOADS-------------
let turtleImg, jellyImg, mirrorTurtleImg, swimTurtleImg, backgroundImg, bagImg, bottleImg, oilImg;
function preload(){
  backgroundImg = loadImage('images/background.png');
  bottleImg = loadImage('images/bottle.png');
  jellyImg = loadImage('images/jelly.png');
  mirrorTurtleImg = loadImage('images/mirror_turtle.png');
  oilImg = loadImage('images/oil_spill.png');
  bagImg = loadImage('images/plastic_bag.png');
  swimTurtleImg = loadImage('images/swimturtle.png');
  turtleImg = loadImage('images/turtle.png'); //1573x984
}

//----------OBSTACLE CLASS--------
// jelly: 0 bottle: 1, oil: 2, bag: 3
class Obstacle{
  constructor(x, i, t){
		this.isJelly = i == 0;
    this.obsArr = [jellyImg, bottleImg, oilImg, bagImg];
    this.size = createVector(100,50);
    this.image = this.obsArr[i];
    this.image.resize(150, 0)
    this.size = createVector(this.image.width,this.image.height);
    this.p = createVector(x, random(164, height-this.size.y));
    this.v = createVector(-random(5,10), 0);
    this.turtle = t;
		this.enable = true;
  }
  draw(){
    image(this.image,this.p.x, this.p.y);
    this.checkCollision();
  }
  checkCollision(){
    var isColliding = collideRectRect(this.p.x,this.p.y,this.size.x,this.size.y, this.turtle.p.x, this.turtle.p.y, this.turtle.size.x, this.turtle.size.y);
    if(!isColliding || !this.enable) return;
    if(this.isJelly)
      this.turtle.score++;
    else
      this.turtle.lives--;
    this.enable = false;
  }
  move(){
    this.p.add(this.v);
    if(this.p.x + this.size.x < 0){
      this.v.set(0,0);
      //this.p.set(width, random(height));
    }
  }
}

//--------------TURTLE CLASS--------------

class Turtle {
  constructor(img, px, py, vy) {
    this.setImage(img);
    this.p = createVector(px, py);
    this.v = vy;
    this.size = createVector(this.image.width, this.image.height);
		this.lives = 3;
    this.score = 0;
  }
  setImage(img) {
    this.image = img;
    this.image.resize(262,0);
  }
  move(f){
    this.p.set(this.p.x, f*this.v + this.p.y);
		// check in the draw function if lives == 0
  }
  show(){
    image(this.image, this.p.x, this.p.y);
  }
}