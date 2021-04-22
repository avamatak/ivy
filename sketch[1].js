function setup() {
  createCanvas(500, 500);
  background(150);
  textSize(20);
  text('press color to choose',10,350);
  text('press down to start drawing', 10, 380);
  rect(0,0,300,300);
}

function draw() {
  strokeWeight(7);
  if(keyIsPressed){
    if(key == 'g'){
      stroke(0,255,0);
    }else if(key == 'w'){
      stroke(255);
    }else if(key == 'e'){
      strokeWeight(100);
      stroke(0);
    }else if(key == 'c'){
      background(225);
    }
  }
  if(mouseIsPressed){
  line(mouseX,mouseY,pmouseX,pmouseY);
}
}
