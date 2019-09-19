var jellyfish;

function preload(){

jellyfish=loadImage("jellyfish.jpeg");

}


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  // put drawing code here
  //image var, x position, y postion
  image(jellyfish,0,0);//full scale
  //when you divide by a number,the image will scale proportionally
  image(jellyfish,100,100,jellyfish.width/4,jellyfish.height/4);
  //set exact dimensions
  image(jellyfish,200,200,125,200);//settin exact dimensions scales to that pixel size
}
