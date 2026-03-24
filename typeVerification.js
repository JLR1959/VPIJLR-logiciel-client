/* ======================================================
MODULE 1
TYPE DE VÉRIFICATION + BANDEAU SYNCHRONISÉ
====================================================== */

function choisirVerification(type){

const select = document.getElementById("type-piece");
const bandeau = document.getElementById("bandeau-mode-verification");

if(!select) return;


/* ======================================================
LISTE DES PIÈCES
====================================================== */

const piecesInterieur = [

"Cuisine",
"Salle de bain",
"Salle d'eau",
"Salle à manger",
"Salon",
"Chambre",
"Bureau",
"Corridor",
"Escalier",
"Hall d'entrée",
"Sous-sol",
"Salle mécanique",
"Salle électrique",
"Éclairage",
"Salle lavage"
"Réservoir eau chaude",

];

const piecesExterieur = [

"Garage",
"Balcon",
"Terrasse",
"Piscine",
"Verrière",
"Climatisation",
"Porte patio",
"Stationnement",
"Borne de recharge",
"Clôture",
"Cabanon",
"Porte",
"Vide sanitaire"

];


/* ======================================================
VIDER LISTE
====================================================== */

select.innerHTML = '<option value="">Pièces ou éléments</option>';

let liste = [];


/* ======================================================
CHOIX TYPE
====================================================== */

if(type === "interieur"){
liste = piecesInterieur;

if(bandeau){
bandeau.textContent = "Mode de vérification : INTÉRIEURE";
bandeau.classList.remove("bandeau-exterieur");
bandeau.classList.add("bandeau-interieur");
}

}

if(type === "exterieur"){
liste = piecesExterieur;

if(bandeau){
bandeau.textContent = "Mode de vérification : EXTÉRIEURE";
bandeau.classList.remove("bandeau-interieur");
bandeau.classList.add("bandeau-exterieur");
}

}


/* ======================================================
RECONSTRUCTION LISTE
====================================================== */

liste.forEach(function(piece){

const option = document.createElement("option");

option.value = piece;
option.textContent = piece;

select.appendChild(option);

});


/* ======================================================
ENREGISTRER TYPE
====================================================== */

const champType = document.getElementById("type-verification");

if(champType){
champType.value = type;
}

}
