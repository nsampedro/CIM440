var eyeSize = 20;
var mouthX = 70;
var canvasSize = 500;
var midButton = 15;
var midScreen = 225;


function setup() {
  // put setup code here
  createCanvas(canvasSize,500);
  background(0,0,255);
}

function draw() {
  // put drawing code here

  fill("white");
    ellipse(midScreen,100,100,100);// top of snowman

fill("white");
ellipse(midScreen,midScreen,150,150);//middle of snowman

fill("white");
ellipse(midScreen,400,200,200);//bottom of snowman

fill("black");
ellipse(245,85,eyeSize,eyeSize);
ellipse(205,85,eyeSize,eyeSize);//black eyes

fill(255,204,100);
triangle(midScreen,100,215,100,220,110);//nose

fill("black");
ellipse(225,190,midButton,midButton);//top button
ellipse(225,230,midButton,midButton);//middle middle button
ellipse(midScreen,270,midButton,midButton);//bottom button

strokeWeight(3)
line(320,150,300,210);//right arm
line(153,200,130,140);//left arm



}//end of drawing
