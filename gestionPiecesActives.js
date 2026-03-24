/* ======================================================
MODULE 40
AFFICHAGE AUTOMATIQUE DE LA SECTION DES PIÈCES
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const section = document.getElementById("section-pieces-verification")
const liste = document.getElementById("liste-pieces")

if(!section || !liste) return

function verifierEtatPieces(){

if(liste.children.length > 0){
section.style.display = "block"
}else{
section.style.display = "none"
}

}

const observer = new MutationObserver(function(){
verifierEtatPieces()
})

observer.observe(liste,{
childList:true,
subtree:true
})

verifierEtatPieces()

})



/* ======================================================
MODULE 41
CRÉATION D'UN BLOC PIÈCE STANDARD
====================================================== */

function creerBlocPiece(nomPiece){

const liste = document.getElementById("liste-pieces")

if(!liste) return

const blocPiece = document.createElement("div")
blocPiece.className = "piece-verification"
blocPiece.dataset.piece = nomPiece

const titre = document.createElement("h3")
titre.textContent = nomPiece
blocPiece.appendChild(titre)

const zoneElements = document.createElement("div")
zoneElements.className = "zone-elements-piece"
blocPiece.appendChild(zoneElements)

liste.appendChild(blocPiece)

chargerElementsStandards(zoneElements, nomPiece)

}



/* ======================================================
MODULE 42
CHARGEMENT DES ÉLÉMENTS STANDARDS PAR PIÈCE
====================================================== */

function chargerElementsStandards(container, nomPiece){

if(!container) return

const elementsParDefaut = [
"Mur",
"Plancher",
"Plafond",
"Fenêtres",
"Portes",
"Éclairage",
"Prises électriques"
]

elementsParDefaut.forEach(function(nomElement){
ajouterElementVerifiable(container, nomPiece, nomElement)
})

}



/* ======================================================
MODULE 43
CRÉATION D'UN ÉLÉMENT VÉRIFIABLE
====================================================== */

function ajouterElementVerifiable(container, nomPiece, nomElement){

const ligne = document.createElement("div")
ligne.className = "element-verifie"
ligne.dataset.statut = "conforme"
ligne.dataset.piece = nomPiece
ligne.dataset.element = nomElement

ligne.style.border = "1px solid #ccc"
ligne.style.padding = "10px"
ligne.style.marginBottom = "8px"
ligne.style.background = "#d4edda"

const texte = document.createElement("span")
texte.className = "description-element"
texte.textContent = nomElement
texte.style.display = "inline-block"
texte.style.minWidth = "220px"
texte.style.fontWeight = "bold"

const boutonConforme = document.createElement("button")
boutonConforme.type = "button"
boutonConforme.textContent = "Conforme"
boutonConforme.style.marginLeft = "10px"

boutonConforme.onclick = function(){
ligne.dataset.statut = "conforme"
ligne.style.background = "#d4edda"
}

const boutonDefectueux = document.createElement("button")
boutonDefectueux.type = "button"
boutonDefectueux.textContent = "Défectueux"
boutonDefectueux.style.marginLeft = "10px"

boutonDefectueux.onclick = function(){
ligne.dataset.statut = "defaut"
ligne.style.background = "#f8d7da"
}

const commentaire = document.createElement("input")
commentaire.type = "text"
commentaire.placeholder = "Commentaire ou précision"
commentaire.className = "commentaire-element"
commentaire.style.display = "block"
commentaire.style.marginTop = "8px"
commentaire.style.width = "100%"

ligne.appendChild(texte)
ligne.appendChild(boutonConforme)
ligne.appendChild(boutonDefectueux)
ligne.appendChild(commentaire)

container.appendChild(ligne)

}
