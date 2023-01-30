let rotation = 0;
let x = 100;
let y = 100;
const velocity = 5;

function car(x, y, rotation) {
  push();
  translate(x, y);
  rotate(rotation);
  fill(100, 100, 100);
  noStroke();
  rect(-45, -35, 25, 10, 5);
  rect(20, -35, 25, 10, 5);
  rect(-45, 25, 25, 10, 5);
  rect(20, 25, 25, 10, 5);
  strokeWeight(2);
  stroke("violet");
  fill("pink");
  rect(-50, -30, 100, 60, 10);
  fill("white");
  noStroke();
  rect(20, -25, 25, 50, 10);
  pop();
}

function draw() {
  background("lightgreen");
  car(x, y, rotation);

  if (keyIsDown(39)) {
    x = x + velocity;
  } else if (keyIsDown(37)) {
    x = x - velocity;
  }
  if (keyIsDown(40)) {
    y = y + velocity;
  } else if (keyIsDown(38)) {
    y = y - velocity;
  }
}
