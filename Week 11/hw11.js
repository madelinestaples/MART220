//mouse clicked
var x = 50;
var y = 50;
var diameter = 25;
var mousex = 0;
var mousey = 0;



//draw heart
let heart;

//draw a duck
let duck;

//draw icecream 
let icecream;

//draw name
let madeline;

//draw project name 
let dproj;

//draw penguin 
let penguin;

//draw push pin
let pushpin;

//purple paint skin 
let pcovering;

//pink yellow swirl skin 
let pycovering;

//black paint skin 
let bpcovering;

//let ocean skin
let oceancovering;

// let sand skin 
let sandcovering;

function preload() {
  // Load model with normalise parameter set to true
  // remember you can load OBJ and STL models
  // the normalize parameter ensures that it will fit in p5
  pcovering = loadImage('purplepaint.jpeg');
  pycovering = loadImage('pinkyellow.jpeg');
  bpcovering = loadImage('blackpink.jpeg');
  oceancovering = loadImage('ocean.jpeg');
  sandcovering = loadImage('sand.jpeg');
  duck = loadModel('tinker.obj', true);
  heart = loadModel('heart.obj', true);
  icecream = loadModel('icecream.obj', true);
  madeline = loadModel('madeline .obj', true);
  dproj = loadModel('3dproj.obj', true);
  penguin = loadModel('penguin.obj', true);
  pushpin = loadModel('pushpin.obj',true);
}

function setup() {
  createCanvas(500, 500, WEBGL);
  
}

function draw() {
  background(200);
  //mouseclicked
  push()
  fill(24, 200, 29);
  ellipse(mousex, mousey, 15, 50);


pop()
//duck
   push()
  translate(-width/4,-height/3,0);
  rotateX(frameCount * 0.01);
      rotateZ(frameCount * 0.01);
      noStroke();
      texture(pycovering);
      model(duck);
      pop()
      //heart
      push()
      scale(0.4);
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      translate(-30,-100);
      noStroke();
      texture(oceancovering);
      model(heart);
      pop()
      //icecream
      push()
      scale(1);
      rotateZ(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      translate(-100,-300);
      noStroke();
      texture(sandcovering);
      model(icecream);
      pop()
      //Madeline 
      push()
      scale(.5);
      translate(-300,-100,);
      rotateX(91);
      normalMaterial();
      model(madeline);
      pop()
      //project name 
      push()
      scale(.5)
      translate(-60,200);
      rotateX(91.5);
      normalMaterial();
      model(dproj);
      pop()
      //penguin 
      push()
      scale(.5)
      rotateX(frameCount * 0.01);
      translate(-300,-10);
      noStroke();
      texture(bpcovering);
      model(penguin);
      pop()
      push()
      scale(.5)
      //rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      translate(300,-10);
      noStroke();
      texture(pcovering);
      model(pushpin);
      pop()
}
      function mouseClicked() 
{  
  mousex = mouseX;
  mousey = mouseY;
}
      
