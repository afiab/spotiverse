let blocks = []
let level = 0;
let platform;
let block;
let wide = 300; //score*4 

function setup() {
  var cnv = createCanvas(500, 300);
  cnv.parent("sketchHolder");
  world.gravity = 2;
  background(250, 240, 230);
  input = createInput("Type a Top50 Song from xyzabc");
  input.position(16, 2);
  input.size(400);
  input.parent("sketchHolder");
  stroke(0);
  text("Level: "+level, 15, 55);

  platform = new Sprite(width/2, height/2, 100,5,'k');
  platform.color = "blue";

  button = createButton('submit');
  button.position(input.x + input.width, 25);
  // button.mousePressed(greet);
}

function draw() {
  const country = input.value();

}