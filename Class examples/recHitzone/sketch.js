var hitX = 200;
var hitY = 200;
var hitW = 100;
var hitH = 50;

function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  background(255);
  //&& all statement have to be true
  if(mouseX > hitX && mouseX < hitX + hitW && mouseY > hitY && mouseY < hitY +hitH){
    console.log("In rectangle");
    fill(255,0,0);
    ellipse(100,300,20,20);

  }else{
    console.log("Rectangle out");
    fill(255,255,255);
  }


  rect(hitX,hitY,hitW,hitH);
}
