function setup() {
    var myCanvas = createCanvas(800, 250);
background(131,185, 224);
    myCanvas.parent('mySketch');
}

function draw() {

    if(mouseIsPressed){
  noStroke();
  fill(78,156,218);
  beginShape();
  vertex((mouseX-20), mouseY);
  vertex(mouseX, (mouseY-20));
vertex((mouseX+20), mouseY);
vertex(mouseX, (mouseY+20));
vertex((mouseX-20), mouseY);
endShape();
    }
  }
