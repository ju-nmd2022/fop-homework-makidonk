let speech = "hello";

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
