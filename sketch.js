var background;
var cube;


function preload(){
  background = loadImage("background.png");
}

function setup() {
  createCanvas(1000,800);

  
  image(background, 0,0);

  cube = createSprite(400, 200, 50, 50);
  
  
  
}

function draw() {
  
  
  drawSprites();

  if (keyDown(UP_ARROW)){
    cube.y -=5;
  }
  if (keyDown(DOWN_ARROW)){
    cube.y +=5;
  }
  if (keyDown(RIGHT_ARROW)){
    cube.x +=5;
  }
  if (keyDown(LEFT_ARROW)){
    cube.x -=5;
  }
}