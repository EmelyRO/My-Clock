/* Creating the canvas */
var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();

/* end of canvas */

/* Clock Face */

function drawClock() {
    drawFace(ctx, radius);
    drawNumbers(ctx, radius);
}

function drawFace(ctx, radius) {
    var grad;
    ctx.beginPath(); /*draws the white circle */
    ctx.arc(0, 0, radius, 0, 2*Math.PI);
    ctx.fillStyle = 'white';
    ctx.fill();
    /*creates a radial gradiant*/
    grad = ctx.createRadialGradient(0,0,radius*0.95, 0,0,radius*1.05);
    /* color stops create the 3D effect*/
    grad.addColorStop(0, '#333');
    grad.addColorStop(0.5, 'white');
    grad.addColorStop(1, '#333');
    ctx.strokeStyle = grad; /*defines the gradiant */
    ctx.lineWidth = radius*0.1;
    ctx.stroke();/*draws the cicle */
    ctx.beginPath();/*draws the black dot in the center*/
    ctx.arc(0, 0, radius*0.1, 0, 2*Math.PI);
    ctx.fillStyle = '#333';
    ctx.fill();
}
/*end of clock face */

/*adding numbers to the clock*/

function drawNumbers(ctx, radius) {
    var ang;
    var num;
    ctx.font = radius*0.15 + "px arial"; /*font size*/
    ctx.textBaseline="middle"; /*text alignment*/
    ctx.textAlign="center";
    /*print position of each number 1-12 (85% of the radius)*/
    for(num= 1; num < 13; num++){
        ang = num * Math.PI / 6;
        ctx.rotate(ang);
        ctx.translate(0, -radius*0.85);
        ctx.rotate(-ang);
        ctx.fillText(num.toString(), 0, 0);
        ctx.rotate(ang);
        ctx.translate(0, radius*0.85);
        ctx.rotate(-ang);
    }
}
/*numbers*/

