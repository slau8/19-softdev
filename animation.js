var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

var start = document.getElementById("start");
var stop = document.getElementById("stop");

var isRunning = false;
var radius = 1;
var increment = 1;
var id;

var startCallBack = function(){
  if (!isRunning){
    drawDot();
    isRunning = !isRunning;
  }
};

var drawDot = function(){
  if (radius == 0 || radius == 150)
    increment *= -1;
  radius += increment;
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.arc(width / 2, height / 2, radius, 0, 2 * Math.PI);
  ctx.fillStyle = "blue";
  ctx.fill();
  id = window.requestAnimationFrame(drawDot);
  console.log(id);
}

var stopCallBack = function(){
  window.cancelAnimationFrame(id);
  isRunning = false;
};

start.addEventListener("click", startCallBack);
stop.addEventListener("click", stopCallBack);
