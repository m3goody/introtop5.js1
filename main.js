function Preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.postition(110,250);
    video=createCapture(VIDEO);
    video.height();
    tint_color="";
}
function drop(){
    image(video,0,0,640,480);
    tint(tint_color);
}
function take_snapshot(){
    SVGAElement('my_great_image.png');
}
function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}