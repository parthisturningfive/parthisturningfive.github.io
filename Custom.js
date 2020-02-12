
       var can, ctx, step, steps = 0,
             delay = 20;
 
function init() {
    can = document.getElementById("MyCanvas1");
    ctx = can.getContext("2d");
    ctx.fillStyle = "White";
    ctx.font = "30pt Comic";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    
    step = 320;
    steps = 0;
    RunTextLeftToRight();
}
 
function RunTextLeftToRight() {
    step--;
    ctx.clearRect(0, 0, can.width, can.height);
    ctx.save();
    ctx.translate(step, can.height / 2);
    ctx.fillText("Parth is turning five :)", 0, 0);
    ctx.restore();
    if (step == steps)
        step = 320;
    if (step > steps)
        var t = setTimeout('RunTextLeftToRight()', delay);
}
