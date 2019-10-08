var seasonSelect;
var seasonType = "";

var sunX = 0;
var sunY = 0;


function setup() {
  // put setup code here
  createCanvas(400,400);
  seasonSelect = createSelect();
  seasonSelect.position(10,10);
  seasonSelect.option("");
  seasonSelect.option("fall");
  seasonSelect.option("winter");
  seasonSelect.option("spring");
  seasonSelect.option("summer");
  seasonSelect.changed(function(){
      seasonType = seasonSelect.value();
      //.value holds fall, winter, summer; passing that value to seasonType
  });

  sunX = width/2; //do this in the setup because you need the width and height to exist; dont exist outside of setup/drawing
  sunY = height*2;
}

function draw() {
  // put drawing code here
  background(255);
  if(seasonType == "fall"){
      console.log("fall");
  }else if(seasonType == "winter"){
      console.log("winter")
  }else if(seasonType == "spring"){
      console.log("spring");
  }else if(seasonType == "summer"){
      console.log("summer");
      fill("orange");
      stroke("red");
      ellipse(sunX,sunY,width,height);

      if(sunY > height){
          sunY = sunY -1;// allows us to move the sun up the screen when "summer is selected"
      }

  }else{
    console.log("blank");
    text("Make a selection",100,20);
  }


}
