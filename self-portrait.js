function setup() {
  createCanvas(500, 500);
}
function draw() {
  describeElement("hair");
  fill(95, 73, 56);
  rect(140, 150, 230, 240);

  describe("self portrait");
  describeElement("face");
  noStroke();
  fill(193, 165, 143);
  circle(250, 180, 200);
  describeElement("face shadow");
  fill(255, 212, 191);
  circle(260, 180, 200);

  push();
  describeElement("bangs left");
  fill(95, 73, 56);
  rotate(-0.65);
  translate(-50, 100);
  ellipse(140, 110, 150, 70);
  pop();

  push();
  describeElement("bangs left");
  fill(95, 73, 56);
  rotate(0.65);
  translate(170, -200);
  ellipse(150, 100, 150, 70);
  pop();

  describeElement("left ear");
  fill(193, 165, 143);
  circle(155, 175, 40);
  fill(255, 212, 191);
  circle(159, 175, 36);
  describeElement("right ear");
  fill(255, 212, 191);
  circle(358, 175, 36);
}
