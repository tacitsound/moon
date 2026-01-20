function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  drawTarget(width/2, height/2);
}

function drawTarget(x, y) {
  fill(200, 0, 50); 
  strokeWeight(3);
  stroke(255, 255, 255);
  ellipse(width/2, height/2, 100, 100);
  fill(20, 200, 0);
  ellipse(width/2, height/2, 66, 66);
  fill(0, 150, 180);
  ellipse(width/2, height/2, 33, 33)
}