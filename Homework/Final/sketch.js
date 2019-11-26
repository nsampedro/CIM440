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
  fill(0, 127);
  rect(nigeria.x, nigeria.y, 200, 200);
  fill("white");
  text("Western Lowland Gorilla", nigeria.x, nigeria.y + 10, 200, 200);
  text("The western lowland gorilla is the most numerous and widespread of all gorilla subspecies. The height is 4.5 to 5 feet and weigh around 400 pounds. It is considered to be crtically endangered and roam the forest habitat of eastern Africa", nigeria.x, nigeria.y + 30, 200, 200);

 }
 if (dist(mouseX, mouseY, china.x, china.y) < 10) {
  console.log("china");
  fill(0, 127);
  rect(china.x, china.y, 210, 210);
  fill("white");
  text("Amur Leopard", china.x, china.y + 10, 200, 200);
  text("The Amur Leopard is located in southeastern Russia close to the border of northern China. It is one of the eight subspecies of leopard and is adapted to a cool climate. The most recent noted population of the Amur Leopard is to be around 100. It is listed as critically endangered. More information can be found at the Wildcats Conservation alliance in regards to history and donations to keep the species around.", china.x, china.y + 30, 200, 200);

 }
 if (dist(mouseX, mouseY, borneo.x, borneo.y) < 10) {
  console.log("borneo");
  fill(0, 127);
  rect(borneo.x, borneo.y, 225, 225);
  fill("white");
  text("Bornean Orangutan", borneo.x, borneo.y + 10, 200, 200);
  text("The bornean orangutan is native to Bornea, an Island in southeast Asia. The Bornean orangutan population has said to have declined by more than 50%. It is considered to be critically endangered. The island has three subspecies, each located on different areas of the island. The Northwest Bornean orangutans are the most threatned with around a mere 1,500 individuals remaining. The Northeastern and Central Bornean orangutans have the bigger population, but their are only less than 100,000 total in the world today. ", borneo.x, borneo.y + 30, 200, 200);

 }

 if (dist(mouseX, mouseY, india.x, india.y) < 10) {
  console.log("india");
  fill(0, 127);
  rect(india.x, india.y, 225, 225);
  fill("white");
  text("Asian Elephant", india.x, india.y + 10, 200, 200);
  text("The Asian Elephant is one of the most intelligent animals on the planet and is endangered in the wild. Weighing around 11,000 pounds and standing at almost 11.5 feet tall, the Asian Elephant inhabits the forests of India. Today, fewer than 50,000 elephants remain in the wild. It is listed as endangered due to the loss of habitat that is caused by humans destroying the forests that they live in. You can donate to the World Wildlife Fund to help protect this amazing species.", india.x, india.y + 30, 200, 200);

 }

 if (dist(mouseX, mouseY, florida.x, florida.y) < 10) {
  console.log("florida");
  fill(0, 127);
  rect(florida.x, florida.y, 235, 235);
  fill("white");
  text("Florida Panther", florida.x, florida.y + 10, 200, 200);
  text("The Florida Panther is the only puma species that exists east of the Mississippi. They are considered an endangered species with only around 230 left in existence making them one of the rarest and most endangered animals in the world. They are very common in the southwest tip of Florida. They live in a warm habitat, living in wetlands and swamps like the everglades. You can get involved in helping protect this species by making a donation on the the National Wildlife Federation's website.", florida.x, florida.y + 30, 220, 220);

 }
 if (dist(mouseX, mouseY, carolina.x, carolina.y) < 10) {
  console.log("carolina");
  fill(0, 127);
  rect(carolina.x, carolina.y, 235, 235);
  fill("white");
  text("Red Wolf", carolina.x, carolina.y + 10, 200, 200);
  text("The Red wolf is a smaller and thinner cousin of the gray wolf. Then tend to populate the Eastern North Carolina region. They are considered one of the most world's most endangered wolves. They have recorded that only about 200 red wolves remain in the wild. You can adopt a red wolf pack by making a donation at the Endangered Wolf Center online.", carolina.x, carolina.y + 30, 200, 200);

 }
 if (dist(mouseX, mouseY, california.x, california.y) < 10) {
  console.log("california");
  fill(0, 127);
  rect(california.x, california.y, 235, 235);
  fill("white");
  text("California Condor", california.x, california.y + 10, 200, 200);
  text("The California Condor is", california.x, california.y + 30, 200, 200);

 }
}

function drawPoint() {
 clear();
 fill(0, 127);

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