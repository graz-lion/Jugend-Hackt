let wiese
let wueste
let waldUpscaled
let wald
let geradeSchiene
var Hintergrund = false
let solarkraftwerk

function preload() {
  wiese = loadImage("klimathon-wiese-upscale.png");
  wueste = loadImage("klimathon-wueste.png");
  waldUpscaled = loadImage("klimathon-wald-upscaled.png");
  wald = loadImage("klimathon-wald.png");
  geradeSchiene = loadImage("klimathon-zugschiene-gerade-upscaled.png");
  solarkraftwerk = loadImage("klimathon-solarkraftwerk-schwarz-grau.png")
}
function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(imgY=0; imgY<window.innerHeight; imgY+=80) {
    for(imgX=0; imgX<window.innerWidth; imgX+=80) {
      image(waldUpscaled, imgX, imgY, 80, 80);
      console.log(imgX)
    }
  }
}

function draw() {
  if(Hintergrund == false){
    
    Hintergrund = true
  }
  //image(wald, mouseX-10, mouseY-10)
  image(wiese, parseInt(mouseX/80)*80, parseInt(mouseY/80)*80, 80, 80)
  if(mouseIsPressed) {
    //image(waldUpscaled, parseInt(mouseX/80)*80, parseInt(mouseY/80)*80, 80, 80)
    //image(wueste, mouseX-10, mouseY-10, 80, 80)
    image(solarkraftwerk, parseInt(mouseX/80)*80, parseInt(mouseY/80)*80, 80, 80)
  }
}