var eyeSize = 20;
var topCircle = 100;
var canvasSize = 500;
var midScreen = 225;
var bottomBall = "red"

var ballButton

var snowX = [];
var snowY = [];
var snowAmmount = 100;

var snowButton

function setup() {
  // put setup code here
  createCanvas(canvasSize,500);
  background(0,0,255);

ballButton = createButton("click to change color");
ballButton.position(20,20);
ballButton.mousePressed(function(){
  bottomBall="green";
});

snowButton = createButton("Click to make it snow!")
snowButton.position(300,20);
snowButton.mousePressed(function(){

});




}

function draw() {
  // put drawing code here


  fill("white");
    ellipse(midScreen,100,topCircle,100);// top of snowman

fill("white");
ellipse(midScreen,midScreen,150,150);//middle of snowman

fill(bottomBall);
ellipse(midScreen,400,200,200);//bottom of snowman

fill("black");
ellipse(245,85,eyeSize,eyeSize);
ellipse(205,85,eyeSize,eyeSize);//black eyes

fill(255,204,100);
triangle(midScreen,100,215,100,220,110);//nose

fill("black");
ellipse(225,190,15,15);//top button
ellipse(225,230,15,15);//middle middle button
ellipse(midScreen,270,15,15);//bottom button

strokeWeight(3)
line(320,150,300,210);//right arm
line(153,200,130,140);//left arm



}//end of drawing

function keyPressed(){

  console.log("key " + key);
  console.log("keyCode " + keyCode);


if(key == "w"){
  bottomBall="white";
}

if(keyCode == 80){
  bottomBall="purple";
}

}
