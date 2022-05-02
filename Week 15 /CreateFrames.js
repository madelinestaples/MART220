var mainColor = 255;

function setup() {
    createCanvas(640, 480);
    background(0);
    frameRate(25);
    noStroke();
    rectMode(CENTER);
}
function draw() {
    fill(random(mainColor),random(mainColor),random(mainColor), random(100));

    var size= random(200);

    circle(random(width), random(height), size);

    if (frameCount % 2 == 0) {
        mainColor = 255 - mainColor; // 255 0 255 0 255 0 ..
    }
    saveFrames("myMovie",".png",1,25);

    if (frameCount > 25) { // 1 second * 25 fps = 25
        noLoop();
    }
}


//animation variables
var dog;
var dog2;
var blossum;
//particle variable
var particles = []


function preload() {
 //dog = loadAnimation('Idle1.png', 'Idle10.png');
 //dog2 = loadAnimation('Walk1.png', 'Walk10.png');
}

function setup() {
    createCanvas(800,900);
    dog = createSprite(150,230,50,100);
    dog.addAnimation('idle','Idle1.png','Idle10.png' );
    dog.addAnimation('Walk','Walk1.png','Walk2.png' );
    blossum = createSprite(700,100);
    blossum.addImage(loadImage('blossum.jpeg'));
  }
  function createParticles(x,y)
  {
  for (let i = 0; i < 5; i++) {
      let p = new Particle(x,y);
      particles.push(p);
    }
    for (let i = particles.length - 1; i >= 0; i--) {
      particles[i].update();
      particles[i].show();
      if (particles[i].finished()) {
        // remove this particle
        particles.splice(i, 1);
      }
    }
  }

  function draw(){
  background(0);
  //animation(dog,300,150);
  if(keyDown('d'))
  {
    dog.changeAnimation('Walk');
    dog.velocity.x += .5;
    if(dog.collide(blossum)){
      blossum.remove();
      createParticles(blossum.position.x, blossum.position.y)
      createYouWin()
      dog.changeAnimation('idle');
    }
    
  }

  else if(keyDown('a')){
    dog.changeAnimation('Walk');
    dog.velocity.x -= .5;
  }
  else if(keyDown('s')){
    dog.changeAnimation('Walk');
    dog.velocity.y += .5;
  }
  else if(keyDown('w')){
    dog.changeAnimation('Walk');
    dog.velocity.y -= .5;
  }
  else
  {
    dog.changeAnimation('idle');
    dog.velocity.x = 0;

  }
  

  drawSprites();
}
