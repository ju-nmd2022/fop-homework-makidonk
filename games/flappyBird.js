/*push();
let x = 0;
let y = 0;
let flowerX = 200;
let flowerY = 200;

translate(flowerX, flowerY);
scale(0.8);
//shaft
strokeWeight(10);
stroke("green");
line(x, y, x, 250);
noStroke();
//middle
fill("yellow");
ellipse(x, y, 30);
//pettals
function pettals(x, beeY, r, plusX, plusY) {
  push();
  fill("lightpink");
  translate(x + plusX, beeY + plusY);
  rotate(r);
  ellipse(x, beeY, 50, 30);
  pop();

  r = r + 1;
}
pettals(x, y, 0.8, 28, 28);
pettals(x, y, 1.5, 0, 39);
pettals(x, y, -0.8, -28, 28);
pettals(x, y, 3, -39, 2);
pettals(x, y, -3, 39, 2);
pettals(x, y, 1.5, 0, -39);
pettals(x, y, -0.8, 28, -28);
pettals(x, y, 0.8, -27, -28);
pop();
*/
/*
let beeY = 150;

push();
scale(0.7);
stroke("black");
noFill();
bezier(166, beeY - 13, 166, beeY - 40, 176, beeY - 50, 186, beeY - 54);
strokeWeight(5);
stroke("black");
line(118, beeY, 110, beeY);
noStroke();
fill("yellow");
ellipse(150, beeY, 60, 40);
strokeWeight(10);
stroke("black");
line(147, beeY - 19, 147, beeY + 19);
line(130, beeY - 14, 130, beeY + 14);
fill("white");
stroke("black");
strokeWeight(1);
ellipse(165, beeY, 20);
fill("black");
ellipse(170, beeY, 5);
noFill();
bezier(170, beeY - 13, 170, beeY - 40, 180, beeY - 50, 190, beeY - 50);
fill("black");
ellipse(190, beeY - 50, 4);
ellipse(186, beeY - 54, 3);
pop();
*/

//clouds
push();
let flowerX = 150;
let flowerY = 150;
noStroke();
fill("lightpink");
ellipse(flowerX - 30, flowerY - 100, 35);
ellipse(flowerX + 30, flowerY - 100, 35);
rect(flowerX - 30, flowerY - 115, flowerX + 30, flowerY - 100);
pop();
