var seasonSelect;
var seasonType = "";


var eyeSize = 20;
var topCircle = 100;
var canvasSize = 500;
var midScreen = 225;
var bottomBall = "red"

var ballButton

var snowX = [];
var snowY = [];
var snowAmmount = 100;

var leafX =[];
var leafY =[];
var leafAmmount = 100;
var leafImage;

function preload(){
    leafImage = loadImage("leaf.jpg");
}

var snowButton

function setup() {
  // put setup code here
  createCanvas(canvasSize,500);

  seasonSelect = createSelect();
  seasonSelect.position(380,25);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.changed(function(){
      seasonType = seasonSelect.value();
  });

  for(var i = 0; i<snowAmmount; i++){
      snowX[i] = random(0,width); //random number is from 0-width-1 or 0 to 399
      snowY[i] = random(0, -500);

  }

  console.log("snowX" + snowX);
  console.log("snowY" + snowY);

  for(var i = 0; i< leafAmmount; i++){
      leafX[i] = random(0,width);
      leafY[i] = random(0,-500);
  }

  console.log("leafX" + leafX);
  console.log("leafY" + leafY);



ballButton = createButton("click to change color");
ballButton.position(20,20);
ballButton.mousePressed(function(){
  bottomBall="green";
});





}

function draw() {
  // put drawing code here
  background(255);
  if(seasonType == "fall"){
      console.log("fall");

    for(var f = 0; f<leafAmmount; f++){
        if(leafY[f]<height-20){
            leafY[f]++;
            leafX[f] = leafX[f] + sin(radians(frameCount));
        }
        image(leafImage,leafX[f],leafY[f], 20,30);
    }

}else if(seasonType == "winter"){
    console.log("winter");
    fill(255);
    stroke(0);
        for(var y = 0; y<snowAmmount; y++){
            snowY[y]++;
            ellipse(snowX[y], snowY[y], 10,10);

            if(snowY[y] > height){
                snowY[y] = random(0,-500);
                snowX[y] = random(0,width);
            }
        }

}



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