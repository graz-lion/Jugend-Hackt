let sizex = 24;
let sizey = 18;
let tilesize = 40;

function setup() {
  createCanvas(sizex * tilesize, sizey * tilesize);
  Solar = loadImage('Solar.png');
  map = new Array();
  
  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
    	
    }
  }
}

function draw() {
  background(220);

  for (let y = 0; y < sizey; y++) {
    for (let x = 0; x < sizex; x++) {
    
      //rect(x * tilesize, y * tilesize, tilesize, tilesize);
      //image(Solar, x * tilesize, y * tilesize, tilesize, tilesize);
    }
  }
}

class map_tile () {
	constructor(image) {
	this.image = image;
	console.log(image);
	}	
}
