//Global Variables

//General
var gameState;
var player;
var playerImage1,playerImage2,playerImage3;
var goal;
var score;
var edges;
var mode1, mode2, mode3, modeGroup;
var mode1Image, mode2Image, mode3Image;
var playerImage1,playerImage2,playerImage3;
var endLoseImg;

//Mode1
var coronaGroup;
var maskGroup,sanitizerGroup,ppeGroup;
var covid1,covid2,covid3, mask1, mask2, sanitizer1, sanitizer2, ppe1, ppe2; //Images
var vaccineImage;
var mode1EndImg;

//Mode2
var alienGroup;
var researchGroup, weaponGroup, abcGroup;
var alienImage1,alienImage2,alienImage3;
var researchImage1,researchImage2,researchImage3,researchImage4;
var weaponImg1,weaponImg2,weaponImg3;
var rocketImage;

//Mode3
var dinoGroup;
var toolGroup,aidGroup,someGroup;
var dinoImg1,dinoImg2,dinoImg3;
var timeMachineImg;
var tool1Img,tool2Img,tool3Img,tool4Img;
var aidImg1,aidImg2;


function preload()
{
  //Mode1 Images
covid1	= loadImage( "Images/Mode1Images/Covid1.png");
covid2	= loadImage( "Images/Mode1Images/Covid2.png");
covid3	= loadImage( "Images/Mode1Images/Covid3.png");

mask1	= loadImage( "Images/Mode1Images/Mask1.png");
mask2	= loadImage( "Images/Mode1Images/Mask2.png");

sanitizer1	= loadImage( "Images/Mode1Images/Sanitizer1.png");
sanitizer2	= loadImage( "Images/Mode1Images/sanitizer2.png");

ppe1	= loadImage( "Images/Mode1Images/Ppe1.png");
ppe2	= loadImage( "Images/Mode1Images/Ppe2.png");

playerImage1 = loadImage( "Images/Mode1Images/Scientist6aa.png");


weaponImg1 = loadImage( "Images/Mode2Images/Weapon1.png");
weaponImg2 = loadImage( "Images/Mode2Images/Weapon2.png");
weaponImg3 = loadImage( "Images/Mode2Images/Weapon3.png");

vaccineImage = loadImage( "Images/Mode1Images/VaccineImg.png");

mode1Image = loadImage( "Images/Mode1Images/CovidModeImage.jpg");

mode1EndImg = loadImage( "Images/Mode1Images/EndLoseCorona.png");

//Mode2 Images
mode2Image = loadImage( "Images/Mode1Images/SpaceModeImage.jpg");

playerImage2 = loadImage("Images/Mode2Images/Astronaut.png");

alienImage1 = loadImage("Images/Mode2Images/alien1.png");
alienImage2 = loadImage("Images/Mode2Images/alien2.png");
alienImage3 = loadImage("Images/Mode2Images/alien3.png");

researchImage1 = loadImage( "Images/Mode2Images/research1.png");
researchImage2 = loadImage( "Images/Mode2Images/research2.png");
reasearchImage3 = loadImage( "Images/Mode2Images/research3.png");
researchImage4 = loadImage( "Images/Mode2Images/research4.png");



rocketImage = loadImage( "Images/Mode2Images/rocket.png");

//Mode3 Images
mode3Image = loadImage( "Images/Mode1Images/DinoMode3.jpg");

dinoImg1 = loadImage( "Images/Mode3Images/dino1.png");
dinoImg2 = loadImage( "Images/Mode3Images/dino2.png");
dinoImg3 = loadImage( "Images/Mode3Images/dino3.png");
dinoImg4 = loadImage( "Images/Mode3Images/dino4.png");

playerImage3 = loadImage( "Images/Mode3Images/Historian.png");

timeMachineImg = loadImage( "Images/Mode3Images/TimeMachine.png");

tool1Img = loadImage( "Images/Mode3Images/Tool1.png");
tool2Img = loadImage( "Images/Mode3Images/Tool2.png");
tool3Img = loadImage( "Images/Mode3Images/Tool3.png");
tool4Img = loadImage( "Images/Mode3Images/Tool4.png");

aidImg1 = loadImage( "Images/Mode3Images/aid1.png");
aidImg2 = loadImage( "Images/Mode3Images/aid2.png");






}

function setup() { 
	createCanvas(1800, 400);
  gameState = 0;

  console.log("canvasCreated");
  
   
  goal = createSprite(3200,200,30,30);
	goal.shapeColor = "green";
  
	player = createSprite(350,height/2,10,10);
	player.shapeColor = "red";
  player.visible = false;

  endLoseImg = createSprite(player.x-100,player.y-100,50,50);
  endLoseImg.visible = false;


  
  
  
  

	console.log("playerReady");
	
	

	
	coronaGroup = new Group();
	maskGroup = new Group();
	sanitizerGroup = new Group();
	ppeGroup = new Group();

  alienGroup = new Group();
	researchGroup = new Group();
	abcGroup = new Group();
	weaponGroup = new Group();

  dinoGroup = new Group();
	toolGroup = new Group();
	aidGroup = new Group();
	someGroup = new Group();


  modeGroup = new Group();

  console.log("groupsCreated");

	
  score = 0;
	
    edges = createEdgeSprites();

	console.log("EdgesCreated");
  
	




	
  
}


