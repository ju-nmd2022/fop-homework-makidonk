/*let x = 0;
let y = 0;
let s = 1;
translate(200, 200);
rotate(0);
scale(s);
*/
function emoji(x, y, s) {
  //face
  strokeWeight(10 * s);
  stroke(200, 100, 0);
  fill(255, 255, 0);
  circle(x, y, 230 * s);

  //blush
  noStroke();
  fill(255, 130, 150);
  ellipse(x + 70 * s, y + 10 * s, 50 * s, 25 * s);
  ellipse(x - 70 * s, y + 10 * s, 50 * s, 25 * s);

  //hearts
  function heart(x, y) {
    noStroke();
    fill(255, 0, 0);
    circle(x + 70 * s, y - 110 * s, 40 * s);
    circle(x + 105 * s, y - 110 * s, 40 * s);
    circle(x + 83 * s, y - 100 * s, 20 * s);
    triangle(
      x + 57 * s,
      y - 95 * s,
      x + 118 * s,
      y - 95 * s,
      x + 87 * s,
      y - 60 * s
    );
  }
  heart(x, y);
  heart(x - 200 * s, y + 145 * s);
  heart(x + 20 * s, y + 170 * s);

  //eyes
  push();
  translate(4 * s, 0);
  push();
  stroke(200, 90, 0);
  strokeWeight(13 * s);
  curve(
    x - 50 * s,
    y + 50 * s,
    x + 20 * s,
    y - 10 * s,
    x + 60 * s,
    y - 5 * s,
    x + 70 * s,
    y + 20 * s
  );
  translate(90 * s, 0);
  curve(
    x - 50 * s,
    y + 50 * s,
    x - 120 * s,
    y - 10 * s,
    x - 160 * s,
    y - 5 * s,
    x - 170 * s,
    y + 20 * s
  );
  pop();

  //mouth
  push();
  stroke(200, 90, 0);
  fill(200, 90, 0);
  strokeWeight(0);
  translate(15 * s, 0);
  curve(
    x - 110 * s,
    y - 210 * s,
    x - 55 * s,
    y + 40 * s,
    x + 15 * s,
    y + 40 * s,
    x + 40 * s,
    y - 260 * s
  );
  stroke(200, 90, 0);
  fill(255, 255, 0);
  strokeWeight(0);
  curve(
    x - 110 * s,
    y - 50 * s,
    x - 55 * s,
    y + 40 * s,
    x + 15 * s,
    y + 40 * s,
    x + 40 * s,
    y - 50 * s
  );
  pop();

  //eyebrows
  strokeWeight(8 * s);
  noFill();
  stroke(200, 90, 0);
  translate(5 * s, 0);
  curve(
    x - 50 * s,
    y - 20 * s,
    x + 20 * s,
    y - 50 * s,
    x + 70 * s,
    y - 40 * s,
    x + 150 * s,
    y + 20 * s
  );
  push();
  translate(480 * s, 0);
  curve(
    x - 450 * s,
    y - 20 * s,
    x - 520 * s,
    y - 50 * s,
    x - 570 * s,
    y - 40 * s,
    x - 650 * s,
    y + 20 * s
  );
  pop();
  pop();
}

/* bigger or smaller */
function draw() {
  clear();
  emoji(width / 2, height / 2, Math.max(0.1, mouseX / width));
}

/* animation or drawing
let x = 0;
let s = 0.5;
let y = 0;
let emojiRotation = 0;
function draw() {
  clear();
  push();
  translate(x, y);
  rotate(emojiRotation);
  emoji(mouseX, mouseY, s);
  pop();

  if (s > 0) {
    s = s - 0.006;
  }
  x = x + 2;
  y = x + 1; 

  emojiRotation = emojiRotation + 0.03;
}*/
