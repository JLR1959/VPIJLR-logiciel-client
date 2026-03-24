document.addEventListener("DOMContentLoaded", function () {

initialiserSignature("signature-client");
initialiserSignature("signature-verificateur");

});



function initialiserSignature(idCanvas){

const canvas = document.getElementById(idCanvas);

if(!canvas) return;

const ctx = canvas.getContext("2d");

let dessin = false;



canvas.style.touchAction = "none";



canvas.addEventListener("pointerdown", function(e){

dessin = true;

ctx.beginPath();

const rect = canvas.getBoundingClientRect();

ctx.moveTo(
e.clientX - rect.left,
e.clientY - rect.top
);

});



canvas.addEventListener("pointermove", function(e){

if(!dessin) return;

const rect = canvas.getBoundingClientRect();

ctx.lineTo(
e.clientX - rect.left,
e.clientY - rect.top
);

ctx.stroke();

});



canvas.addEventListener("pointerup", function(){

dessin = false;

});



canvas.addEventListener("pointerleave", function(){

dessin = false;

});

}
