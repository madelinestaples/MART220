function setup() {
  let img = createImage(800, 600); 
  img.loadPixels();
  createCanvas(800, 600);
  background(0);

  

 //writing color array
 function writeColor(image, x, y, red, green, blue, alpha) 
 {
   let index = (x + y * width) * 4;
   image.pixels[index] = red;
   image.pixels[index + 1] = green;
   image.pixels[index + 2] = blue;
   image.pixels[index + 3] = alpha;
 }
// draws random squares within squares on the canvas
 function drawShapes(number1, number2) {
   let startX = floor(random(number1-10)) + 10;
   let startY = floor(random(number2-20)) + 20;
   console.log(startX);
   // draw shapes
   //square(30,40,30);
   square(30,10,50);
   square(40,10,50);
   square(300,400,50);
   textSize(32);
//text('MS', 10, 30);
fill(0, 102, 153);
//text('MS', 10, 60);
fill(0, 102, 153, 51);
text('MS', 10, 90);
   for (x = startX; x < startX + 70; x++) {
     for (y = startY; y < startY + 70; y++) {
       if (x > startX + 10 && x < startX + 25 && y > startY + 10 && y < startY + 25) {
         writeColor(img, x, y, 50, 100, 50, floor(random(255)));
       } else {
         writeColor(img, x, y, 55, 20, 125, floor(random(255)));
       }
     }
   }
 }

 let x, y;
 // fill with random colors
 for (y = 0; y < img.height; y++) {
   for (x = 0; x < img.width; x++) {
     let red = random(255);
     let green = random(255);
     let blue = random(255);
     let alpha = 255;
     writeColor(img, x, y, red, green, blue, alpha);
   }
 }

 // draw upper border line
 for(y = 0; y < 5; y++)
 {
   for (x = 0; x < img.width; x++) 
   {
     writeColor(img, x, y, 255, 0, 0, 255);
   }
 }

 // draw a bottom border line
 y = img.height - 1;
 for(let i = 0; i < 5; i++)
 {
   for (x = 0; x < img.width; x++) 
   {
     writeColor(img, x, y, 255, 0, 0, 255);
   }
   y--;
 }

 // draw shapes
 for (var i = 0; i < 50; i++) {
   drawShapes(floor(random(width)), floor(random(height)));
 }

 img.updatePixels();
 image(img, 0, 0);
}