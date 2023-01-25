let lastX = 0;
let lastY = 0;
let s = 10;
let r = 255;
let g = 255;
let b = 0;

//colors
fill(255, 0, 0);
rect(100, 100, 50);
fill(255, 255, 0);
rect(200, 100, 50);
fill(0, 255, 255);
rect(300, 100, 50);

//sizes
fill(255, 255, 255);
ellipse(450, 200, 40);
fill(255, 255, 255);
ellipse(450, 250, 20);

function mouseClicked() {
  if (100 < mouseX)
    if (mouseX < 150)
      if (mouseY < 150)
        if (120 < mouseY) {
          r = 255;
          g = 0;
          b = 0;
        }
  if (200 < mouseX)
    if (mouseX < 250)
      if (mouseY < 150)
        if (120 < mouseY) {
          r = 255;
          g = 255;
          b = 0;
        }
  if (300 < mouseX)
    if (mouseX < 350)
      if (mouseY < 150)
        if (120 < mouseY) {
          r = 0;
          g = 255;
          b = 255;
        }
  if (430 < mouseX)
    if (mouseX < 470)
      if (450 < mouseY)
        if (mouseY < 220) {
          s = 40;
        }
}

function mouseDragged() {
  strokeWeight(s);
  stroke(r, g, b);
  line(lastX, lastY, mouseX, mouseY);

  lastX = mouseX;
  lastY = mouseY;
}
