var mouth = 1;
var points = 0;
var title = { 
  txt: "good job bud",
  x: -300,
  y: 300,
  
}


function setup() {
  createCanvas(960, 720);
  mouth = parseInt(random(1,5));
  noCursor();
  


}

function draw() {
  background(183, 167, 240);
  
  
  noStroke;
  cat();
  
  fill(0);
  if (mouth == 1) {
    triangle(100, 600, 120, 580, 140, 600);
  } else if (mouth == 2) {
    triangle(340, 600, 360, 580, 380, 600);
  } else if (mouth == 3) {
    triangle(580, 600, 600, 580, 620, 600);
  } else if (mouth == 4) {
    triangle(820, 600, 840, 580, 860, 600);
  }
  fish(); 
  score();
  fin();

}

   

function mousePressed() {
  if (mouth == 1 && mouseX < 140 && mouseX > 100 && mouseY < 600 && mouseY > 580) {
    setTimeout(function(){
      mouth = parseInt(random(1,5));
      points = points + 1
    }, 500);
  } else if(mouth == 2 && mouseX <380 && mouseX > 340 && mouseY < 600 && mouseY > 580) {
    setTimeout(function(){
      mouth = parseInt(random(1,5));
      points = points + 1

    }, 500);
  } else if(mouth == 3 && mouseX <610 && mouseX > 580 && mouseY < 600 && mouseY > 580) {
    setTimeout(function(){
      mouth = parseInt(random(1,5));
      points = points + 1
    }, 500);
  } else if(mouth == 4 && mouseX <860 && mouseX > 820 && mouseY < 600 && mouseY > 580){
    setTimeout(function(){
      mouth = parseInt(random(1,5));
      points = points + 1
    }, 500);  
  }
}

function fish(){ 
  //ellipseMode(CORNER);
  fill(248, 200, 238);
  strokeWeight(0);
  ellipse(mouseX, mouseY, 20, 8);
  triangle(mouseX+5, mouseY, mouseX+15, mouseY-8, mouseX+15, mouseY+8); 
}
  
function cat() {
  fill(255);
  strokeWeight(0);
  rect(740, 520, 200, 100);
  triangle(740, 480, 780, 520, 740, 520)
  triangle(900,520, 940, 480, 940, 520);
  fill (0);
  rect(780, 560, 15, 15);
  rect(880, 560, 15, 15);
  strokeWeight(2);
  line(730, 580, 760, 585);
  line(730, 600, 760, 595);
  line(920, 585, 950, 580);
  line(920, 595, 950, 600);
  
  fill(255);
  strokeWeight(0);
  rect(260, 520, 200, 100);
  triangle(260, 480, 300, 520, 260, 520)
  triangle(420,520, 460, 480, 460, 520);
  fill (0);
  rect(300, 560, 15, 15);
  rect(400, 560, 15, 15);
  strokeWeight(2);
  line(250, 580, 280, 585);
  line(250, 600, 280, 595);
  line(440, 585, 470, 580);
  line(440, 595, 470, 600);
  
  
  fill(255);
  strokeWeight(0);
  rect(500, 520, 200, 100);
  triangle(500, 480, 500, 520, 500, 520);
  triangle(660,520, 700, 480, 700, 520);
  fill (0);
  rect(540, 560, 15, 15);
  rect(640, 560, 15, 15);
  strokeWeight(2);
  line(490, 580, 520, 585);
  line(490, 600, 520, 595);
  line(680, 585, 710, 580);
  line(680, 595, 710, 600);
  
  fill(255);
  strokeWeight(0);
  rect(20, 520, 200, 100);
  triangle(20, 480, 60, 520, 20, 520)
  triangle(180,520, 220, 480, 220, 520);
  fill (0);
  rect(60, 560, 15, 15);
  rect(160, 560, 15, 15);
  strokeWeight(2);
  line(10, 580, 40, 585);
  line(10, 600, 40, 595);
  line(200, 585, 230, 580);
  line(200, 595, 230, 600);
} 

function score(){
  textSize(80);
  fill(248, 200, 238);
  text(points, 880, 100);
  text("feed the cat", width/8, height/4)
 
}


 
function fin() {
  if(points == 10){ 
  fill(248, 200, 238);
  rect(0, 0, width, height);
  fill(183, 167, 240);
  text(title.txt, title.x, title.y);
  title.x = title.x + 6;

  setTimeout(function (){points = 0;
  }, 4000);
  
  
  
}
}

  


