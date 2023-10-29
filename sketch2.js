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

  wiese = new map_tile("Wiese", loadImage("Wiese.png"), new Array(new menueOption("Baue Solarkraftwerk.", solar)));
  solar = new map_tile("Solarkraftwerk", loadImage("Solar.png"));
  wald = new map_tile("Wald", loadImage("Wald.png"), new Array(new menueOption("Zerstöre Wald.", wiese)));
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
      if (noise(x * noiseScale + 1, y * noiseScale) > 0.6) {
        map[x + y * sizex] = wasser;
      }
    }
  }
}

let xtile;
let ytile;

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
      xtile = parseInt(mouseX / tilesize);
      ytile = parseInt(mouseY / tilesize);
      text(map[xtile + ytile * sizex].name, 10, sizey * tilesize + 20);
    }
  } else {
  let menueOptionsText;
  for (let i = 0; i < map[xtile + ytile * sizex].menueOptions.length; i++) {
    menueOptionsText = menueOptionsText + " " * map[xtile + ytile * sizex].menueOptions[i]; 	
  }
    text(menueOptionsText, 10, sizey * tilesize + 20);
  }
  image(Select, xtile * tilesize, ytile * tilesize, tilesize, tilesize);
}

class map_tile {
  constructor(name, image, menueOptions) {
    this.name = name;
    this.image = image;
    this.menueOptions = menueOptions;
  }
}

function keyPressed() {
  if (keyCode === 88) {
    menueopen = false;
  }
}

function mouseClicked() {
  menueopen = true;
}

class menueOption {
  constructor(text, newTile) {
  	this.text = text;
  	this.newTile = newTile;
  }
}
