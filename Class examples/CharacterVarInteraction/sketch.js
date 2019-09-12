var pointX = 0;// has no value yet until you create the canvas
var pointY = 0;
var faceColor = "purple";

var faceButton;

function setup() {
  // put setup code here
  createCanvas(400,400)
  pointX = width/2;
  pointY = height/2;
  console.log("pointX " + pointX + " pointY " + pointY);

faceButton = createButton("Click to turn orange");
faceButton.position(20,20);
faceButton.mousePressed(function(){
  // your action goes in here
  //the button mousepressed function is tied to the general mousepressed function
  faceColor = "orange";

});
}

function draw() {
  // put drawing code here
  background("blue");//floods the background so it doesnt have that repeating effect
  pointX = mouseX;
  pointY = mouseY;

  console.log("pointX " + pointX + " pointY " + pointY);
fill(faceColor);
  rect(pointX - 100,pointY-100,200,200);

  ellipse(pointX,pointY,10,10)//nose

  ellipse(pointX + 20,pointY - 20,30,30);//right eye
ellipse(pointX-20,pointY-20,30,30);// left eye
arc(pointX,pointY + 10,50,50,0,PI);




}//end of draw


function mousePressed(){// when you press the mouse it turns red
  //faceColor = "red";
}

function mouseReleased(){//when you let go it goes back to original color
  //faceColor = "purple";
}

function keyPressed(){// when you press the key on the keyboard it changes color
  faceColor = "green";
}
