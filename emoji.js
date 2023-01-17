function setup() {
  createCanvas(500, 500);
}

function draw() {
  describe("emoji face");
  describeElement("shadow face");
  noStroke();
  fill(200, 100, 0);
  circle(250, 150, 250);
  describeElement("face");
  noStroke();
  fill(255, 255, 0);
  circle(250, 150, 230);

  describeElement("blush");
  fill(255, 130, 150);
  ellipse(320, 160, 50, 25);
  ellipse(175, 160, 50, 25);

  describeElement("red heart top right");
  noStroke();
  fill(255, 0, 0);
  circle(320, 40, 40);
  circle(355, 40, 40);
  circle(338, 50, 20);
  triangle(307, 55, 368, 55, 338, 90);

  describeElement("red heart left");
  noStroke();
  fill(255, 0, 0);
  circle(120, 180, 40);
  circle(155, 180, 40);
  circle(138, 190, 20);
  triangle(107, 195, 168, 195, 138, 230);

  describeElement("red heart bottom right");
  noStroke();
  fill(255, 0, 0);
  circle(340, 210, 40);
  circle(375, 210, 40);
  circle(358, 220, 20);
  triangle(327, 225, 388, 225, 358, 260);

  push();
  translate(4, 0);

  describeElement("eyes");
  push();
  stroke(200, 90, 0);
  strokeWeight(13);
  curve(200, 200, 270, 140, 310, 145, 320, 170);

  stroke(200, 90, 0);
  strokeWeight(13);
  translate(90, 0);
  curve(200, 200, 130, 140, 90, 145, 80, 170);
  pop();

  describeElement("mouth");
  push();
  stroke(200, 90, 0);
  fill(200, 90, 0);
  strokeWeight(0);
  translate(15, 0);
  curve(140, -90, 195, 190, 265, 190, 290, -90);

  stroke(200, 90, 0);
  fill(255, 255, 0);
  strokeWeight(0);
  curve(140, 100, 195, 190, 265, 190, 290, 100);
  pop();

  describeElement("eyebrows");
  strokeWeight(8);
  noFill();
  stroke(200, 90, 0);
  translate(5, 0);
  curve(200, 130, 270, 100, 320, 110, 400, 170);
  push();
  strokeWeight(8);
  noFill();
  stroke(200, 90, 0);
  translate(480, 0);
  curve(-200, 130, -270, 100, -320, 110, -400, 170);
  pop();

  pop();
}
