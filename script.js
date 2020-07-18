let gameStarted = false;
let win1, win2, turtleHeight, lives = 0, score = 0;
let hit = false;
let level = [];
let descriptionText, instructionsText, surveyText, winText, gameOverText;
let next;
let page = 0;

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

function loadText(){
  descriptionText = "An estimate 14 billion pounds of plastic is deposited into the ocean every year, posing a threat to the entire ocean ecosystem. Part of these endangered species are turtles. \n\nOver 1,000,000 marine animals, including over 1,000 turtles, are killed each year due to plastic waste, including fishing nets, six pack rings from canned drinks, plastic bags, and most infamously, plastic straws.";

  instructionsText = "As a turtle, you will be faced with distinguishing jellyfish from plastic bags, avoiding fishing nets, plastic utensils, and oil spills. \n\nUse the ↑ key to swim closer to the surface. \nUse the ↓ key to swim deeper in the water.";
  
  surveyText = "Your answer to the following questions determines the difficulty level of the game. The more plastic you've used, the more obstacles that will come your way! For each plastic item you consume, you lose a life. Eat three plastic items, run into a fishing net, or swim through an oil spill, and the game is over!"

  winText = "Congratulations! You survived! Unfortunately, this game is the daily reality for millions of marine animals every single day. Plastic can release toxic chemicals, entangle animals, and take up precious space within their stomaches, causing them to starve. \n\n Reduce your plastic usage and recycle to help save our ocean ecosystem.";

  gameOverText = "Game over! While you can restart this game, millions of marine animals face this struggle every single day, and the consequences of ingesting plastic are irreversible. Plastic can release toxic chemicals, entangle animals, and take up precious space within their stomaches, causing them to starve. \n\n Reduce your plastic usage and recycle to help save our ocean ecosystem.";
}

function setup(){
  createCanvas(windowWidth, windowHeight);
  win1 = createGraphics(width*0.7, 500);
  win1.fill(249, 236, 227);
  win1.noStroke();
  win1.rect(0, 0, win1.width, win1.height, 10);

  turtleHeight = height/2;
	for (let i = 0; i < 100; i++){
		let o = new Obstacle(width + i*width/3, i);
		level.push(o);
	}
  next = createButton("Next");
	next.elt.style.fontSize = "3em";
	next.mousePressed(bp);

	draw_intro();
}

function draw_intro(){
	background(backgroundImg);
	win1.fill(0);
	win1.textSize(Math.max(win1.width/50, 15));
	win1.textFont('Quicksand');	
	win1.image(turtleImg, win1.width*2/3+10, 10, win1.width*1/3-20,(win1.width*1/3-20)*984/1573)
	image(win1, width/10, height/4, win1.width, win1.height);

	win1.text(descriptionText, 50, 50, win1.width*2/3-50, win1.height-50);

	// if (page == 0){
	// 	console.log('description');
		
	// }
	// if (page == 1){
	// 	win1.text(instructionsText, 50, 50, win1.width*2/3-50, win1.height-50);
	// }
	// if (page == 2){
	// 	win1.text(surveyText, 50, 50, win1.width*2/3-50, win1.height-50);
	// }

}


// function draw() {
//   background(backgroundImg);
//   if (!gameStarted){
//     textSize(Math.min(width/15, 80));
//     textFont('Pacifico');
//     text('Save the Turtles', width/10, height/6);

//     //Intro window
//     noStroke();
//     win1.fill(0);
//     win1.textSize(Math.max(win1.width/50, 15));
//     //win1.textSize(20);
//     win1.textFont('Quicksand');
//     win1.text(descriptionText, 50, 50, win1.width*2/3-50, win1.height-50);
    
//     //myButton = new Clickable(200,300);
//     //myButton.draw();
//     win1.image(turtleImg, win1.width*2/3+10, 10, win1.width*1/3-20,(win1.width*1/3-20)*984/1573)
//     image(win1, width/10, height/4, win1.width, win1.height);
//     //NEED BUTTON TO MOVE TO NEXT SCREEN
    
// 		// 
// 		// console.log(next);
// 		let wid = next.elt.offsetWidth;
//     next.position(width/10 + 158 - next.elt.clientWidth/2, height / 2 + 170);
    
		
// 		// console.log(next);

   
		
//     // textSize(50)
//     // text("Next", width/10 + 50 + 98 - textWidth("Next")/2, height / 2 + 170);
    
//   }else if (!hit){
// 		keys();
// 		mirrorTurtleImg.resize(262, 164);
//     swimTurtleImg.resize(262,172);

//     textSize(40);
//     text(`Lives: ${lives}`, 10, 50);
//     text(`Score: ${score}`, width-300, 50);

//     //scale(-1,1);
//     if((Math.floor(frameCount/10))%2 == 0){
//       image(mirrorTurtleImg, width/8, turtleHeight);
//     }
//     else{
//       image(swimTurtleImg, width/8, turtleHeight);
//     }
			
//     //scale(-1,1);
// 		for (let o of level){
// 			o.draw();
// 			o.move();
// 		}
//   }
// }


function bp(){
	page++;
	draw_intro();
  console.log("clicked");
}

