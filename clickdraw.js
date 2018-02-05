var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var toggle = document.getElementById("toggle");
var clear = document.getElementById("clear");

var detMouse = 0;

var toggleCallBack = function(e){
    detMouse++;
};

var clearCallBack = function(e){
    console.log("cleared");
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,600,600);  
};

var canvasCallBack = function(e){
    e.preventDefault();
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
    ctx.fillStyle = "#ff0000";
    ctx.arc(x,y,20,0,2*Math.PI);
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    ctx.lineTo(x,y);
};

toggle.addEventListener("click", toggleCallBack);
clear.addEventListener("click", clearCallBack);
canvas.addEventListener("click", canvasCallBack);
