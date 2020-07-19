//------------PRELOADS-------------
let turtleImg, jellyImg, mirrorTurtleImg, swimTurtleImg, backgroundImg, bagImg, bottleImg, oilImg, hatImg;
let descriptionText, instructionsText, surveyText, gameOverText;

function preload(){
  backgroundImg = loadImage('images/background.png');
  bottleImg = loadImage('images/bottle.png');
  jellyImg = loadImage('images/jelly.png');
  scrunchedJellyImg = loadImage('images/scrunched_jelly.png');
  mirrorTurtleImg = loadImage('images/mirror_turtle.png');
  oilImg = loadImage('images/oil_spill.png');
  bagImg = loadImage('images/plastic_bag.png');
  swimTurtleImg = loadImage('images/swimturtle.png');
	sodaImg = loadImage('images/6pack.png');
	strawImg = loadImage('images/straw.png');
  turtleImg = loadImage('images/turtle.png');
  deadTurtleImg = loadImage('images/deadTurtle.png');
  netImg = loadImage('images/net.png');
  hatImg = loadImage('images/pirateHat.png');
  pirateTurtle = loadImage('images/pirate.png');
  defaultPirateTurtle = loadImage('images/defaultPirate.png');

  loadText();
}

function loadText(){
  descriptionText = "An estimated 14 billion pounds of plastic is deposited into the ocean every year, posing a threat to the entire ocean ecosystem. Part of these endangered species are turtles. \n\nOver 1,000,000 marine animals, including over 1,000 turtles, are killed each year due to plastic waste such as fishing nets, six pack rings from canned drinks, plastic bags, and most infamously, plastic straws.";

  instructionsText = "Welcome aboard, Cap'n Scutes! You will be faced with distinguishing jellyfish from plastic bags, plastic utensils, avoiding fishing nets, and oil spills. For every three plastic items you consume, you lose a life. Run into three obstacles, and the game is over! \n\nUse the arrow keys to navigate the choppy waters! Psst... keep an eye out for your pirate hat! It will protect you from one obstacle.";
  
  surveyText = "Your answer to the following question determines the difficulty level of the game. The more plastic you've used, the more obstacles that will come your way! \n\nClick next to start swimming after answering: How many plastic utensils, cups, bottles, or bags did you use today?";

  gameOverText = "Game over! While you can restart this game, millions of marine animals face this struggle every single day, and the consequences of ingesting plastic are irreversible. Plastic can release toxic chemicals, entangle animals, and take up precious space within their stomaches, causing them to starve. \n\nReduce your plastic usage, reuse items when you can, and recycle to help save our ocean ecosystem.";
}


//----------OBSTACLE CLASS--------

let trash = -parseInt(localStorage.getItem('slider'));

class Obstacle{
  constructor(x, t){
    var rng = random();
    this.isJelly = false;
    this.isHat = false;
    if(rng < map(trash,-5,0,0.25,0.5)){
      this.setImage(0);
      this.isJelly = true;
    }else if(rng < map(trash,-5,0,0.95,0.99)){
      this.setImage(Math.floor(random(1,7)));
    }else{
      this.setImage(7);
      this.isHat = true;
    }
    this.initX = x;
    this.size = createVector(this.image.width,this.image.height);
    this.p = createVector(x, random(164, height-this.size.y));
    this.v = createVector(-random(5,10), 0);
    this.turtle = t;
		this.enable = true;
  }
  setImage(i){
    this.obsArr = [jellyImg,
                    bottleImg,
                    oilImg,
                    bagImg,
                    sodaImg,
                    strawImg,
										netImg,
                    hatImg];
    this.image = this.obsArr[i];
    this.image.resize(150, 0);
  }
  draw(){
    image(this.image,this.p.x, this.p.y);
    this.checkCollision();
  }
  checkCollision(){
    var isColliding = collideRectRect(this.p.x,this.p.y,this.size.x,this.size.y, this.turtle.p.x, this.turtle.p.y, this.turtle.size.x, this.turtle.size.y);
    if(!isColliding || !this.enable) return;
    if(this.isJelly){
      this.turtle.score++;
      if(this.turtle.isPirate)
        this.turtle.score++;
		}else if (this.isHat){
      if(turtle.isPirate) this.turtle.score++;
      else{
        this.turtle.setImage(defaultPirateTurtle, pirateTurtle);
        turtle.isPirate = true;
      }
		}
    else{
      if(this.turtle.isPirate){
		    this.turtle.setImage(mirrorTurtleImg,swimTurtleImg);
        this.turtle.isPirate = false;
      }
			else this.turtle.lives--;
    }
    this.enable = false;
  }
  move(){
    if (!this.enable) this.p.set(this.initX, random(height));
    this.p.add(this.v);
    if(this.p.x + this.size.x < 0){
      this.p.set(this.initX*1.05, random(164, height-this.size.y));
    }
  }
}

//--------------TURTLE CLASS--------------

class Turtle {
  constructor(px, py, vy) {
    this.isPirate = false;
    this.setImage(mirrorTurtleImg,swimTurtleImg);
    this.updateImage(0);
    this.p = createVector(px, py);
    this.v = vy;
    this.size = createVector(this.image.width, this.image.height);
		this.lives = 3;
    this.score = 0;
  }
  updateImage(fc) {
    this.image = Math.floor(fc/10)%2 == 0 ? this.defaultImg : this.swimImg;
    this.image.resize(200,0);
  }
  setImage(img1, img2){
    this.defaultImg = img1;
    this.swimImg = img2;
  }
  move(fx, fy){
    this.p.set(fx*this.v + this.p.x, fy*this.v + this.p.y);
  }
  show(){
    image(this.image, this.p.x, this.p.y);
  }
}