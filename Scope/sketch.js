//global variables, these are available throughout your program
var faceColor = "blue";
var pointX = 0;

function setup() {
  // put setup code here

//if you declare a variable inside of a block of code ie{}, that variable will always be available inside of that blocks

  var message = "hello";

  console.log(message);

//console.log(drawMessage); error not defined, because drawmessage's variable scope is inside of the draw loop

}

function draw() {
  // put drawing code here

  //cosole.log(message); Error: not defined, because message variable scope is only inside the setup

  var drawMessage = "this message is in the draw loop";//this creates a new varibale everytime the draw loop happens

  console.log(drawMessage);
}
