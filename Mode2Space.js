function createAlien(){
	
	if(frameCount % 100 === 0){
	 var randPos  = random(100,350);
     var alien = createSprite(player.x+550,randPos,10,10);
     alien.velocityX = frameCount/50*(-1);

	 var randImage = Math.round(random(1,4));

	
	
	switch(randImage){

	 case 1:alien.addImage(alienImage1);
   alien.scale = 0.4;
	 break;
	 case 2:alien.addImage(alienImage2);
   alien.scale = 0.4;
	 break;
     case 3:alien.addImage(alienImage3);
     alien.scale = 0.4;
	 break;
     default:alien.addImage(alienImage1);
     alien.scale = 0.4;
	 break;

	}
	//enemy1.scale = 0.5;
    alien.lifetime = 500;
    alienGroup.add(alien);
   }

}

function createResearchSample(){
	//if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var research = createSprite(player.x+450,randPos,10,10);
        research.shapeColor = "blue";
        research.setVelocity(Math.round(random(2,4))*(-1), Math.round(random(3,4)));
        if(frameCount % 3 === 0 ){
            research.velocityX *= -1;
        }
        else{
           research.velocityY *= -1;
        }

		var randImage = Math.round(random(1,4));
   
	   
	   
	   switch(randImage){
   
		case 1:research.addImage(researchImage1);
    research.scale = 0.3;
		break;
		case 2:research.addImage(researchImage2);
    research.scale = 0.3;
		break;
    case 2:research.addImage(researchImage3);
    research.scale = 0.3;
		break;
		default:research.addImage(researchImage4);
    research.scale = 0.3;
		break;
   
	   }
	   
	  research.lifetime = 500;
	   researchGroup.add(research);
	  
}

function createWeapon(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var weapon = createSprite(player.x+490,randPos,10,10);
        weapon.shapeColor = "black";
        weapon.setVelocity(Math.round(random(2,5))*(-1), Math.round(random(3,5)));

        if(frameCount % 3 === 0 ){
            weapon.velocityX *= -1;
        }
         else{
            weapon.velocityY *= -1;
         }

		var randImage = Math.round(random(1,3));
   
	   
	   
	   switch(randImage){
   
		case 1:weapon.addImage(weaponImg1);
    weapon.scale = 0.3;
		break;
		case 2:weapon.addImage(weaponImg2);
    weapon.scale = 0.3;
		break;
		default:weapon.addImage(weaponImg3);
    weapon.scale = 0.3;
		break;
   
	   }
	   //enemy1.scale = 0.5;
	   weapon.lifetime = 500;
	   weaponGroup.add(weapon);
	  //}
}

/*function createABC(){
    //if(frameCount % 150 === 0){
		var randPos  = random(320,350);
		var abc = createSprite(player.x+450,randPos,10,10);
        abc.shapeColor = "brown";
        abc.setVelocity(Math.round(random(5,8)*(-1)), Math.round(random(4,7)));

        if(frameCount % 3 === 0 ){
            abc.velocityX *= -1;
        }
        else{
            abc.velocityY *= -1;
        }

        //ppe.addImage();
		var randImage = Math.round(random(1,3));
	   //enemy1.scale = 0.5;
	   abc.lifetime = 500;
	   abcGroup.add(abc);
	  //}
}*/

function createAllies2(){
    var rand = Math.round(random(1,6));

    switch(rand){
        //this method is called ripple effect or fallthrough
        case 1: 
        case 2:
        case 3:
               createResearchSample();
                break;
        case 4:
        case 5:
               createWeapon();
                break;
        default: createResearchSample();

    }
}

function Mode2() {

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

  

  if(keyDown(UP_ARROW)){
	player.y = player.y-5;

  }

  if(keyDown(DOWN_ARROW)){
	player.y = player.y+5;
}

if(player.x === 1600){
	player.velocityX = 0;
}





  createAlien();

player.collide(edges[3]);
  
}