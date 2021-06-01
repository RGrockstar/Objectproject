img1="";
img2="";
img3="";
img4="";
img5="";
function preload(){
img1=loadImage("20210601_164235.jpg")
img2=loadImage("20210601_164325.jpg")
img3=loadImage("20210601_164605.jpg")
img4=loadImage("20210601_164835.jpg")
img5=loadImage("20210601_164930.jpg")
}
function setup(){
canvas=createCanvas(380, 380);
canvas.center();
object_detecter=ml5.objectDetector('cocossd', modelLoaded);
document.getElementById("status").innerHTML="detecting_objects";
}
function modelLoaded(){
    console.log("model_loaded");
    status=true;
}
function gotResults(results){
if(results.length > 0){
console.log(results);
}
}