// Create a variable to hold our map
let myMap;
// Create a variable to hold our canvas
let canvas;
// Create a new Mappa instance using Leaflet.
const mappa = new Mappa('Leaflet');

// Lets put all our map options in a single object
const options = {
 lat: 0,
 lng: 0,
 zoom: 4,
 style: "http://{s}.tile.osm.org/{z}/{x}/{y}.png"
}

var nigeria;
var china;
var borneo;
var india;
var florida;
var carolina;
var california;
var brasil;
var zimbabwe;
var spain;
var australia;
var arctic;


// p5.js setup
function setup() {
 // put setup code here
 // Create a canvas 640x640
 canvas = createCanvas(580, 580);
 // Add a grey background
 //background(100);

 // Create a tile map with lat 0, lng 0, zoom 4
 myMap = mappa.tileMap(options);
 // Overlay the canvas over the tile map
 myMap.overlay(canvas);
 //
 // .addTo(myMap)
 //  .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
 //  .openPopup();

 //fill(200, 100, 100);
 drawPoint();
 myMap.onChange(drawPoint);

}

function draw() {

} //end of draw

function mousePressed() {
 if (dist(mouseX, mouseY, nigeria.x, nigeria.y) < 10) {
  console.log("nigeria");
  rect(nigeria.x, nigeria.y, 50, 50);
  fill("black");
  text("nigeria", nigeria.x, nigeria.y)
 }
}

function drawPoint() {
 clear();

 nigeria = myMap.latLngToPixel(11.396396, 5.076543);
 ellipse(nigeria.x, nigeria.y, 20, 20); //Western lowland gorilla

 china = myMap.latLngToPixel(44.891512, 134.866455);
 ellipse(china.x, china.y, 20, 20); //Amur Leopard

 borneo = myMap.latLngToPixel(0.147800, 114.272526);
 ellipse(borneo.x, borneo.y, 20, 20); //bornean orangutan

 india = myMap.latLngToPixel(10.796548, 78.345543);
 ellipse(india.x, india.y, 20, 20); //asian elephant

 florida = myMap.latLngToPixel(26.002728, -81.112147);
 ellipse(florida.x, florida.y, 20, 20); // florida panther

 carolina = myMap.latLngToPixel(35.742507, -82.373001);
 ellipse(carolina.x, carolina.y, 20, 20); // red wolf

 california = myMap.latLngToPixel(32.638941, -114.684248);
 ellipse(california.x, california.y, 20, 20); //california condor

 brasil = myMap.latLngToPixel(-4.088932, -63.647648);
 ellipse(brasil.x, brasil.y, 20, 20); //spix macaw

 zimbabwe = myMap.latLngToPixel(-18.425344, 30.397657);
 ellipse(zimbabwe.x, zimbabwe.y, 20, 20); //black rhino

 spain = myMap.latLngToPixel(37.593016, -7.032537);
 ellipse(spain.x, spain.y, 20, 20); //Iberian lynx

 australia = myMap.latLngToPixel(-20.518358, 142.375377);
 ellipse(australia.x, australia.y, 20, 20); //Southern Cassowary

 arctic = myMap.latLngToPixel(79.781164, 1.457323);
 ellipse(arctic.x, arctic.y, 20, 20); //narwhal


}