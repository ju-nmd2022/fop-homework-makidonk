let img1, img2, img3;
let bildArray = [];
let counter = 0;

function preload() {
  img1 = loadImage("Artboardpd.png");
  img2 = loadImage("Artboardpd.png");
  img3 = loadImage("Artboardnn.png");
  img4 = loadImage("Artboardnn.png");
  bildArray.push(img1, img2, img3, img4);
}

function setup() {
  pixelDensity(1);
  createCanvas(1000, 1000);
  frameRate(10);

  // Resize the images
  /*for (let i = 0; i < bildArray.length; i++) {
    bildArray[i].resize(bildArray[i].width / 2, bildArray[i].height / 2);
  }*/
}

let bildX = 0;
let bildY = 0;

function draw() {
  background(50, 50, 50);
  image(bildArray[counter], bildX, bildY);
  counter = (counter + 1) % bildArray.length;
  //bildX = bildX + 4;
}
