
var angle;//the angle by which we want to rotate
var reducer = 0.67;//length by which we want to reduce the length of the branch line

var time = 0;//start the time

var miliseconds = 3;//time span after which we want to update the tree

var k;//for the repitition after we reach the max angle

var MAX;

function setup() {
    createCanvas(400, 400);
    angle = 0;
    MAX = PI / 4;//The max angle we want out tree to go to
}

function draw() {
    background(51);
    //can update the angle to random value to animate the tree
    //by puting the angle from 0 to PI at random and changing it
    //after certain time
    time = time + 1;
    if (time === miliseconds) {
        var t = MAX * 0.1; // to update the angle by some amount;	

        //set up the repetor loop to either go from 
        //start to end or end to start
        if (angle <= 0) {
            k = +1;
        }
        if (angle >= 1.0) {
            k = -1;
        }

        //no update the angle to do the animation
        angle = angle + k * t;
        //console.log(angle);
        time = 0;
    }
    //console.log(time);
    stroke(255);
    translate(200, height);
    drawTree(100);

}

function drawTree(len) {
    line(0, 0, 0, -len);
    translate(0, -len);
    if (len > 4) {
        push();
        rotate(angle);
        drawTree(len * reducer);
        pop();
        push();
        rotate(-angle);
        drawTree(len * reducer);
        pop();
    }

}
