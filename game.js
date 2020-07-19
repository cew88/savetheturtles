let gameStarted = true;
let win1, win2, lives = 0, score = 0;
var level = [];
let descriptionText, instructionsText, surveyText, winText, gameOverText;


let turtle;

function setup(){
  createCanvas(windowWidth, windowHeight);
  turtle = new Turtle(mirrorTurtleImg, width/8, height/2, 10);
	for (let i = 0; i < 100; i++){
		let o = new Obstacle(width + i*width/3, i%3, turtle);
		level.push(o);
	}
}

function draw() {
  background(backgroundImg);
  if (gameStarted){
    keys();
    showScore();
    turtle.setImage(Math.floor(frameCount/10)%2 == 0 ? mirrorTurtleImg : swimTurtleImg);
    turtle.show();

		if (turtle.lives <= 0) gameStarted = false;

    for (let o of level){
      o.draw();
      o.move();
    }
  }
	else {
		
	}
}

function showScore(){
  textSize(40);
  textFont('Pacifico');
  text(`Lives: ${turtle.lives}`, 10, 50);
  text(`Score: ${turtle.score}`, width-300, 50);
}

function keys() {
  if (keyIsDown(UP_ARROW) && turtle.p.y > 164) turtle.move(-1);
  if (keyIsDown(DOWN_ARROW) && turtle.p.y < height-164) turtle.move(1);
}

function endScreen(){
	
}