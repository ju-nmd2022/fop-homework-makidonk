let lastX = 0;
let lastY = 0;
let s = 20;
let r = 255;
let g = 255;
let b = 0;
let mouseIsActive = false;

function colors(){
  strokeWeight(2);
  stroke(0,0,0);
fill(255, 0, 0);
rect(100, 100, 50);
fill(255, 255, 0);
rect(200, 100, 50);
fill(0, 255, 255);
rect(300, 100, 50);
}

function sizes() {
  strokeWeight(2);
  stroke(0,0,0);
  fill(255, 255, 255);
  ellipse(450, 200, 40);
  fill(255, 255, 255);
  ellipse(450, 250, 20);
  }

function mouseClicked() {
  if (100 < mouseX && mouseX < 150 && mouseY < 150 && 120 < mouseY) {
    r = 255;
    g = 0;
    b = 0;
  }
  if (200 < mouseX && mouseX < 250 && mouseY < 150 && 120 < mouseY) {
    r = 255;
    g = 255;
    b = 0;
  }
  if (300 < mouseX && mouseX < 350 && mouseY < 150 && 120 < mouseY) {
  
    r = 0;
    g = 255;
    b = 255;
  }
  if (430 < mouseX && mouseX < 470 && 220 > mouseY && mouseY > 180) {
    s = 40;
  }
  if (441 < mouseX && mouseX < 459 && 259 > mouseY && 241 < mouseY) {
    s = 20;

  }
}
background(255,255,255);
function draw() {
  
  fill(r, g, b);
  ellipse(450, 50, s);
  strokeWeight(s);
  stroke(r, g, b);
  if (mouseIsPressed) {
    if (mouseIsActive) {
      line(lastX, lastY, mouseX, mouseY);
    }
    lastX = mouseX;
    lastY = mouseY;
    mouseIsActive = true;
  } else {
    mouseIsActive = false;
  }

  colors();
  sizes();
 

}
