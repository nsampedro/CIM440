var questions = ["Is Iceland always covered in ice?","What ocean lies east of the US?","Where is Spain?"];
var options = ["1) True 2) False","1) Pacific 2) Eastern 3) Indian 4) Atlantic","1) South America 2) North America 3) Europe 4) Africa"];
var answers = [1,3,2];

var currentOption = -1; //refers to what button the user has pressed

var buttons = [];

var currentQuestion = 0;

var answerText = "";

function setup() {
  // put setup code here
  createCanvas(400,400);

buttons[0] = createButton("1");
buttons[0].position(10,300);
buttons[0].mousePressed(function(){
    currentOption = 0;

});//end of mousePressed

buttons[1] = createButton("2");
buttons[1].position(50,300);
buttons[1].mousePressed(function(){
    currentOption = 1;

});//end of mousePressed

buttons[2] = createButton("3");
buttons[2].position(100,300);
buttons[2].mousePressed(function(){
    currentOption = 2;

});//end of mousePressed

buttons[3] = createButton("4");
buttons[3].position(150,300);
buttons[3].mousePressed(function(){
    currentOption = 3;

});//end of mousePressed

}

function draw() {
  // put drawing code here
  background(255);


text(questions[currentQuestion], 20,100);
text(options[currentQuestion], 20,150);
text(answerText, 20,200);



//if the current option is not equal to -1
if(currentOption != -1){
    //do something if currentOption is not equal to -1
    console.log("currentOption" + currentOption);
    if(currentOption == answers[currentQuestion]){
        //correct
        console.log("Correct");
        answerText = "Correct";
        currentQuestion = currentQuestion + 1;
        //if(currentQuestion == 2){
        //array.length counts how many questions in the array,question.length has two items.
        if(currentQuestion == questions.length){
            currentQuestion = 0;
        }//setting array limit
    }else{
        console.log("Incorrect");
        answerText = "Incorrect"

    }//check for correct or incorrect

    currentOption = -1;

}//end of currentOption != -1







}//end of draw
