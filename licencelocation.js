/* ======================================================
MODULE 200
LICENCE CLIENT
====================================================== */

/* activer pendant développement */

const MODE_DEVELOPPEUR = true;


/* ======================================================
VERIFICATION LICENCE
====================================================== */

async function verifierLicence(){

/* mode développeur : ignore licence */

if(MODE_DEVELOPPEUR){

console.log("Mode développeur actif - licence ignorée");

return;

}

try{

const reponse = await fetch("./licence.json");

if(!reponse.ok){

throw new Error("Licence absente");

}

const licence = await reponse.json();

const expiration = new Date(licence.expiration);
const aujourdHui = new Date();

/* verification logiciel */

if(!licence.logiciel || licence.logiciel !== "VPIJLR"){

bloquerLogiciel("Licence invalide");

return;

}

/* verification expiration */

if(aujourdHui > expiration){

bloquerLogiciel("Licence expirée");

return;

}

/* verification cle */

verifierCle(licence);

}catch(e){

console.log("Licence introuvable - mode essai");

return;

}

}


/* ======================================================
VERIFICATION CLE
====================================================== */

function verifierCle(licence){

const base = licence.client + licence.expiration;

let hash = 0;

for(let i=0;i<base.length;i++){

hash = ((hash << 5) - hash) + base.charCodeAt(i);

hash = hash & hash;

}

const cleGeneree =
Math.abs(hash)
.toString(36)
.toUpperCase()
.slice(0,12);

if(!licence.cle || licence.cle !== cleGeneree){

bloquerLogiciel("Clé de licence invalide");

}

}


/* ======================================================
BLOCAGE LOGICIEL
====================================================== */

function bloquerLogiciel(message){

document.body.innerHTML = `
<div style="
font-family:Arial;
text-align:center;
margin-top:120px;
">

<h1>${message}</h1>

<p>
Licence du logiciel invalide ou expirée.
</p>

</div>
`;

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierLicence();

});
