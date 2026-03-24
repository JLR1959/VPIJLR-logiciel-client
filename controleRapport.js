document.addEventListener("DOMContentLoaded", function(){

const rapport = document.getElementById("rapport-impression");

if(!rapport) return;

rapport.style.display = "none";

});



function basculerRapport(){

const rapport = document.getElementById("rapport-impression");

if(!rapport) return;

if(rapport.style.display === "none"){

rapport.style.display = "block";

}else{

rapport.style.display = "none";

}

}
