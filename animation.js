// canvas setup
var canvas = document.getElementById("slate");
var height = canvas.getAttribute("height");
var width = canvas.getAttribute("width");
var ctx = canvas.getContext("2d"); // set context to 2d

// buttons
var bounce = document.getElementById("bounce");
var grow = document.getElementById("grow");
var stop = document.getElementById("stop");

var isRunning = false;

// bounce animation
var posX = width / 2;
var posY = height / 2;
var incX = 5;
var incY = 5;

var logo = new Image();
logo.src = "logo_dvd.jpg";

// grow animation
var radius = 1;
var increment = 1;
var id;

var bounceCallBack = function(){
  if (!isRunning){
    bounceDot();
    isRunning = !isRunning
  }
};

var growCallBack = function(){
  if (!isRunning){
    growDot();
    isRunning = !isRunning;
  }
};

var stopCallBack = function(){
  window.cancelAnimationFrame(id);
  ctx.clearRect(0, 0, width, height);
  radius = 1;
  isRunning = false;
};

// Bounce dot of radius 50
var bounceDot = function(){
  dvdHeight = 50;
  dvdWidth = 100;
  //console.log(posX);
  if (posX <= dvdWidth / 2){ // bouncing off left wall
    incX = 1 * Math.floor(Math.random() * 5 + 2);
  }
  if (posY <= dvdHeight / 2){ // top wall
    incY = 1 * Math.floor(Math.random() * 5 + 2);
  }
  if (posX >= width - (dvdWidth / 2)){ // right wall
    incX = -1 * Math.floor(Math.random() * 5 + 2);
  }
  if (posY >= height - (dvdHeight / 2)){ // bottom wall
    incY = -1 * Math.floor(Math.random() * 5 + 2);
  }
  posX += incX;
  posY += incY;
  //drawDot(posX, posY, radius, "red");
  ctx.drawImage(logo, posX, posY, 100, 50);
  id = window.requestAnimationFrame(bounceDot);
  //console.log(id);
};

// Grow (or shrink) centered dot
var growDot = function(){
  if (radius == 0 || radius == 150)
    increment *= -1;
  radius += increment;
  drawDot(width / 2, height / 2, radius, "blue");
  id = window.requestAnimationFrame(growDot);
  console.log(id);
};

// Draw dot with position (x,y), radius r and color c
var drawDot = function(x, y, r, c){
  ctx.clearRect(0, 0, width, height);
  ctx.beginPath();
  ctx.arc(x, y, r, 0, 2 * Math.PI);
  ctx.fillStyle = c;
  ctx.fill();
};

bounce.addEventListener("click", bounceCallBack);
grow.addEventListener("click", growCallBack);
stop.addEventListener("click", stopCallBack);
