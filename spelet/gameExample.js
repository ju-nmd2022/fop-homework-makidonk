let img1, img2, img3;
let bildArray = [];
let counter = 0;

//let img1 = document.getElementById("bild1");

function preload() {
  img1 = loadImage("Artboardpng.png");
  img2 = loadImage("Artboardpng.png");
  img3 = loadImage("Artboardpng.png");
  img4 = loadImage("Artboardpng.png");
  bildArray.push(img1, img2, img3, img4);
}

function setup() {
  //pixelDensity(2);
  createCanvas(1000, 700);
  frameRate(10);

  // Resize the images
  /*for (let i = 0; i < bildArray.length; i++) {
    bildArray[i].resize(bildArray[i].width / 6, bildArray[i].height / 6);
  }*/
}

let bildX = 0;
let bildY = 0;

function draw() {
  background(50, 50, 50);
  noSmooth();
  image(bildArray[counter], bildX, bildY);
  counter = (counter + 1) % bildArray.length;
  bildX = bildX + 4;
}
