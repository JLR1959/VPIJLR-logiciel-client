/* ======================================================
MODULE 200
LICENCE CLIENT
====================================================== */

async function verifierLicence(){

try{

const reponse = await fetch("./licence.json");

if(!reponse.ok){
throw new Error("Licence absente");
}

const licence = await reponse.json();

const expiration = new Date(licence.expiration);
const aujourdHui = new Date();

if(!licence.logiciel || licence.logiciel !== "VPIJLR"){
console.log("Licence invalide");
return;
}

if(aujourdHui > expiration){
bloquerLogiciel("Licence expirée");
return;
}

verifierCle(licence);

}catch(e){

console.log("Mode essai activé");

/* PAS DE BLOCAGE */
return;

}

}
