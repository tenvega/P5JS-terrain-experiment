var cols, rows;
var scl = 20;
var w = 1500;
var h = 1000;

var flying = 0;

var terrain = [];

function setup() {
  createCanvas(800, 800, WEBGL);
  cols = w/ scl;
  rows = h/ scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0; //specify a default value for now
    }
  }
}

function draw() {

  flying -= 0.05;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -150, 180);
      xoff += 0.1;
    }
    yoff += 0.1;
  }


  background(60);
  translate(0, 500);
  rotateX(PI/3);
  fill(969, 90, 1, 700);
  translate(-w/2, -h/1);
  for (var y = 0; y < rows-1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x*scl, y*scl, terrain[x][y]);
      vertex(x*scl, (y+-0.5)*scl, terrain[x][y+-1]);
    }
    endShape();
  }
}
