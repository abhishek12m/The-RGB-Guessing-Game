var sqr = document.querySelectorAll('.square');
var easy = document.querySelector('.easy');
var hard =document.querySelector('.hard');
var rgb = document.querySelector('.rgb');
var clickedcolor;
var message = document.querySelector('.message');
var newgame = document.querySelector('.newgame');


function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}
var num = 6;
var pickedcolor;
var colors=[];
init()

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
    rgb.textContent=colors[random];
    
	return colors[random];
}

