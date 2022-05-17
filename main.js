nose_X=0;
nose_y=0;
difference=0;
leftwrist_x=0;
rightwrist_x=0;

function preload(){

}
function setup(){
canvas=createCanvas(400,400);
camera=createCapture(VIDEO);
camera.size(400,400);
camera.position(80,230);
canvas.position(600,280)
poseNet=ml5.poseNet(camera,modelLoaded);
poseNet.on('pose',gotPoses);
difference=Math.floor(leftwrist_x-rightwrist_x);
}
function draw(){
background("grey");
fill("pink");
stroke("black");
square(nose_X,nose_y,difference);

}
function modelLoaded(){
console.log("model loaded sucessfully");
}
function gotPoses(results){
if(results.length > 0){
    console.log(results)
    nose_X=results[0].pose.nose.x;
    nose_y=results[0].pose.nose.y;
    leftwrist_x=results[0].pose.leftWrist.x;
    rightwrist_x=results[0].pose.rightWrist.x;
}
else{
console.log("erorr");
}
}