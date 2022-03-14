

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







  
 
// hot pink circle
fill(255,54,151)
circle(700,100,80);

//border circles, non moving for decoration 
//light purple
fill(214, 158, 222)
circle(700,300,200);
//dark purple
fill(174, 0, 255)
circle(100,600,300);
//light pink
fill(255, 140, 230)
circle(255,855,150);
//
fill(255, 89, 122)
circle(799,10,90);
fill(255, 89, 238)
circle(600,800,200)
function createCharacter()
{
    fill('rgb(255, 255, 255)');
    circle(xcar,ycar,50); 
}

  

{
  //dark purple sqaure
  fill('rgba(100%,0%,100%,0.5)');
 square(30,100,50);
 



}
 
 //light pink circle
  fill('#fae');
  //light pink circle Movement
  circle(30,90,50);
  
  }
  function createYouWin()
{
    textSize(32);
    fill(255);
    textSize(40);
    text ('You Win',50, 300);
}
