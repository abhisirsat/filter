noseX =0;
noseY =0;
function preload() {
swag=loadImage('https://i.postimg.cc/Qdzxtmp8/swag.png');
//mask=loadImage('https://i.postimg.cc/x8SdQ3Ws/mask.png');
//clown=loadImage('https://i.postimg.cc/FssLkPJ3/clown-nose.png');

}

function setup() {

canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide();

poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function modelLoaded(){

console.log('poseNet is initalised');

}

function gotPoses(results){

if(results.length > 0){
    console.log(results);
    noseX=results[0].pose.nose.x;
    noseY=results[0].pose.nose.y;
    console.log("nosex = " + noseX);
    console.log("nosey = " + noseY);
}

}

function draw(){

image(video ,0,0,300,300);
fill(255 ,0 ,0);
stroke("red");

//image(mask ,noseX-80,noseY-100,150,180)
image(swag ,noseX-80,noseY-70,160,130);
//image(clown ,noseX-15,noseY-20,30,35);
}

function take() {

save('filter.png');

}

