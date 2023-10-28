let wiese

function setup() {
  wiese = loadImage("klimathon-wiese-upscale.png");
  createCanvas(400, 400);
}

function draw() {
  background(100);
  image(wiese, 10, 10)
}
