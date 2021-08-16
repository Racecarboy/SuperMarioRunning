var SuperMarioBrosStage;
var MarioStageImg;
var SuperMario;

function preload(){
  //pre-load images
  MarioStageImg = loadImage("Super Mario Bros. World 1 - 1 Level Background (2).png");
  MarioAnimation = loadAnimation("Mario Running.gif");
}

function setup(){
  createCanvas(displayWidth,displayHeight);
  //create sprites here
  SuperMarioBrosStage = createSprite(450,190,displayWidth,displayHeight);
  //old values for SuperMarioBrosStage createSprite(150,180,300,360);
SuperMarioBrosStage.addImage("LevelBackground",MarioStageImg);
  SuperMarioBrosStage.x = SuperMarioBrosStage.width /2;
  SuperMarioBrosStage.velocityX = -3;
  
  SuperMario = createSprite(80,280);
  SuperMario.addAnimation("MarioRunning",MarioAnimation);
  SuperMario.scale=0.7;
  
  invisibleGround1 = createSprite(200,350,1000000,10);
  invisibleGround1.visible=false;

  invisibleBoundary1 = createSprite(-130,400,1,400);
  invisibleBoundary1.visible=false;
  
  invisibleBoundary2 = createSprite(330,400,1,400);
  invisibleBoundary2.visible=false;
}

function draw() {
  background("light blue");
  
  if (SuperMarioBrosStage.x < 0) {
    SuperMarioBrosStage.x = SuperMarioBrosStage.width /2;
  }
  
  if(keyWentDown("up") && SuperMario.collide(invisibleGround1)){
    SuperMario.velocityY = -11;
  }
  
  if(keyWentDown("right")){
    SuperMario.velocityX = SuperMario.velocityX +6;
  }
  
  if(keyWentUp("right")){
    SuperMario.velocityX = 0;
  }
  
  if(keyWentDown("left")){
    SuperMario.velocityX = SuperMario.velocityX -6;
  }
  
  if(keyWentUp("left")){
    SuperMario.velocityX = 0;
  }
  
  SuperMario.velocityY = SuperMario.velocityY + 0.6;
  
  SuperMario.collide(invisibleGround1);
  
  
  SuperMario.collide(invisibleBoundary1);
  
  SuperMario.collide(invisibleBoundary2);

  camera.position.x = SuperMario.x;
  camera.position.y = SuperMario.y;

  drawSprites();
}
