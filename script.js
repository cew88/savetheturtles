let gameStarted = true;
let win1, hello, turtleHeight
let hit = false;
function preload(){
  turtleImg = loadImage('turtle.png'); //1573x984
  mirrorTurtleImg = loadImage('mirror_turtle.png');
}
function setup(){
  createCanvas(windowWidth, windowHeight);
  win1 = createGraphics(width*0.7, 600);
  win1.background('lightblue');
  win1.fill(255);
  win1.noStroke();
  win1.rect(0, 0, win1.width, win1.height, 20);

  turtleHeight = height/2;

  hello = new Obstacle();
}

function draw() {
  background('lightblue');

  if (!gameStarted){
    textSize(Math.min(width/15, 80));
    textFont('Pacifico');
    text('Save the Turtles', width/10, height/6);

    noStroke();
    //rect(width/10, height/4, 1300, 600, 20);
    //win1.background(255);
    win1.fill(0);
    win1.textSize(Math.max(win1.width/50, 15));
    win1.textFont('Quicksand');
    win1.text("An estimate 14 billion pounds of plastic is deposited into the ocean every year, posing a threat to the entire ocean ecosystem. Part of these endangered species are turtles. \n\n\nOver 1,000,000 marine animals, including over 1,000 turtles, are killed each year due to plastic waste, including fishing nets, six pack rings from canned drinks, plastic bags, and most infamously, plastic straws.", 50, 50, win1.width*2/3-50, win1.height-50);
    
    win1.image(turtleImg, win1.width*2/3+10, 10, win1.width*1/3-20,(win1.width*1/3-20)*984/1573)
    image(win1, width/10, height/4, win1.width, win1.height);
  }
  else {
		if (!hit){
			keys();
			mirrorTurtleImg.resize(262, 164);
			image(mirrorTurtleImg, width/8, turtleHeight);
			hello.draw();
			hello.move();
		}

  }
  checkCollisions();
}


function checkCollisions(){

}

function keys() {
  //bottom paddle, move using left and right arrow
  if (keyIsDown(UP_ARROW) && turtleHeight > 0) turtleHeight -= 10;
  if (keyIsDown(DOWN_ARROW) && turtleHeight < height-164) turtleHeight += 10;
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

class Obstacle{
  constructor(){
    this.x = width+100;
    this.y = random(height);
    this.velocity = random(1, 7);
  }

  draw(){
    rect(this.x, this.y, 100, 50);
		if (this.x < width/8 + 262 && this.x + 100 > width/8 + 262){
			if (turtleHeight <= this.y + 50 && turtleHeight + 164 > this.y + 50) hit = true;
			if (turtleHeight + 164 <= this.y && turtleHeight < this.y) hit = true;
		}

  }

  move(){
    this.x-=this.velocity;
  }
}

/*
function keyPressed(){
  if (key == "ArrowUp"){
    turtleHeight -= 100;
  }
  else if (key == "ArrowDown"){
    turtleHeight += 100;
  }
}
*/