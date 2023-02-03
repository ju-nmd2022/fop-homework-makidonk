let colors = [color(144, 88, 86), color(155, 200, 255), color(115, 250, 155)];
const rectWidth = 10;
let centerColors = [];

function generateColor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  return color(r, g, b);
}
frameRate(30);
function draw() {
  noStroke();

  for (let i = 0; i < colors.length; i++) {
    fill(colors[i]);
    rect(i * rectWidth, 0, rectWidth, height);
  }

  

  const newColor = generateColor();
  colors.push(newColor);

  if (colors.length > 40) {
    colors.shift();
  }
}

//try making a gradient
