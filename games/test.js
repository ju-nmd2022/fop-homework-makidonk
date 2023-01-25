//flower!!!!!!!!!!!!
let flowerX = 300;
let flowerY = 200;

function flower(flowerX, flowerY) {
  push();
  scale(0.8);
  let x = 0;
  let y = 0;
  let r = 1;

  //shaft
  strokeWeight(10);
  stroke("lightgreen");
  line(x, y, x, 250);
  noStroke();
  //middle
  fill("yellow");
  ellipse(x, y, 30);
  //pettals
  function pettals(x, y, r, plusX, plusY) {
    push();
    fill("white");
    translate(x + plusX, y + plusY);
    rotate(r);
    ellipse(x, y, 50, 30);
    pop();
    r = r + 0.1;
    // ROTATING?
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
}
flower(flowerX, flowerY);
ellipse(flowerX, flowerY, 30);
