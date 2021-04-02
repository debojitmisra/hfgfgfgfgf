function createDino(){
	
	if(frameCount % 100 === 0){
	 var randPos  = random(100,350);
     var dino = createSprite(player.x+550,randPos,10,10);
     dino.velocityX = frameCount/50*(-1);

	 var randImage = Math.round(random(1,3));

	
	
	switch(randImage){

	 case 1: dino.addImage(dinoImg1);
   dino.scale = 0.5;
	 break;
	 case 2:dino.addImage(dinoImg2);
     dino.scale = 0.5;
	 break;
     case 3:dino.addImage(dinoImg3);
     dino.scale = 0.5;
     default:dino.addImage(dinoImg4);
     dino.scale = 0.5;
	 break;

	}
	  
    dino.lifetime = 500;
    dinoGroup.add(dino);
   }

}

function createTools(){
	//if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var tool = createSprite(player.x+450,randPos,10,10);
        tool.shapeColor = "blue";
        tool.setVelocity(Math.round(random(2,4))*(-1), Math.round(random(3,4)));
        if(frameCount % 3 === 0 ){
            tool.velocityX *= -1;
        }
        else{
            tool.velocityY *= -1;
        }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1:tool.addImage(tool1Img);
        tool.scale = 0.4;
		break;
		case 2:tool.addImage(tool2Img);
        tool.scale = 0.4;
		break;
        case 2:tool.addImage(tool3Img);
        tool.scale = 0.4;
		break;
		default:tool.addImage(tool4Img);
        tool.scale = 0.4;
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   tool.lifetime = 500;
	   toolGroup.add(tool);
     
	  //}
}

function createAid(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var aid = createSprite(player.x+490,randPos,10,10);
        aid.shapeColor = "black";
        aid.setVelocity(Math.round(random(2,5))*(-1), Math.round(random(3,5)));

        if(frameCount % 3 === 0 ){
            aid.velocityX *= -1;
        }
         else{
            aid.velocityY *= -1;
         }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1:aid.addImage(aidImg1);
    aid.scale = 0.4;
		break;
		default:aid.addImage(aidImg2);
    aid.scale = 0.4;
		break;
   
	   }
	   
	   aid.lifetime = 500;
	   aidGroup.add(aid);
	  //}
}

function createSomething(){
    
		var randPos  = random(320,350);
		var some = createSprite(player.x+450,randPos,10,10);
        some.shapeColor = "brown";
        some.setVelocity(Math.round(random(5,8)*(-1)), Math.round(random(4,7)));

        if(frameCount % 3 === 0 ){
            some.velocityX *= -1;
        }
        else{
            some.velocityY *= -1;
        }

        //some.addImage(ppe1);
        some.scale = 0.3;
		var randImage = Math.round(random(1,3));
	  
	   some.lifetime = 500;
	   someGroup.add(some);
	  
}

function createAllies3(){
    var rand = Math.round(random(1,6));

    switch(rand){
        //this method is called ripple effect or fallthrough
        case 1: 
        case 2:
        case 3:
               createTools();
                break;
        case 4:
        case 5:
               createAid();
                break;
        default: createSomething();

    }
}

function Mode3() {

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

  

  if(keyDown(UP_ARROW)){
	player.y = player.y-5;

  }

  if(keyDown(DOWN_ARROW)){
	player.y = player.y+5;
}

if(player.x === 1600){
	player.velocityX = 0;

}





  createDino();

player.collide(edges[3]);
  
}

