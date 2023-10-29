let wiese
let wueste
let waldUpscaled
let wald
let geradeSchiene
let Hintergrund = false
let solarkraftwerk
let tileSize = 80
let tileArray = []

function preload() {
  wiese = loadImage("klimathon-wiese-upscale.png");
  wueste = loadImage("klimathon-wueste-upscale.png");
  waldUpscaled = loadImage("klimathon-wald-upscaled.png");
  wald = loadImage("klimathon-wald.png");
  geradeSchiene = loadImage("klimathon-zugschiene-gerade-upscaled.png");
  solarkraftwerk = loadImage("klimathon-solarkraftwerk-schwarz-grau.png")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  for(imgY=0; imgY<window.innerHeight; imgY+=tileSize) {
    for(imgX=0; imgX<window.innerWidth; imgX+=tileSize) {
      tileArray.push(wiese)
    }
  }
  console.log(tileArray)
}

function draw() {
  for(imgY=0; imgY<window.innerHeight; imgY+=tileSize) {
    for(imgX=0; imgX<window.innerWidth; imgX+=tileSize) {
      image(tileArray[imgX/80+imgY], imgX, imgY, tileSize, tileSize);
    }
  }
  //image(wald, mouseX-10, mouseY-10)
  if(mouseIsPressed) {
    //image(waldUpscaled, parseInt(mouseX/80)*80, parseInt(mouseY/80)*80, 80, 80)
    //image(wueste, mouseX-10, mouseY-10, 80, 80)
    image(wueste, parseInt(mouseX/tileSize)*tileSize, parseInt(mouseY/tileSize)*tileSize, tileSize, tileSize)
  }
  image(solarkraftwerk, parseInt(mouseX/tileSize)*tileSize, parseInt(mouseY/tileSize)*tileSize, tileSize, tileSize)
}