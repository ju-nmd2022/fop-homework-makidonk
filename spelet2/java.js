// sketch.js
let images = [];

function preload() {
  let img = new Image();
  
  img.onload = function () {
    images.push(img);
 
  };
  img.src = document.getElementById("myImage").src;
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  image(images[0], 0, 0);
}
