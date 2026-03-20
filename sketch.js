
let raindrops = [];
let gravity; 
let wind;

function  setup(){
    createCanvas(1200, 680);
    for (let i = 0; i < 10000; i++) {
        raindrops[i] = new Raindrop();
    }
   gravity = createVector(0, 0);
   wind = createVector(2, 0);
}

function draw(){
  let windXAmount = map(mouseX, 0, width, -0.05, 0.05);
  let windYAmount = map(mouseY, 0, height, -0.05, 0.05);
  wind.set(windXAmount, windYAmount);
  background(0);
    for (let i = 0; i < raindrops.length; i++) {
      raindrops[i].update();
      raindrops[i].show(); 

      
    }

}


class Raindrop {
  constructor() {
    // This code runs once when an instance is created.

    this.location = createVector(width/2, height/2);
    this.sizeW = 100;
    this.sizeH = 2;
    noStroke
    this.age = 0;
    this.velocity = p5.Vector.random2D();
    this.from = color(180, 0, 180);
    this.to = color(69, 156, 160);
  }

  show() {
    // This code runs once when .show() is called.
    this.age++;
    let lerpAmount = map(this.age, 0, 240, 0, 1);
    let fillColor = lerpColor(this.from, this.to, lerpAmount);
    fill(fillColor);
    rect(this.location.x, this.location.y, this.sizeW, this.sizeH);
  }

  update() {
    // This code runs once when .update() is called.
    this.velocity.add(gravity);
    this.velocity.add(wind);
    this.location.add(this.velocity);
    if(this.location.y > height || this.location.y < 0){
      this.birth();
    }
    if(this.location.y > width || this.location.x < 0){
      this.birth();
    }
  }

  birth(){
    this.location = createVector(width/2, height/2);
    this.velocity = p5.Vector.random2D();
    this.age = 0;

  }
}


