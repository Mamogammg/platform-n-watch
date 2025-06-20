gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDJumpButtonObjects1= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects2= [];
gdjs.Game_32SceneCode.GDJumpButtonObjects3= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects3= [];
gdjs.Game_32SceneCode.GDFlagRedObjects1= [];
gdjs.Game_32SceneCode.GDFlagRedObjects2= [];
gdjs.Game_32SceneCode.GDFlagRedObjects3= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3= [];
gdjs.Game_32SceneCode.GDBigJumpObjects1= [];
gdjs.Game_32SceneCode.GDBigJumpObjects2= [];
gdjs.Game_32SceneCode.GDBigJumpObjects3= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3= [];
gdjs.Game_32SceneCode.GDTurnObjects1= [];
gdjs.Game_32SceneCode.GDTurnObjects2= [];
gdjs.Game_32SceneCode.GDTurnObjects3= [];
gdjs.Game_32SceneCode.GDCoinsObjects1= [];
gdjs.Game_32SceneCode.GDCoinsObjects2= [];
gdjs.Game_32SceneCode.GDCoinsObjects3= [];
gdjs.Game_32SceneCode.GDBackgroundObjects1= [];
gdjs.Game_32SceneCode.GDBackgroundObjects2= [];
gdjs.Game_32SceneCode.GDBackgroundObjects3= [];
gdjs.Game_32SceneCode.GDSpikesObjects1= [];
gdjs.Game_32SceneCode.GDSpikesObjects2= [];
gdjs.Game_32SceneCode.GDSpikesObjects3= [];
gdjs.Game_32SceneCode.GDStairsObjects1= [];
gdjs.Game_32SceneCode.GDStairsObjects2= [];
gdjs.Game_32SceneCode.GDStairsObjects3= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32SceneCode.GDCoinsObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJumpButtonObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Game_32SceneCode.GDJumpButtonObjects1, "Joystick": gdjs.Game_32SceneCode.GDJoystickObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTurnObjects1Objects = Hashtable.newFrom({"Turn": gdjs.Game_32SceneCode.GDTurnObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTurnObjects1Objects = Hashtable.newFrom({"Turn": gdjs.Game_32SceneCode.GDTurnObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFlagRedObjects1Objects = Hashtable.newFrom({"FlagRed": gdjs.Game_32SceneCode.GDFlagRedObjects1});
gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1, gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getBehavior("Animation").setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1, gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2[i].getBehavior("Animation").setAnimationName("fall");
}
}}

}


{

/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32SceneCode.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
}
}{gdjs.evtTools.sound.playSound(runtimeScene, "PickupCoin", false, 80, gdjs.randomFloatInRange(1, 1.1));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Return");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32SceneCode.GDJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32SceneCode.GDJumpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDJumpButtonObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDJoystickObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDJoystickObjects1 */
/* Reuse gdjs.Game_32SceneCode.GDJumpButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32SceneCode.GDJoystickObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32SceneCode.GDTurnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTurnObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32SceneCode.GDTurnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTurnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getY() > gdjs.evtTools.window.getGameResolutionHeight(runtimeScene) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32SceneCode.GDTurnObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDTurnObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTurnObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlagRed"), gdjs.Game_32SceneCode.GDFlagRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDFlagRedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene2", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32SceneCode.eventsList1(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects1.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects2.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects1.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects2.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects1.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects2.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects3.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects1.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects2.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects3.length = 0;

gdjs.Game_32SceneCode.eventsList2(runtimeScene);
gdjs.Game_32SceneCode.GDJumpButtonObjects1.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects2.length = 0;
gdjs.Game_32SceneCode.GDJumpButtonObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects1.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects2.length = 0;
gdjs.Game_32SceneCode.GDFlagRedObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects1.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects2.length = 0;
gdjs.Game_32SceneCode.GDBigJumpObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects1.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects2.length = 0;
gdjs.Game_32SceneCode.GDTurnObjects3.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects1.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects2.length = 0;
gdjs.Game_32SceneCode.GDCoinsObjects3.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDBackgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects1.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects2.length = 0;
gdjs.Game_32SceneCode.GDSpikesObjects3.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects1.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects2.length = 0;
gdjs.Game_32SceneCode.GDStairsObjects3.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
