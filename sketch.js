
let img;

function preload(){
 
  img2= loadImage('poolfinal.jpg');
  
}


function setup() {
  createCanvas(535, 800,WEBGL);
  
  }

function draw() {
  background(251,255,23);
 
  //texture(img);
  //plane(535,800)
  //rotateY(frameCount/2,2);
 // rotateX(frameCount,3);
   //fill(234,235,204);
  noStroke();
  
  texture(img2); 
  //scale(2);
  plane(535,800);
  
  
  
  //fill(23,93,255);
  //stroke(255, 0, 0);
  //strokeWeight(.5);
  //ellipsoid(vol*280, vol*280, vol*280);
  
}