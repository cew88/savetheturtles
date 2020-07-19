let gameStarted = true;
let win1, win2;
var level = [];

let turtle;


function setup(){
  createCanvas(windowWidth, windowHeight);
  turtle = new Turtle(width/8, height/2, 10);
	for (let i = 0; i < 100; i++){
		let o = new Obstacle(width + i*width/3, turtle);
		level.push(o);
	}
}

function draw() {
  background(backgroundImg);
  if (gameStarted){
    keys();
    showScore();
    turtle.updateImage(frameCount);
    turtle.show();

		if (turtle.lives <= 0) gameStarted = false;

    for (let o of level){
      o.draw();
      o.move();
    }
  }
	else {
		endScreen();
	}
}

function showScore(){
  textSize(40);
  textFont('Pacifico');
  text(`Lives: ${turtle.lives}`, 10, 50);
  text(`Score: ${turtle.score}`, width-300, 50);
}

function keys() {
  if (keyIsDown(UP_ARROW) && turtle.p.y > 164) turtle.move(0,-1);
  if (keyIsDown(DOWN_ARROW) && turtle.p.y < height-turtle.size.y) turtle.move(0,1);
  if (keyIsDown(LEFT_ARROW) && turtle.p.x > 0) turtle.move(-1,0);
  if (keyIsDown(RIGHT_ARROW) && turtle.p.x < width/4) turtle.move(1,0);

}

function endScreen(){
	textSize(width/20);

	text("Game Over", width/10, height/6);
  
  win2 = createGraphics(width*0.7, 500);
  win2.fill(249, 236, 227);
  win2.noStroke();
  win2.rect(0, 0, win2.width, win2.height, 10);

  win2.image(deadTurtleImg, win2.width*2/3+10, 10, win2.width*1/3-20,(win2.width*1/3-20)*984/1573)
  win2.fill(0);
	win2.textSize(Math.max(win2.width/50, 15));
	win2.textFont('Quicksand');
  win2.text(gameOverText + `\n\nYour score : ${turtle.score}`, 50, 50, win2.width*2/3-50, win2.height-50);

  image(win2, width/10, height/4, win2.width, win2.height);

  retry = createButton("Retry ↻");
  retry.position(width/10 + 50, height * 2/3);
  retry.style("font-family", "Pacifico");
  retry.style("background-color","lightblue");
  retry.style("border","0px");
  retry.style("border-radius", "10px")
	retry.elt.style.fontSize = "2.5em";
	retry.mousePressed(reset);

  home = createButton("Home");
  home.position(width/4 - textWidth("Home")/6, height * 2/3);
  home.style("font-family", "Pacifico");
  home.style("background-color","lightblue");
  home.style("border","0px");
  home.style("border-radius", "10px")
	home.elt.style.fontSize = "2.5em";
  home.mousePressed(returnHome);
}

function reset(){
  window.open("game.html", "_self")
}

function returnHome(){
  window.open("index.html", "_self");
}
