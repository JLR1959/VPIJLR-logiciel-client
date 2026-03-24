/* ======================================================
MODULE 1
REMPLIR INFORMATIONS CLIENT DANS LE RAPPORT
====================================================== */

function remplirInformationsRapport(){

const dossier = document.getElementById("numeroDossier")
const locataire = document.getElementById("locataire")
const telephone = document.getElementById("telephone")
const adresse = document.getElementById("adresse")
const appartement = document.getElementById("numeroAppartement")
const ville = document.getElementById("ville-quebec")

const rDossier = document.getElementById("rapport-dossier")
const rLocataire = document.getElementById("rapport-locataire")
const rTelephone = document.getElementById("rapport-telephone")
const rAdresse = document.getElementById("rapport-adresse")

if(dossier && rDossier){
rDossier.textContent = dossier.value || ""
}

if(locataire && rLocataire){
rLocataire.textContent = locataire.value || ""
}

if(telephone && rTelephone){
rTelephone.textContent = telephone.value || ""
}

if(rAdresse){

const adresseComplete = [
adresse ? adresse.value : "",
appartement ? appartement.value : "",
ville ? ville.value : ""
].filter(function(valeur){
return valeur && valeur.trim() !== ""
}).join(", ")

rAdresse.textContent = adresseComplete

}

}



/* ======================================================
MODULE 2
CALCUL FACTURATION RAPPORT SÉCURISÉ
====================================================== */

function obtenirFacturationRapportSecurisee(){

if(typeof calculerFacturationRapport === "function"){

try{

const facture = calculerFacturationRapport()

if(facture){
return facture
}

}catch(e){

console.warn("calculerFacturationRapport a échoué :", e)

}

}

const secondes = typeof tempsTotalSecondes !== "undefined" ? tempsTotalSecondes : 0
const taux = typeof tauxHoraire !== "undefined" ? tauxHoraire : 125

const heures = secondes / 3600
const sousTotal = heures * taux
const tps = sousTotal * 0.05
const tvq = sousTotal * 0.09975
const total = sousTotal + tps + tvq

return {
heures: heures.toFixed(2),
sousTotal: sousTotal.toFixed(2),
tps: tps.toFixed(2),
tvq: tvq.toFixed(2),
total: total.toFixed(2)
}

}



/* ======================================================
MODULE 3
INJECTION FACTURATION DANS RAPPORT
====================================================== */

function injecterFacturationRapport(){

try{

const facture = obtenirFacturationRapportSecurisee()

const heures = document.getElementById("rapport-heures")
const sousTotal = document.getElementById("rapport-sous-total")
const tps = document.getElementById("rapport-tps")
const tvq = document.getElementById("rapport-tvq")
const total = document.getElementById("rapport-total")

if(heures){
heures.textContent = facture.heures
}

if(sousTotal){
sousTotal.textContent = facture.sousTotal
}

if(tps){
tps.textContent = facture.tps
}

if(tvq){
tvq.textContent = facture.tvq
}

if(total){
total.textContent = facture.total
}

}catch(e){

console.warn("Erreur injection facturation rapport :", e)

}

}



/* ======================================================
MODULE 4
INJECTION SIGNATURES DANS RAPPORT
====================================================== */

function injecterSignaturesRapport(){

const canvasClient = document.getElementById("signature-client")
const canvasConsultant = document.getElementById("signature-verificateur")

const imgClient = document.getElementById("rapport-signature-client")
const imgConsultant = document.getElementById("rapport-signature-consultant")

if(canvasClient && imgClient){

try{

imgClient.src = canvasClient.toDataURL("image/png")

}catch(e){

console.warn("Signature client non disponible")

}

}

if(canvasConsultant && imgConsultant){

try{

imgConsultant.src = canvasConsultant.toDataURL("image/png")

}catch(e){

console.warn("Signature consultant non disponible")

}

}

}



/* ======================================================
MODULE 5
GÉNÉRATION COMPLÈTE DU RAPPORT AVANT IMPRESSION
====================================================== */

