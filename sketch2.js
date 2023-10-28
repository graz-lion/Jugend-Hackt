let sizex = 24;
let sizey = 17;
let tilesize = 40;
let map = [];
let Solar;
let Select;
let Wiese;
let menueopen = false;
let wiese;
let solar;
let wald;
let wasser;

function setup() {
  createCanvas(sizex * tilesize, sizey * tilesize + 40);
  fill(200);
  textSize(20);
  textAlign(LEFT, CENTER);

  wiese = new map_tile("Wiese", loadImage("Wiese.png"));
  solar = new map_tile("Solarkraftwerk", loadImage("Solar.png"));
  wald = new map_tile("Wald", loadImage("Wald.png"));
  wasser = new map_tile("Wasser", loadImage("Wasser.png"));

  Select = loadImage("Select.png");

  map = new Array();
  let noiseScale = 0.2;

  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
      if (noise(x * noiseScale, y * noiseScale) > 0.5) {
        map.push(wald);
      } else {
        map.push(wiese);
      }
    }
  }
  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
      if (noise(x * noiseScale + 100, y * noiseScale) > 0.6) {
        map[x + y * sizex] = wasser;
      }
    }
  }
}

function draw() {
  background(50);
  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
      image(
        map[x + y * sizex].image,
        x * tilesize,
        y * tilesize,
        tilesize,
        tilesize
      );
    }
  }
  if (menueopen === false) {
    if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height - 40) {
      x = parseInt(mouseX / tilesize);
      y = parseInt(mouseY / tilesize);
      image(Select, x * tilesize, y * tilesize, tilesize, tilesize);
      text(map[x + y * sizex].name, 10, sizey * tilesize + 20);

      if (mouseIsPressed) {
        menueopen = true;
        map[x + y * sizex] = solar;
      }
    }
  } else {
    text("hi, welcome to the menu (x) to exit", 10, sizey * tilesize + 20);
  }
}

class map_tile {
  constructor(name, image) {
    this.name = name;
    this.image = image;
  }
}

function keyPressed() {
  console.log(keyCode);
  if (keyCode === 88) {
    menueopen = false;
  }
}

