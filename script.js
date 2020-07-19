let gameStarted = false;
let win1, win2, lives = 0, score = 0;
let hit = false;
let level = [];
let descriptionText, instructionsText, surveyText, winText, gameOverText;
let next;
let page = 0, surveyAnswer = 1;

function loadText(){
  descriptionText = "An estimated 14 billion pounds of plastic is deposited into the ocean every year, posing a threat to the entire ocean ecosystem. Part of these endangered species are turtles. \n\nOver 1,000,000 marine animals, including over 1,000 turtles, are killed each year due to plastic waste such as fishing nets, six pack rings from canned drinks, plastic bags, and most infamously, plastic straws.";

  instructionsText = "As a turtle, you will be faced with distinguishing jellyfish from plastic bags, avoiding fishing nets, plastic utensils, and oil spills. \n\nUse the ↑ key to swim closer to the surface. \nUse the ↓ key to swim deeper in the water.";
  
  surveyText = "Your answer to the following questions determines the difficulty level of the game. The more plastic you've used, the more obstacles that will come your way! For each plastic item you consume, you lose a life. Eat three plastic items, run into a fishing net, or swim through an oil spill, and the game is over! \n\nClick next to start swimming after answering: How many plastic utensils, bottles, or bags did you use today?"

  winText = "Congratulations! You survived! Unfortunately, this game is the daily reality for millions of marine animals every single day. Plastic can release toxic chemicals, entangle animals, and take up precious space within their stomaches, causing them to starve. \n\n Reduce your plastic usage and recycle to help save our ocean ecosystem.";

  gameOverText = "Game over! While you can restart this game, millions of marine animals face this struggle every single day, and the consequences of ingesting plastic are irreversible. Plastic can release toxic chemicals, entangle animals, and take up precious space within their stomaches, causing them to starve. \n\n Reduce your plastic usage and recycle to help save our ocean ecosystem.";
}

function setup(){
  loadText();
  createCanvas(windowWidth, windowHeight);
  win1 = createGraphics(width*0.7, 500);
  win1.fill(249, 236, 227);
  win1.noStroke();
  win1.rect(0, 0, win1.width, win1.height, 10);

  //Create button to navigate to the next page
  next = createButton("Next → ");
  next.position(win1.width*2/3-50, 575);
  next.style("font-family", "Pacifico");
  next.style("background-color","lightblue");
  next.style("border","0px");
  next.style("border-radius", "10px")
	next.elt.style.fontSize = "2.5em";
	next.mousePressed(bp);

  //Initialize slider for page 3
  slider = createSlider(0, 5, 1);
  slider.position(width/10 + win1.width/4, 525);
  slider.size(win1.width/2,20);
  slider.hide();

	draw_intro();
} //:< :o :O :P

function draw_intro(){
	background(backgroundImg);

  //Creates beach card
	noStroke();
  win1.fill(249, 236, 227);
  win1.rect(0, 0, win1.width, win1.height, 10);

  //Create title
  textSize(Math.min(width/15, 80));
  textFont('Pacifico');
  text('Save the Turtles', width/10, height/6);
	
  //Draw turtle image
	win1.image(turtleImg, win1.width*2/3+10, 10, win1.width*1/3-20,(win1.width*1/3-20)*984/1573)

  //Set content and text specifics
	win1.fill(0);
	win1.textSize(Math.max(win1.width/50, 15));
	win1.textFont('Quicksand');
  
	if (page == 0){
    win1.text(descriptionText, 50, 50, win1.width*2/3-50, win1.height-50);
    slider.hide();
	}
	else if (page == 1){
	 	win1.text(instructionsText, 50, 50, win1.width*2/3-50, win1.height-50);
    slider.hide();
    backButton();
	}
	else if (page == 2){
	 	win1.text(surveyText, 50, 50, win1.width*2/3-50, win1.height-50);
    backButton();
    slider.show();
    win1.text("0", width/10 + win1.width/10, 312);
    win1.text("5+", width/10 + win1.width*3/4 - win1.width/7, 312);
    surveyQuestion = slider.value();
    }

  //Draws window
  image(win1, width/10, height/4, win1.width, win1.height);
}

function bp(){
  if (page < 2){
	  page++;
    draw_intro();
  }
	else{
    window.open("game.html", "_self");
  }
}
function op(){
  if (page >= 1){
	  page--;
  }
	draw_intro();
}
function backButton(){
  back = createButton("← Back");
  back.position(width/10 + 50, 575);
  back.style("font-family", "Pacifico");
  back.style("background-color","lightblue");
  back.style("border","0px");
  back.style("border-radius", "10px")
  back.elt.style.fontSize = "2.5em";
  back.mousePressed(op);
}