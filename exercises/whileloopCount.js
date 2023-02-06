let x = 0;
let y = 0;

background(255, 255, 255);

while (x < width) {
  line(x, 0, x, height);
  x = x + 20;

}

while (y < height) {
    line(0, y, width, y);
    y = y + 20;
  }