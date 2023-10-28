let sizex = 24;
let sizey = 18;
let tilesize = 40;
let map = [];
let Solar;
let Select;
let Wiese;

function setup() {
  createCanvas(sizex * tilesize, sizey * tilesize);

  Solar = loadImage("Solar.png");
  Select = loadImage("Select.png");
  Wiese = loadImage("Wiese.png");

  map = new Array();

  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
      map.push(new map_tile(Wiese));
    }
  }
}

function draw() {
  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
      //rect(x * tilesize, y * tilesize, tilesize, tilesize);
      image(
        map[x + y * sizex].image,
        x * tilesize,
        y * tilesize,
        tilesize,
        tilesize
      );
    }
  }

  if (mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
    x = parseInt(mouseX / tilesize);
    y = parseInt(mouseY / tilesize);
    image(Select, x * tilesize, y * tilesize, tilesize, tilesize);
    if (mouseIsPressed) {
      map[x + y * sizex].image = Solar;
    }
  }
}

class map_tile {
  constructor(image) {
    this.image = image;
  }
}

