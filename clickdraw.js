var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var stop = document.getElementById("stop");

var canvasCallBack = function(e){
    e.preventDefault();
    //drawDot(e.offset
    if (detMouse % 4 == 0){
	drawDot(e.offsetX, e.offsetY);
	console.log("offset");
    }
    else if (detMouse % 4 == 1){
	drawDot(e.clientX, e.clientY);
	console.log("client");
    }
    else if (detMouse % 4 == 2){
	drawDot(e.screenX, e.screenY);
	console.log("screen");
    }
    else{
	drawDot(e.pageX, e.pageY);
	console.log("page");
    }
};

var drawRect = function(x, y){
    ctx.fillStyle = "#00f";
    ctx.fillRect(x,y,30,30);
};

var drawDot = function(x, y){
    ctx.clearRect(0, 0, 600, 600);
    ctx.beginPath();
    ctx.fillStyle = "#ff0000";
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fill();
    ctx.closePath();
    x += 1;
    window.requestAnimationFrame(drawDot(x, y));
};

var called = false;
var canvasCB = function(e){
    console.log(called);
    if (!called){
	var id = window.requestAnimationFrame(drawDot(e.offsetX, e.offsetY));
	called = !called;
	console.log(called);
    }
    
};

var stopCallBack = function(id){
    window.cancelAnimationFrame(id);
};

stop.addEventListener("click", stopCallBack);
canvas.addEventListener("click", canvasCB);

