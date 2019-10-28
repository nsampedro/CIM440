var button1;
var button2;

function setup() {
  // put setup code here
  createCanvas(400,400);

  button1 = new hitzoneObject(100,200,50,"red");
  button2 = new hitzoneObject(200,200,50,"green");
}

function draw() {
  // put drawing code here
  background(255);

  button1.display();
  button1.check();
  console.log("button1 overlay " + button1.overlay);
  button2.display();
  button2.check();

}

class hitzoneObject{

    constructor(tempX, tempY, tempSize, tempColor){
        this.X = tempX;
        this.Y = tempY;
        this.boxSize = tempSize;
        this.boxColor = tempColor;
    }

    display(){
        fill(this.boxColor);
        rect(this.X, this.Y, this.boxSize, this.boxSize);
    }

    check(){
        if(mouseX > this.X && mouseX < (this.X + this.boxSize) && mouseY > this.Y && mouseY < (this.Y + this.boxSize)){
            //console.log("over button " + this.boxColor);
            this.overlay = true;
        }else{
            //console.log("off button " + this.boxColor);
            this.overlay = false;
        }
    }









}//end of hitzoneObject
