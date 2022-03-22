// draw a box
// with width, height, depth 150
function setup() {
    createCanvas(600, 800, WEBGL);
  }
  
  function draw() {
      background(200);
      normalMaterial();
      push()
      translate(-width/4,-height/3,0);
     rotateX(frameCount * 0.01);
      rotateY(frameCount * -0.01);
      rotateZ(frameCount * 0.01);
      box(100, 100, 100);
      pop()
      push()
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      translate(-30,-100);
      sphere(20);
      pop()
      push()
      rotateX(frameCount * 0.01);
      rotateY(frameCount * 0.01);
      box(40);
      pop()
    push()
    translate(-100,-50);
    rotateX(frameCount * 0.01);
    rotateY(frameCount * 0.01);
    ellipsoid(20, 30,75, 24, 24);
    pop()
    push()
    rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  torus(60, 15);
  pop()
}
  