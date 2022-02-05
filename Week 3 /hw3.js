//variables that move light pink circle
var x = 300;
var movement =13;

//variables that move light lavender circle
var speed = 12;
var movement2 = 10;
var y = 400;
var xr = 400

//image powerpuff girls 
var img,img2 ;
var robotomono



function preload() {
  img=loadImage (
    'powerpuffgirls.jpeg'

  )
  img2=loadImage (
    'buttercup.jpg'
  )
  robotomono=loadFont (
    'RobotoMono-VariableFont_wght.ttf'
  )
}







function setup() {
    createCanvas(800,900);
  }
  
  function draw() {
  background(0);
  //image powerpuff girls 
  image (
    img,20, 40
  );
  image (
    img2,400, 70
  );


textFont(robotomono);
  //title in top left hand corner 
  text('Euphoria', 10, 30);
  //name in bottom right hand corner
  text('Madeline Staples',700,875);
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




  //dark purple sqaure
  fill('rgba(100%,0%,100%,0.5)');
 square(30,100,50);
 //light lavender small circle 
 fill(199, 135, 247);
 circle(xr,y,30);
 if(y >= 900 || y <= 0)
  {
    movement2*=-1;
  }
  y+= movement2;
  if(xr >= 800 || xr <= 0)
  {
    movement2*=-1;
  }
  xr+=movement2






 //light pink circle
  fill('#fae');
  //light pink circle Movement
  circle(x,90,50);
  if(x >= 800 || x <= 0)
  {
    movement*=-1;
  }
  x += movement;
  }
  