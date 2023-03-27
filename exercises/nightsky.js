let stars = [];

for (let i = 0; i < 50; i++) {
  const star = {
    x: Math.floor(Math.random() * width),
    y: Math.floor(Math.random() * height),
    alpha: Math.random(),
  };

  stars.push(star);
}

function draw() {
  background(0, 0, 0);
  noStroke();
  for (let star of stars) {
    fill(255, 255, 255, Math.abs(Math.sin(star.alpha)) * 255);
    ellipse(star.x, star.y, 3);
    star.alpha = star.alpha + 0.02;
  }
}
