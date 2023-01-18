describe("self portrait");
background(205, 225, 220);
noStroke();

describeElement("hair");
fill(95, 73, 56);
rect(140, 150, 230, 240);
fill(82, 63, 48);
rect(160, 150, 190, 240);

describeElement("neck");
fill(193, 165, 143);
rect(228, 270, 55, 35);

describeElement("shirt shadow");
push();
translate(-8, 0);
fill(168, 152, 145);
beginShape();
vertex(190, 325);
arc(190, 350, 50, 50, PI, HALF_PI);
vertex(165, 350);
vertex(180, 420);
vertex(340, 420);
vertex(350, 350);
arc(325, 350, 50, 50, 0, HALF_PI);
vertex(325, 325);
endShape(CLOSE);
pop();

describeElement("shirt");
fill(206, 193, 187);
beginShape();
vertex(190, 325);
arc(190, 350, 50, 50, PI, HALF_PI);
vertex(165, 350);
vertex(180, 420);
vertex(340, 420);
vertex(350, 350);
arc(325, 350, 50, 50, -HALF_PI, TWO_PI);
vertex(325, 325);
endShape(CLOSE);

push();
describeElement("necklace");
//shadow
push();
translate(-3, 0);
stroke(188, 172, 165);
strokeWeight(1.5);
line(222, 325, 255, 346);
line(290, 325, 255, 346);
fill(168, 152, 145);
noStroke();
beginShape();
vertex(255, 346);
bezierVertex(245, 355, 265, 355, 255, 346);
endShape();
pop();
//necklace
stroke(235, 205, 59);
strokeWeight(1.5);
line(222, 325, 255, 346);
line(290, 325, 255, 346);
fill(235, 205, 59);
noStroke();
beginShape();
vertex(255, 346);
bezierVertex(245, 355, 265, 355, 255, 346);
endShape();

pop();

describeElement("turtleneck shadow");
fill(168, 152, 145);
rect(212, 295, 88, 35, 8);

describeElement("turtleneck");
fill(206, 193, 187);
rect(220, 295, 80, 33, 8);

describeElement("stripes");
stroke(168, 152, 145);
strokeWeight(2);
line(295, 298, 295, 325);
line(288, 298, 288, 325);
line(281, 298, 281, 325);
line(274, 298, 274, 325);
line(267, 298, 267, 325);
line(260, 298, 260, 325);
line(253, 298, 253, 325);
line(246, 298, 246, 325);
line(239, 298, 239, 325);
line(232, 298, 232, 325);
line(225, 298, 225, 325);

noStroke();
describeElement("face shadow");
fill(193, 165, 143);
circle(250, 180, 200);
describeElement("face");
fill(255, 212, 191);
circle(260, 180, 200);

push();
describeElement("bangs right shadow");
fill(193, 165, 143);
translate(245, -53);
rotate(0.65);
ellipse(150, 100, 140, 65);
pop();

//eyebrows
push();
translate(0, -1);
fill(82, 63, 48);
push();
translate(2, 0);
beginShape();
vertex(274, 147);
bezierVertex(300, 146, 277, 146, 323, 145);
bezierVertex(272, 136, 308, 137, 274, 140);
endShape();
pop();
push();
translate(-3, 0);
beginShape();
vertex(238, 147);
bezierVertex(183, 146, 221, 134, 182, 148);
bezierVertex(209, 133, 194, 138, 238, 140);
endShape();
pop();
pop();

describeElement("eyes");
fill(255, 255, 255);
circle(211, 175, 45);
circle(300, 175, 45);
fill(66, 168, 168);
circle(211, 175, 32);
circle(300, 175, 32);
fill(30, 30, 30);
circle(211, 175, 20);
circle(300, 175, 20);

describeElement("cheeks");
fill(255, 212, 191);
ellipse(210, 205, 60, 30);
ellipse(300, 205, 60, 30);

describeElement("blush");
fill(243, 198, 176);
ellipse(197, 207, 50, 25);
ellipse(313, 207, 50, 25);

describeElement("nose");
fill(193, 165, 143);
ellipse(252, 200, 22, 22);
fill(255, 212, 191);
ellipse(257, 200, 20, 20);

describeElement("mouth");
push();
translate(-3, -1);
fill(222, 173, 148);
beginShape();
vertex(280, 237);
bezierVertex(276, 251, 244, 251, 240, 237);
endShape();
/*
fill(222, 173, 148);
beginShape();
vertex(240,237);
bezierVertex(255,230,260,235,260,235);
bezierVertex(260,235,270,230,280,237);
bezierVertex(273,240,248,240,240,237);
endShape();
*/
pop();

push();
describeElement("bangs right");
fill(95, 73, 56);
translate(250, -59);
rotate(0.65);
ellipse(150, 100, 150, 70);
pop();

push();
describeElement("bangs left");
fill(95, 73, 56);
translate(20, 108);
rotate(-0.65);

ellipse(140, 110, 150, 70);
pop();

push();
translate(0, 5);
describeElement("left ear");
fill(193, 165, 143);
circle(155, 175, 40);
fill(255, 212, 191);
circle(159, 175, 36);
describeElement("right ear");
fill(255, 212, 191);
circle(358, 175, 36);
pop();

describeElement("earrings");
fill(235, 205, 59);
rect(148, 195, 7, 12, 2);
rect(359, 195, 7, 12, 2);

//hairstrand
fill(95, 73, 56);
beginShape();
vertex(255, 99);
bezierVertex(230, 160, 210, 170, 165, 163);
bezierVertex(220, 160, 220, 160, 250, 99);
endShape();
