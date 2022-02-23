//timer function 
var timernumber = 22;
var startButton;

//variables that move light pink circle
var x = 300;
var movement =13;

//variables that move light lavender circle
var speed = 12;
var movement2 = 10;
var y = 400;
var xr = 400

//image powerpuff girls 
var img,img2,img3 ;
var robotomono

//animation sprite variables
var asimg 
//animation array 
var animation = [];
var k = 0;

//circle array! Using x value Circles that are stationary
var myArray = [];
myArray[0] = 350;
myArray[1] = 350;
myArray[2] = 150;
myArray[3] = 200;
myArray[4] =700;
myArray[5]=600;
myArray[6]=460;

//move our character {pink square}
var cx = 100;
var myimage;
var staticimages = []
var filenames; 
function preload() {
  filenames = loadStrings(
    'staticimagefile.txt'
  )
  
  
  img2=loadImage (
    'buttercup.jpg'
  )
  img3=loadImage(
    'blossum.jpeg'
  )
 asimg = loadImage("./animation/Dead (1).png");
 animation[0]=asimg;
asimg = loadImage("./animation/Dead (2).png");
animation[1]=asimg;
asimg = loadImage("./animation/Dead (3).png");
animation[2]=asimg;
asimg = loadImage("./animation/Dead (4).png");
animation[3]=asimg;
asimg = loadImage("./animation/Dead (5).png");
animation[4]=asimg;
asimg = loadImage("./animation/Dead (6).png");
animation[5]=asimg;
asimg = loadImage("./animation/Dead (7).png");
animation[6]=asimg;
asimg = loadImage("./animation/Dead (8).png");
animation[7]=asimg;
asimg = loadImage("./animation/Dead (9).png");
animation[8]=asimg;

robotomono=loadFont (
    'RobotoMono-VariableFont_wght.ttf'
  )
}

function setup() {
  img=loadImage (
    filenames[1]

  )
  myimage=new imageclass (
    img, 20, 40, 200, 200
  )
  staticimages[0]=myimage
    createCanvas(800,900);
    //timer
    textAlign(LEFT);
  setInterval(timeIt, 1000);
  }
  
  function draw() {
  background(0);
  //animation
  image(animation[k], 100,100, 335,235)
  //character movement down arrow
  if(keyIsDown(40))
  {
    cx+=5;
}
if(keyIsDown(38))
  {
      cx-=5;
  }
  
  






  //timer stuff

  if (timernumber >= 10) {
    text("0:" + timernumber, width / 2, height / 2);
  }
  if (timernumber < 10) {
    text('0:0' + timernumber, width / 2, height / 2);
  }
  if (timernumber == 0) {
    text('game over', width / 2, height / 2 + 15);
  }
  {
   
  }

 



//image powerpuff girls 
  image (
    staticimages[0].getImage()
      ,staticimages[0].getX(),staticimages[0].getY(),staticimages[0].getW(), staticimages[0].getH()
      
    
  );
  image (
    img2,400, 70
  );
  image (
    img3, 300, 400
  );

  fill('rgba(100%,0%,100%,0.5)');
  square(cx,100,50);
  
  


textFont(robotomono);
  //title in top left hand corner 
  text('Euphoria', 10, 30);
  //name in bottom right hand corner
  text('Madeline Staples',670,880);
// hot pink circle
fill(255,54,151)
circle(myArray[0],100,80);

//border circles, non moving for decoration 
//light purple
fill(214, 158, 222)
circle(myArray[1],300,200);
//dark purple
fill(174, 0, 255)
circle(myArray[2],600,300);
//light pink
fill(255, 140, 230)
circle(myArray[3],855,150);
//
fill(255, 89, 122)
circle(myArray[4],10,90);
fill(255, 89, 238)
circle(myArray[5],800,200)




  
  
 
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

  function timeIt() {
    if (timernumber > 0) {
      timernumber--;
    }
    myArray[0]+=25;
    k++;
    if (k >= animation.length)
{
  k= 0;
}
  }
  