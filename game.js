let gameStarted = true;
let win1, win2, turtleHeight, lives = 0, score = 0;
var level = [];
let descriptionText, instructionsText, surveyText, winText, gameOverText;

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function preload(){
  turtleImg = loadImage('images/turtle.png'); //1573x984
  mirrorTurtleImg = loadImage('images/mirror_turtle.png');
  swimTurtleImg = loadImage('images/swimturtle.png');
  backgroundImg = loadImage('images/background.png');
	bagImg = loadImage('images/bag.png');
  bottleImg = loadImage('images/bottle.png');
  loadText();
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  turtleHeight = height/2;
	for (let i = 0; i < 100; i++){
		let o = new Obstacle(width + i*width/3);
		level.push(o);
	}
}

function draw() {
  background(backgroundImg);
  if (gameStarted){
    keys();
    mirrorTurtleImg.resize(262, 164);
    swimTurtleImg.resize(262,172);

    textSize(40);
    text(`Lives: ${lives}`, 10, 50);
    text(`Score: ${score}`, width-300, 50);

    //scale(-1,1);
    if((Math.floor(frameCount/10))%2 == 0){
      image(mirrorTurtleImg, width/8, turtleHeight);
    }
    else{
      image(swimTurtleImg, width/8, turtleHeight);
    }
          
    //scale(-1,1);
    for (let o of level){
      o.draw();
      o.move();
    }
  }
}


function keys() {
  //bottom paddle, move using left and right arrow
  if (keyIsDown(UP_ARROW) && turtleHeight > 164) turtleHeight -= 10;
  if (keyIsDown(DOWN_ARROW) && turtleHeight < height-164) turtleHeight += 10;
}