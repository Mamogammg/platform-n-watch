gdjs.Game_32Scene3Code = {};
gdjs.Game_32Scene3Code.localVariables = [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects1= [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects2= [];
gdjs.Game_32Scene3Code.GDJumpButtonObjects3= [];
gdjs.Game_32Scene3Code.GDJoystickObjects1= [];
gdjs.Game_32Scene3Code.GDJoystickObjects2= [];
gdjs.Game_32Scene3Code.GDJoystickObjects3= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects1= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects2= [];
gdjs.Game_32Scene3Code.GDNewSpriteObjects3= [];
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects1= [];
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects2= [];
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects3= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2= [];
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3= [];
gdjs.Game_32Scene3Code.GDFlagRedObjects1= [];
gdjs.Game_32Scene3Code.GDFlagRedObjects2= [];
gdjs.Game_32Scene3Code.GDFlagRedObjects3= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2= [];
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3= [];
gdjs.Game_32Scene3Code.GDBigJumpObjects1= [];
gdjs.Game_32Scene3Code.GDBigJumpObjects2= [];
gdjs.Game_32Scene3Code.GDBigJumpObjects3= [];
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects1= [];
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects2= [];
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects3= [];
gdjs.Game_32Scene3Code.GDTurnObjects1= [];
gdjs.Game_32Scene3Code.GDTurnObjects2= [];
gdjs.Game_32Scene3Code.GDTurnObjects3= [];
gdjs.Game_32Scene3Code.GDCoinsObjects1= [];
gdjs.Game_32Scene3Code.GDCoinsObjects2= [];
gdjs.Game_32Scene3Code.GDCoinsObjects3= [];
gdjs.Game_32Scene3Code.GDBackgroundObjects1= [];
gdjs.Game_32Scene3Code.GDBackgroundObjects2= [];
gdjs.Game_32Scene3Code.GDBackgroundObjects3= [];
gdjs.Game_32Scene3Code.GDSpikesObjects1= [];
gdjs.Game_32Scene3Code.GDSpikesObjects2= [];
gdjs.Game_32Scene3Code.GDSpikesObjects3= [];
gdjs.Game_32Scene3Code.GDStairsObjects1= [];
gdjs.Game_32Scene3Code.GDStairsObjects2= [];
gdjs.Game_32Scene3Code.GDStairsObjects3= [];


gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDCoinsObjects1Objects = Hashtable.newFrom({"Coins": gdjs.Game_32Scene3Code.GDCoinsObjects1});
gdjs.Game_32Scene3Code.eventsList0 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getVariableBoolean(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").simulateRightKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}}

}


};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDJumpButtonObjects1ObjectsGDgdjs_9546Game_959532Scene3Code_9546GDJoystickObjects1Objects = Hashtable.newFrom({"JumpButton": gdjs.Game_32Scene3Code.GDJumpButtonObjects1, "Joystick": gdjs.Game_32Scene3Code.GDJoystickObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDTurnObjects1Objects = Hashtable.newFrom({"Turn": gdjs.Game_32Scene3Code.GDTurnObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDTurnObjects1Objects = Hashtable.newFrom({"Turn": gdjs.Game_32Scene3Code.GDTurnObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDFlagRedObjects1Objects = Hashtable.newFrom({"FlagRed": gdjs.Game_32Scene3Code.GDFlagRedObjects1});
gdjs.Game_32Scene3Code.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1, gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").isJumping() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("Animation").setAnimationName("jump");
}
}}

}


{

gdjs.copyArray(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1, gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("PlatformerObject").isFalling() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2[i].getBehavior("Animation").setAnimationName("fall");
}
}}

}


{

/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isOnFloor() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}}

}


};gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDBigJumpObjects1Objects = Hashtable.newFrom({"BigJump": gdjs.Game_32Scene3Code.GDBigJumpObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects = Hashtable.newFrom({"Platformer_Character": gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1});
gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDBigJumpObjects1Objects = Hashtable.newFrom({"BigJump": gdjs.Game_32Scene3Code.GDBigJumpObjects1});
gdjs.Game_32Scene3Code.eventsList2 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Coins"), gdjs.Game_32Scene3Code.GDCoinsObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDCoinsObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDCoinsObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDCoinsObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDCoinsObjects1[i].deleteFromScene(runtimeScene);
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
gdjs.Game_32Scene3Code.eventsList0(runtimeScene);} //End of subevents
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
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Joystick"), gdjs.Game_32Scene3Code.GDJoystickObjects1);
gdjs.copyArray(runtimeScene.getObjects("JumpButton"), gdjs.Game_32Scene3Code.GDJumpButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.pickAllObjects((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDJumpButtonObjects1ObjectsGDgdjs_9546Game_959532Scene3Code_9546GDJoystickObjects1Objects);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDJoystickObjects1 */
/* Reuse gdjs.Game_32Scene3Code.GDJumpButtonObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDJumpButtonObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDJumpButtonObjects1[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.Game_32Scene3Code.GDJoystickObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDJoystickObjects1[i].deleteFromScene(runtimeScene);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32Scene3Code.GDTurnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDTurnObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1)).setBoolean(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32Scene3Code.GDTurnObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDTurnObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0)).toggle();
}
}{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].returnVariable(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(1)).setBoolean(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), true, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariableBoolean(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getVariables().getFromIndex(0), false, false) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Flippable").flipX(true);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("InOnScreen").IsOnScreen(0, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined))) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, gdjs.evtTools.runtimeScene.getSceneName(runtimeScene), false);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Turn"), gdjs.Game_32Scene3Code.GDTurnObjects1);
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDTurnObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDTurnObjects1[i].hide();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("FlagRed"), gdjs.Game_32Scene3Code.GDFlagRedObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDFlagRedObjects1Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Game Scene", false);
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {

{ //Subevents
gdjs.Game_32Scene3Code.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length;i<l;++i) {
    if ( !(gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").isMovingEvenALittle()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[k] = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigJump"), gdjs.Game_32Scene3Code.GDBigJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDBigJumpObjects1Objects, 20, false);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(1000);
}
}{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("BigJump"), gdjs.Game_32Scene3Code.GDBigJumpObjects1);
gdjs.copyArray(runtimeScene.getObjects("Platformer_Character"), gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.distanceTest(gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDPlatformer_95959595CharacterObjects1Objects, gdjs.Game_32Scene3Code.mapOfGDgdjs_9546Game_959532Scene3Code_9546GDBigJumpObjects1Objects, 20, true);
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1[i].getBehavior("PlatformerObject").setJumpSpeed(717);
}
}}

}


};

gdjs.Game_32Scene3Code.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32Scene3Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects1.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects2.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects1.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects2.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects1.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects2.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects3.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects1.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects2.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects3.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects1.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects2.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects3.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects1.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects2.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects3.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects1.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects2.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects3.length = 0;

gdjs.Game_32Scene3Code.eventsList2(runtimeScene);
gdjs.Game_32Scene3Code.GDJumpButtonObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJumpButtonObjects3.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects1.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects2.length = 0;
gdjs.Game_32Scene3Code.GDJoystickObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewTiledSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32Scene3Code.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects1.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects2.length = 0;
gdjs.Game_32Scene3Code.GDFlagRedObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatformer_9595CharacterObjects3.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects1.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects2.length = 0;
gdjs.Game_32Scene3Code.GDBigJumpObjects3.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects1.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects2.length = 0;
gdjs.Game_32Scene3Code.GDPlatform_9595GroundObjects3.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects1.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects2.length = 0;
gdjs.Game_32Scene3Code.GDTurnObjects3.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects1.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects2.length = 0;
gdjs.Game_32Scene3Code.GDCoinsObjects3.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects1.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects2.length = 0;
gdjs.Game_32Scene3Code.GDBackgroundObjects3.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects1.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects2.length = 0;
gdjs.Game_32Scene3Code.GDSpikesObjects3.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects1.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects2.length = 0;
gdjs.Game_32Scene3Code.GDStairsObjects3.length = 0;


return;

}

gdjs['Game_32Scene3Code'] = gdjs.Game_32Scene3Code;
