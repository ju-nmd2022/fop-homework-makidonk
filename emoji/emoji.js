translate(200, 200);
let x = 0;
let y = 0;
let s = 0.5;
let speech = "hello";
rotate(0);

scale(s);
describe("emoji face");
describeElement("shadow face");
noStroke();
fill(200, 100, 0);
circle(x, y, 250);
describeElement("face");
noStroke();
fill(255, 255, 0);
circle(x, y, 230);

describeElement("blush");
fill(255, 130, 150);
ellipse(x + 70, y + 10, 50, 25);
ellipse(x - 70, y + 10, 50, 25);

function heart(x, y) {
  noStroke();
  fill(255, 0, 0);
  circle(x + 70, y - 110, 40);
  circle(x + 105, y - 110, 40);
  circle(x + 83, y - 100, 20);
  triangle(x + 57, y - 95, x + 118, y - 95, x + 87, y - 60);
}

//hearts
heart(0, 0);
heart(-200, 145);
heart(20, 170);

describeElement("eyes");
push();
translate(4, 0);
push();
stroke(200, 90, 0);
strokeWeight(13);
curve(x - 50, y + 50, x + 20, y - 10, x + 60, y - 5, x + 70, y + 20);
translate(90, 0);
curve(x - 50, y + 50, x - 120, y - 10, x - 160, y - 5, x - 170, y + 20);
pop();

describeElement("mouth");
push();
stroke(200, 90, 0);
fill(200, 90, 0);
strokeWeight(0);
translate(15, 0);
curve(x - 110, y - 210, x - 55, y + 40, x + 15, y + 40, x + 40, y - 260);
stroke(200, 90, 0);
fill(255, 255, 0);
strokeWeight(0);
curve(x - 110, y - 50, x - 55, y + 40, x + 15, y + 40, x + 40, y - 50);
pop();

describeElement("eyebrows");
strokeWeight(8);
noFill();
stroke(200, 90, 0);
translate(5, 0);
curve(x - 50, y - 20, x + 20, y - 50, x + 70, y - 40, x + 150, y + 20);
push();
strokeWeight(8);
noFill();
stroke(200, 90, 0);
translate(480, 0);
curve(x - 450, y - 20, x - 520, y - 50, x - 570, y - 40, x - 650, y + 20);
pop();
pop();

push();
translate(-180, -230);
//speech bubble
strokeWeight(1);
stroke(0, 0, 0);
fill(255, 255, 255);
beginShape();
vertex(115, 110);
vertex(100, 80);
vertex(60, 80);
bezierVertex(10, 80, 10, 20, 60, 20);
vertex(200, 20);
bezierVertex(250, 20, 250, 80, 200, 80);
vertex(125, 80);
vertex(115, 110);
endShape();
noStroke();
textSize(40);
textFont("Courier");
fill(255, 0, 0);
text(speech, 55, 62);
pop();
