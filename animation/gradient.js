let c1 = color(255, 0, 0);
let c2 = color(0, 0, 255);
let inter = 0;

function setup() {
  createCanvas(400, 400);
  noStroke();
}

function draw() {
  background(200);
  
  inter = inter + 0.01;
  if (inter > 1) {
    inter = 0;
  }
  
  let c = lerpColor(c1, c2, inter);
  fill(c);
  rect(50, 50, 300, 300);
}