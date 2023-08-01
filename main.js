function preload(){mario_gameover=loadSound("gameover.wav");
mario_jump=loadSound("jump.wav");
mario_coin=loadSound("coin.wav");
mario_kick=loadSound("kick.wav");
mario_die=loadSound("mariodie.wav");
world_start=loadSound("world_start.wav");
setSprites();
MarioAnimation();


}
function setup(){
 
 canvas=createCanvas(1200,340);
 canvas.parent("canvas");
 instializeInSetup(mario);
 video=createCapture(VIDEO);
 video.size(180,180);
 video.parent("game_console");
 poseNet=ml5.poseNet(video,hola);
 poseNet.on("pose", holas)
 




}

function hola(){
console.log("ya cargo");





}
function holas(holaas){
if(holaas.length>0){console.log(holaas);
noseX=holaas[0].pose.nose.x;
noseY=holaas[0].pose.nose.y;

} 


}
function draw(){
game();



}