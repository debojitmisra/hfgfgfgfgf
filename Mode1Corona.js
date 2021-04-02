function createCorona(){
	
	if(frameCount % 100 === 0){
	 var randPos  = random(100,350);
     var corona = createSprite(player.x+550,randPos,10,10);
     corona.velocityX = frameCount/50*(-1);

	 var randImage = Math.round(random(1,3));

	
	
	switch(randImage){

	 case 1: corona.addImage(covid1);
   corona.scale = 0.2;
	 break;
	 case 2:corona.addImage(covid2);
   corona.scale = 0.3;
	 break;
     default:corona.addImage(covid3);
     corona.scale = 0.3;
	 break;

	}
	  
    corona.lifetime = 500;
    coronaGroup.add(corona);
   }

}

function createMask(){
	//if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var mask = createSprite(player.x+450,randPos,10,10);
        mask.shapeColor = "blue";
        mask.setVelocity(Math.round(random(2,4))*(-1), Math.round(random(3,4)));
        if(frameCount % 3 === 0 ){
            mask.velocityX *= -1;
        }
        else{
            mask.velocityY *= -1;
        }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1:mask.addImage(mask1);
    mask.scale = 0.4;
		break;
		case 2:mask.addImage(mask2);
    mask.scale = 0.4;
		break;
		default:mask.addImage(mask2);
    mask.scale = 0.4;
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   mask.lifetime = 500;
	   maskGroup.add(mask);
     
	  //}
}

function createSanitizer(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var sanitizer = createSprite(player.x+490,randPos,10,10);
        sanitizer.shapeColor = "black";
        sanitizer.setVelocity(Math.round(random(2,5))*(-1), Math.round(random(3,5)));

        if(frameCount % 3 === 0 ){
            sanitizer.velocityX *= -1;
        }
         else{
            sanitizer.velocityY *= -1;
         }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1:sanitizer.addImage(sanitizer1);
    sanitizer.scale = 0.4;
		break;
		case 2:sanitizer.addImage(sanitizer2);
    sanitizer.scale = 0.4;
		break;
		default:sanitizer.addImage(sanitizer2);
    sanitizer.scale = 0.4;
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   sanitizer.lifetime = 500;
	   sanitizerGroup.add(sanitizer);
	  //}
}

function createPPE(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var ppe = createSprite(player.x+450,randPos,10,10);
        ppe.shapeColor = "brown";
        ppe.setVelocity(Math.round(random(5,8)*(-1)), Math.round(random(4,7)));

        if(frameCount % 3 === 0 ){
            ppe.velocityX *= -1;
        }
        else{
            ppe.velocityY *= -1;
        }

        ppe.addImage(ppe1);
        ppe.scale = 0.4;
		var randImage = Math.round(random(1,3));
	   
	   ppe.lifetime = 500;
	   ppeGroup.add(ppe);
	  //}
}

function createAllies(){
    var rand = Math.round(random(1,6));

    switch(rand){
        //this method is called ripple effect or fallthrough
        case 1: 
        case 2:
        case 3:
               createMask();
                break;
        case 4:
        case 5:
               createSanitizer();
                break;
        default: createPPE();

    }
}

function Mode1() {

	textSize(20);
  text("SCORE: "+ score ,camera.x-870,50);
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
  //coronaGroup.velocityXEach = 0;
  //coronaGroup.velocityYEach = 0;
  coronaGroup.destroyEach();
  endLoseImg.visible = true;
  endLoseImg.addImage(mode1EndImg);
}

  camera.x = player.x;

  console.log(player.x);

  if(frameCount % 31 === 0){
	createAllies();
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





  createCorona();

player.collide(edges[3]);
  
}

