var ready = false;
var babyfound = false; 
var sound;
function setup() {
    canvas = createCanvas(screen.width/2,screen.height/2);
    canvas.center();
    capture = createCapture(VIDEO);
  capture.hide();
  objectDetector = ml5.objectDetector('cocossd',modelLoaded);
}
function modelLoaded() {
  console.log("Cocossd is loaded");

}
function draw() {
    image(capture,0,0,screen.width/2,screen.height/2);


if (ready == true) {
  objectDetector.detect(capture,gotResult);
}
}
function start() {
ready = true;
}
function gotResult(error,results) {
  if(error) {
     console.log(error);
  }
  {
    console.log(results);
    babyfound = false;
  for (i = 0; i < results.legnth; i++) {
if (results[i].label == "person") {
babyfound = true;

}
  }
  if (babyfound == false) {
    sound.play();
  }
  }
}
function preload() {
  sound = loadSound("Alert.wav");
}