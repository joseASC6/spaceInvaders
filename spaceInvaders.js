function setup(){
    createCanvas(700, 700);
    background(0, 0, 0);
}
let x1 = 325;
let x2 = 350;
let x3 = 375;
var speed = 6;
function draw(){
    triangle(x1, 650, x2, 625, x3, 650);
    if( keycode === RIGht_ARROW){
        x1 = x + speed;
        x2 = x + speed;
        x3 = x + speed;
    }
    if( keycode === LEFT_ARROW){
        speed = 
        x1 = x - speed;
        x2 = x - speed;
        x3 = x - speed;
    }
}