function draw() {
console.log("drawBegins")
  rectMode(CENTER);
  background("yellow");

  

if(gameState === 0){
  selectMode();
  
}
else 
if(gameState === 1){
  console.log("mode1");
  if(mode1){
    modeGroup.destroyEach();
  }
  //Mode1();
  player.addImage(playerImage1);
  player.scale = 0.5;
  player.visible = true;
  player.velocityX = 5;
  goal.addImage(vaccineImage);

  textSize(20);
  text("SCORE: "+ score + " X " +player.x ,camera.x-870,50);
  if(player.isTouching(maskGroup)){
	  score = score+10;
    maskGroup.destroyEach();
  }
  else 
  if(player.isTouching(sanitizerGroup)){
	score = score+15;
  sanitizerGroup.destroyEach();
}
else
if(player.isTouching(ppeGroup)){
	score = score+20;
  ppeGroup.destroyEach();
}

else
if(player.isTouching(coronaGroup)){
	//score = score-20;
  textSize(10);
  text("YOU LOSE", camera.x-500,200);
  gameState = "LOSE";
  //coronaGroup.velocityXEach = 0;
  //coronaGroup.velocityYEach = 0;
  coronaGroup.destroyEach();
  maskGroup.destroyEach();
  sanitizerGroup.destroyEach();
  ppeGroup.destroyEach();

}

  camera.x = player.x;

  console.log(player.x);

  if(frameCount % 31 === 0 && gameState === 1){
	createAllies();
  }

  

  




if(gameState === 1){
  createCorona();
}
  

player.collide(edges[3]);
  
  
  
}
else 
if(gameState === 2){
  console.log("Mode2");
  if(mode2){
    modeGroup.destroyEach();
  }
 
  //Mode2();

  player.addImage(playerImage2);
  player.scale = 0.5;
  player.visible = true;
  player.velocityX = 5;
  goal.addImage(rocketImage);

  textSize(20);
  text("SCORE: "+ score ,camera.x-870,50);
  if(player.isTouching(researchGroup)){
	  score = score+10;
  }
  else 
  if(player.isTouching(weaponGroup)){
	score = score+15;
}
/*else
if(player.isTouching(abcGroup)){
	score = score+20;
}*/

  camera.x = player.x;

  console.log(player.x);

  if(frameCount % 31 === 0){
	createAllies2();
  }

  

  




  createAlien();

player.collide(edges[3]);
  
}
else 
if(gameState === 3){
  console.log("Mode3");
  if(mode3){
    modeGroup.destroyEach();
  }
  
  //Mode3();
  player.addImage(playerImage3);
  player.scale = 0.5;
  player.visible = true;
  player.velocityX = 5;
  goal.addImage(timeMachineImg);

  textSize(20);
  text("SCORE: "+ score ,camera.x-870,50);
  if(player.isTouching(toolGroup)){
	  score = score+10;
  }
  else 
  if(player.isTouching(aidGroup)){
	score = score+15;
}
else
if(player.isTouching(someGroup)){
	score = score+20;
}

else
if(player.isTouching(dinoGroup)){
	//score = score-20;
  textSize(10);
  text("YOU LOSE", camera.x-500,200);
  //coronaGroup.velocityXEach = 0;
  //coronaGroup.velocityYEach = 0;
  dinoGroup.destroyEach();
}

  camera.x = player.x;

  console.log(player.x);

  if(frameCount % 31 === 0){
	createAllies3();
  }

  

  





  createDino();

player.collide(edges[3]);
}
//selectMode();
  drawSprites();
  
  if(keyDown(UP_ARROW)){
    player.y = player.y-5;
  
    }
  
    if(keyDown(DOWN_ARROW)){
    player.y = player.y+5;
  }
  
  if(player.x === 3200){
    player.velocityX = 0;
    gameState  = "WIN";
    textSize(15);
    text("YOU HAVE WON!", player.x, 200);
  }
 
}

//we will use camera position and up-down controls will be given to the players

function selectMode(){

  textSize(20);
  fill("black");
  text("CHOOSE YOUR MODE",700,380);
  mode1 = createSprite(120,100,100,50);
  mode1.addImage(mode1Image);
  mode1.scale = 2.5;
  mode2 = createSprite(770,140,50,50);
  mode2.addImage(mode2Image);
  mode2.scale = 2.3;
  mode3 = createSprite(1480,140,50,50);
  mode3.addImage(mode3Image);
  mode3.scale = 2.5;

  modeGroup.add(mode1);
  modeGroup.add(mode2);
  modeGroup.add(mode3);

  console.log("modeSpritesCreated");

  //drawSprites();

  if(mousePressedOver(mode1)){
    console.log("enteringM1");
    gameState = 1;
    
  }

  else if(mousePressedOver(mode2)){
    console.log("enteringM2");
    gameState = 2;
    
  }

  else if(mousePressedOver(mode3)){
    console.log("enteringM3");
    gameState = 3;
    
  }



  //setTimeout(checkState, 1000);
  //sleep(1000);
  //checkState();

}

function checkState(){
  console.log("gameStateIs"+ gameState);
  if(gameState === 0){
    selectMode()
  }else{
    console.log("moveAhead");
    console.log("gameStateIs"+ gameState);
  }
}

function sleep(milliseconds) {
  console.log("sleepBegins");
  const date = Date.now();
  let currentDate = null;
  do { currentDate = Date.now();
     } 
  while (currentDate - date < milliseconds);
  console.log("sleepEnds");
}