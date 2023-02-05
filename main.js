function preload(){

}
function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
    tint_color="";
}
function draw(){
    image(video,150,150,320,240);
    tint(tint_color);
}

function cir(){
    let c = color('red');
  fill(c);
  stroke(0,100,0);
  circle(50, 50, 40);
}

function rectangle(){
    ir_color=document.getElementById("ir_color_name").value;
    or_color=document.getElementById("or_color_name").value;
    let c1 = color(or_color);
fill(c1);
noStroke();
rect(100, 100, 430, 340);
let c2 = color(ir_color);
fill(c2);
noStroke();
rect(120, 120, 390, 300);
}

function ellip(){
    ellipse(56, 46, 55, 55);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value;
}
