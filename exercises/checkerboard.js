const size = 30;
const length = 10;

background("gray");

for (x = 0; x < length; x++) {
  for (y = 0; y < length; y++) {
    if ((y % 2 === 0 && x % 2 === 0) || (y % 2 === 1 && x % 2 === 1)) {
      fill(0, 0, 0);
    } else {
      fill(255, 255, 255);
    }

    rect(x * size, y * size, size);
  }
}
