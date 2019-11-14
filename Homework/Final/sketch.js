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

 fill(200, 100, 100);

 myMap.onChange(drawPoint);
}

function draw() {

} //end of draw
function drawPoint() {
 clear();

 const nigeria = myMap.latLngToPixel(11.396396, 5.076543);
 ellipse(nigeria.x, nigeria.y, 20, 20);
}