function genererRapportImpression(){

remplirInformationsRapport()
injecterFacturationRapport()
injecterSignaturesRapport()

const zoneDefauts = document.getElementById("rapport-defauts")
const zoneConformes = document.getElementById("rapport-conformes")

if(!zoneDefauts || !zoneConformes){
console.warn("Zones rapport-defauts ou rapport-conformes introuvables.")
return
}

zoneDefauts.innerHTML = ""
zoneConformes.innerHTML = ""

const valeursConformes = [
"Bon","Bonne","Bons","Bonnes",
"Correct","Correcte","Corrects","Correctes",
"Stable","Stables",
"Fonctionnel","Fonctionnelle","Fonctionnels","Fonctionnelles",
"Présent","Présente","Présents","Présentes",
"Oui",
"Conforme",
"Esthétique OK",
"Normal",
"Visible",
"Propre",
"Solide",
"Adéquate",
"Récent",
"Récentes",
"Récente"
]

const valeursDefectueuses = [
"Défectueux","Défectueuse","Défectueuxes",
"Endommagé","Endommagée","Endommagés","Endommagées",
"Usé","Usée","Usés","Usées",
"Fissuré","Fissurée","Fissurés","Fissurées",
"Taché","Tachée","Tachés","Tachées",
"Instable","Instables",
"Rouille",
"Humidité",
"Moisissure",
"Condensation",
"Air",
"Infiltration",
"Fuite",
"Brisé","Brisée","Brisés","Brisées",
"Obstrué","Obstruée","Obstrués","Obstruées",
"Non conforme",
"À réparer",
"Bloqué","Bloquée","Bloqués","Bloquées",
"Déchirée","Déchiré","Déchirées","Déchirés",
"Corrosion",
"Bruyant","Bruyante",
"Absent","Absente","Absents","Absentes",
"Difficile",
"Faible",
"Aucun",
"Aucune",
"Insuffisante",
"Effacé",
"Obstrué",
"Accumulation d'eau",
"Fuite possible",
"Soupçon de fuite",
"Intermittent",
"Ne fonctionne pas",
"Drain lent",
"Air présent",
"Infiltration possible",
"Joint dégradé",
"Condensation",
"Humidité visible",
"Peinture écaillée",
"Encrassé",
"Encrassée",
"Instable",
"Mal aligné",
"Légèrement instable",
"Légèrement décalé",
"À vérifier",
"Ancien",
"Inconnu",
"Inconnue"
]

let defautTrouve = false
let conformeTrouve = false

const pieces = document.querySelectorAll(".piece-container")

pieces.forEach(function(piece){

const titreElement = piece.querySelector(".piece-titre")
const titrePiece = titreElement ? titreElement.textContent.trim() : "Pièce"

piece.querySelectorAll("label select").forEach(function(select){

if(!select.value || select.value === "Sélectionnez") return

const label = select.closest("label")
if(!label) return

const texteNoeud = label.childNodes[0]
const nomChamp = texteNoeud ? texteNoeud.textContent.trim() : "Champ"
const valeur = select.value.trim()

const ligne = document.createElement("p")
ligne.textContent = titrePiece + " — " + nomChamp + " : " + valeur

if(valeursConformes.includes(valeur)){

zoneConformes.appendChild(ligne)
conformeTrouve = true

}else if(valeursDefectueuses.includes(valeur)){

zoneDefauts.appendChild(ligne)
defautTrouve = true

}else{

zoneDefauts.appendChild(ligne)
defautTrouve = true

}

})

piece.querySelectorAll("textarea").forEach(function(txt){

if(!txt.value || txt.value.trim() === "") return

const label = txt.closest("label")
const texteNoeud = label && label.childNodes[0] ? label.childNodes[0] : null
const nomChamp = texteNoeud ? texteNoeud.textContent.trim() : "Commentaire"

const ligne = document.createElement("p")
ligne.textContent = titrePiece + " — " + nomChamp + " : " + txt.value.trim()

zoneDefauts.appendChild(ligne)
defautTrouve = true

})

})

if(!defautTrouve){
zoneDefauts.innerHTML = "<p>Aucun problème détecté.</p>"
}

if(!conformeTrouve){
zoneConformes.innerHTML = "<p>Aucun élément conforme détecté.</p>"
}

}



/* ======================================================
MODULE 6
MISE À JOUR AUTOMATIQUE AVANT IMPRESSION
====================================================== */

window.addEventListener("beforeprint", function(){

genererRapportImpression()

})

/* ======================================================
MODULE 30
IMPRESSION DIRECTE ANDROID ULTRA STABLE
====================================================== */

function imprimerRapport(){

if(typeof genererRapportImpression === "function"){
genererRapportImpression();
}

if(typeof remplirInformationsRapport === "function"){
remplirInformationsRapport();
}

if(typeof injecterFacturationRapport === "function"){
injecterFacturationRapport();
}

const rapport = document.getElementById("rapport-impression");

if(!rapport){
alert("Zone de rapport introuvable.");
return;
}

/* afficher rapport */

rapport.style.display = "block";

/* délai pour laisser le DOM se mettre à jour */

setTimeout(function(){

window.print();

setTimeout(function(){

rapport.style.display = "none";

},1000);

},300);

}
