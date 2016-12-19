var canvas = document.getElementById("sandbox");
var context = canvas.getContext("2d");
var line = new Path2D();
line.moveTo(0,0);
line.lineTo(300,300);
/*line.moveTo(0,300);
line.lineTo(300,0);
line.moveTo(150,0);
line.lineTo(150,300);
line.moveTo(0,150);
line.lineTo(300,150);*/

//line.arc(150,150,100,0,2*Math.PI);


context.lineWidth = 5;
context.stroke(line);
context.fillStyle = "red";
context.fillRect(0,0,200,200);
context.fillStyle = "rgba(0,255,0,0.5)";
context.fillRect(100,100,200,200);
