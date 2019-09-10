var eyeSize = 40;
var mouthX = 70;
var mouthY = 150;
var eyePupil = 10;


function setup() {
  // put setup code here
  createCanvas(500,500);
  background(255,204,0);
}

function draw() {
  // put drawing code here
fill("pink");
  ellipse(120,150,200,200);

  fill("cyan");
  strokeWeight(1);
  ellipse(100,100,eyeSize,eyeSize);// this is the left eye

  ellipse(140,100,eyeSize,eyeSize);// this is the right eye



fill("black");
ellipse(100,100,eyePupil,eyePupil);
ellipse(140,100,eyePupil,eyePupil); // pupils

fill("255");
  rect(mouthX,mouthY,100,30);//mouth

// strokeWeight(5);
//   point(72,382);//mole

strokeWeight(1);
line(150,165,250,165);//mouth split must have a common y and two diff x points

// //width and height
// console.log("width " + width);
// console.log("height " + height);

triangle(width/2,height/2,width/2 + 10, height/2 + 10, width/2 - 10, height/2 + 10);

triangle(200,300,220,320,180,320);

arc(300,300,50,50,0,PI);
arc(200,100,50,50,PI+HALF_PI,0);
// arc(300,150,50,50,0,TWO_PI);
arc(400,100,50,50, HALF_PI, PI+HALF_PI) //ear

fill("pink")
ellipse(350,350,200,200);

fill("green")
ellipse(325,325,eyeSize,eyeSize);
ellipse(365,325,eyeSize,eyeSize);

fill("black");
ellipse(325,325,eyePupil,eyePupil);
ellipse(365,325,eyePupil,eyePupil);

fill("255");
  rect(295,360,100,30);


}//end of draw
