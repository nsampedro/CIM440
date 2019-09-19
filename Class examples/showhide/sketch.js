var jellyfish;

var showOrHide = false;

var show;
var hide;

function preload(){

jellyfish=loadImage("jellyfish.jpeg");

show = createButton("show jellyfish");
show.mousePressed(function(){

  showOrHide = true;


});

hide = createButton("hide jellyfish");
hide.mousePressed(function(){

  showOrHide =false;

})

}


function setup() {
  // put setup code here
  createCanvas(400,400);
}

function draw() {
  background(255);
  if(showOrHide==true){
    image(jellyfish,100,100,jellyfish.width/4,jellyfish.height/4);
  }
//message in quotes, x position, y position
text("Click on the buttons to see a cool jellyfish",10,10);

}
