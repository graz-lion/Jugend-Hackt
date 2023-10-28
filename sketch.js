let wiese
let wueste
let waldUpscaled
let wald

function setup() {
  wiese = loadImage("klimathon-wiese-upscale.png");
  wueste = loadImage("klimathon-wueste.png");
  waldUpscaled = loadImage("klimathon-wald-upscaled.png")
  wald = loadImage("klimathon-wald.png")
  createCanvas(window.innerWidth, window.innerHeight);
}

function draw() {
  image(wald, mouseX-10, mouseY-10)
  if(mouseIsPressed) {
    image(waldUpscaled, mouseX-80, mouseY-80, 160, 160)
    image(wueste, mouseX-10, mouseY-10, 80, 80)
  }
}