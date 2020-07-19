let gameStarted = false;
let win1, lives = 0, score = 0;
let hit = false;
let level = [];
let next;
let page = 0, surveyAnswer = 1;

function setup(){
  createCanvas(windowWidth, windowHeight);
  win1 = createGraphics(width*0.7, 500);
  win1.fill(249, 236, 227);
  win1.noStroke();
  win1.rect(0, 0, win1.width, win1.height, 10);

  //Create button to navigate to the next page
  next = createButton("Next → ");
  next.position(win1.width*2/3-50,  height * 2/3);
  next.style("font-family", "Pacifico");
  next.style("background-color","lightblue");
  next.style("border","0px");
  next.style("border-radius", "10px")
	next.elt.style.fontSize = "2.5em";
	next.mousePressed(bp);

  //Initialize slider for page 3
  slider = createSlider(0, 5, 1);
  slider.position(50 + win1.width/5, height*4.7/8);
  slider.size(win1.width/2,20);
	slider.elt.onchange = () => {
		localStorage.setItem('slider', slider.elt.value);
		console.log(slider.elt.value);
	}
  slider.hide();

	draw_intro();
}

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
    win1.text("0", 50 + win1.width/17, height*1.55/4);
    win1.text("5+", win1.width/1.7, height*1.55/4);
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
  back.position(width/10 + 50,  height * 2/3);
  back.style("font-family", "Pacifico");
  back.style("background-color","lightblue");
  back.style("border","0px");
  back.style("border-radius", "10px")
  back.elt.style.fontSize = "2.5em";
  back.mousePressed(op);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
	draw_intro();
}