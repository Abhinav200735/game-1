var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["4fa269a1-a426-46f2-8ed4-c458da7b4621","dc2e027c-aced-42e6-8cb9-5c05a83c3a95","1bf7f3cf-5fcd-4173-8fc0-e8b088ade8ac","dd0f2c27-a78e-403f-ba56-005dbd9c5909","9211ce47-ef7d-4448-85c8-7c75152d3e8f","4fcb27ba-3bb9-4af4-83d4-431434c2ce79","3996943a-bc15-48d1-bf7c-ac82a748e0ab"],"propsByKey":{"4fa269a1-a426-46f2-8ed4-c458da7b4621":{"name":"ship1","sourceUrl":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png","frameSize":{"x":400,"y":360},"frameCount":1,"looping":true,"frameDelay":2,"version":"qCW7Tixx88sOCasiy96wH5apD47R5g5e","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":360},"rootRelativePath":"assets/api/v1/animation-library/gamelab/qCW7Tixx88sOCasiy96wH5apD47R5g5e/category_vehicles/ship08.png"},"dc2e027c-aced-42e6-8cb9-5c05a83c3a95":{"name":"ship2","sourceUrl":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png","frameSize":{"x":398,"y":298},"frameCount":1,"looping":true,"frameDelay":2,"version":"16swvA_atz8z1bmx9elbnfkygyuHWDMs","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":298},"rootRelativePath":"assets/api/v1/animation-library/gamelab/16swvA_atz8z1bmx9elbnfkygyuHWDMs/category_vehicles/ship10.png"},"1bf7f3cf-5fcd-4173-8fc0-e8b088ade8ac":{"name":"ship3","sourceUrl":"assets/api/v1/animation-library/gamelab/RXu9Kyhg813D_6Y0FXB9EwNojaFmoqIe/category_vehicles/ship13.png","frameSize":{"x":382,"y":399},"frameCount":1,"looping":true,"frameDelay":2,"version":"RXu9Kyhg813D_6Y0FXB9EwNojaFmoqIe","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":382,"y":399},"rootRelativePath":"assets/api/v1/animation-library/gamelab/RXu9Kyhg813D_6Y0FXB9EwNojaFmoqIe/category_vehicles/ship13.png"},"dd0f2c27-a78e-403f-ba56-005dbd9c5909":{"name":"ship4","sourceUrl":"assets/api/v1/animation-library/gamelab/acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX/category_vehicles/ship09.png","frameSize":{"x":400,"y":278},"frameCount":1,"looping":true,"frameDelay":2,"version":"acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":278},"rootRelativePath":"assets/api/v1/animation-library/gamelab/acj2gz96xkj4Q1iBtJ_8I6lJW0WaR0CX/category_vehicles/ship09.png"},"9211ce47-ef7d-4448-85c8-7c75152d3e8f":{"name":"sam","sourceUrl":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png","frameSize":{"x":264,"y":363},"frameCount":1,"looping":true,"frameDelay":2,"version":"ZLXVM_cc9g507KhPGhfemoX3EwF164Ju","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":363},"rootRelativePath":"assets/api/v1/animation-library/gamelab/ZLXVM_cc9g507KhPGhfemoX3EwF164Ju/category_faces/kidportrait_12.png"},"4fcb27ba-3bb9-4af4-83d4-431434c2ce79":{"name":"ship03_1","sourceUrl":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png","frameSize":{"x":400,"y":248},"frameCount":1,"looping":true,"frameDelay":2,"version":"h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":248},"rootRelativePath":"assets/api/v1/animation-library/gamelab/h02QIBF0cpkYXM6B4PxPp.nfr5g98UQi/category_vehicles/ship03.png"},"3996943a-bc15-48d1-bf7c-ac82a748e0ab":{"name":"ufo","sourceUrl":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png","frameSize":{"x":398,"y":332},"frameCount":1,"looping":true,"frameDelay":2,"version":"QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":398,"y":332},"rootRelativePath":"assets/api/v1/animation-library/gamelab/QrXSuy9Lst0RVUF7O1QEbrfGQLjzvxzy/category_vehicles/ufo_02.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var boundary1, boundary2;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);


var sam;
sam = createSprite(20,190,13,13);
sam.setAnimation("ufo");
sam.scale=0.05;
var car1;
car1 = createSprite(100,130,10,10);
car1.setAnimation("ship1");
car1.scale=0.05;
var car2;
car2 = createSprite(215,130,10,10);
car2.setAnimation("ship2");
car2.scale=0.05;
var car3;   
car3 = createSprite(165,250,10,10);
car3.setAnimation("ship3");
car3.scale=0.05;
var car4;
car4 = createSprite(270,250,10,10);
car4.setAnimation("ship4");
car4.scale=0.05;
var sun;
var sun = createSprite(40, 40, 100, 100);
sun.shapeColor="orange";

  
  
  car1.velocityY = 5;
  car2.velocityY = -5;
  car3.velocityY = -5;
  car4.velocityY = 5;
 

function draw() {
  background("black");
  if(sam.isTouching(car1) || sam.isTouching(car2)) 
  {
    playSound("assets/category_explosion/retro_game_classic_explosion_1.mp3");
  }
  if(sam.isTouching(car3) || sam.isTouching(car4)) 
  {
    playSound("assets/category_explosion/retro_game_classic_explosion_1.mp3");
  }
  
  
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("purple");
  rect(0,120,52,140);
  fill("green");
  rect(345,120,52,140);
  
  car1.bounceOff(boundary1);
  car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
  car2.bounceOff(boundary2);
  car3.bounceOff(boundary1);
  car3.bounceOff(boundary2);
  car4.bounceOff(boundary1);
  car4.bounceOff(boundary2);
  
 
  if(keyDown("d")){
    sam.x = sam.x + 3;
  }
  if(keyDown("a")){
    sam.x = sam.x - 3;
  }
  
  if(
     sam.isTouching(car1)||
     sam.isTouching(car2)||
     sam.isTouching(car3)||
     sam.isTouching(car4))
  {
     sam.x = 20;
     sam.y = 190;
     life = life + 1;
  }
  
 drawSprites();
}






// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
