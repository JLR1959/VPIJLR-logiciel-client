/* ======================================================
MODULE 1
NUMÉRO DOSSIER AUTOMATIQUE AVEC HEURE (FINAL STABLE)
====================================================== */

function genererNumeroDossier() {

  const nom = document.getElementById("locataire")?.value.trim() || "";
  const tel = document.getElementById("telephone")?.value.trim() || "";
  const apt = document.getElementById("numeroAppartement")?.value.trim() || "";
  const champ = document.getElementById("numeroDossier");

  if (!champ) return;

  if (!nom || !tel || !apt) {
    champ.value = "";
    return;
  }

  const maintenant = new Date();

  const dateActive =
    maintenant.getFullYear().toString() +
    String(maintenant.getMonth() + 1).padStart(2, "0") +
    String(maintenant.getDate()).padStart(2, "0");

  const heureMinute =
    String(maintenant.getHours()).padStart(2, "0") +
    String(maintenant.getMinutes()).padStart(2, "0");

  const nomFormate = nom
    .toUpperCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/\s+/g, "");

  const telephoneFormate = tel.replace(/\D/g, "");
  const appartementFormate = apt.toUpperCase().replace(/\s+/g, "");

  champ.value =
    "VPIJLR-" +
    dateActive + "-" +
    heureMinute + "-" +
    nomFormate + "-" +
    telephoneFormate + "-" +
    appartementFormate;

}

document.addEventListener("DOMContentLoaded", function(){

  ["locataire","telephone","numeroAppartement"].forEach(id=>{
    const champ = document.getElementById(id);
    if(champ){
      champ.addEventListener("input", genererNumeroDossier);
    }
  });

});



// ======================================================
// MODULE 2
// OUTILS GÉNÉRIQUES (UNIQUE)
// ======================================================

function champ(label, options) {

  let html = `<label>${label}
  <select>
  <option value="">Sélectionnez</option>`;

  options.forEach(option => {
    html += `<option>${option}</option>`;
  });

  html += `</select></label>`;

  return html;

}

function texte(label) {

  return `<label>${label}
  <textarea rows="3" style="width:100%;"></textarea>
  </label>`;

}


// ======================================================
// MODULE 3
// ÉQUIPEMENTS TECHNIQUES
// ======================================================

const equipementsTechniques = {

  "Système d'alarme": () =>
    champ("Système d'alarme - Présence", ["Présent","Absent"]) +
    champ("Système d'alarme - Fonctionnalité", ["Fonctionnel","Défectueux"]),

  "Détecteur CO2": () =>
    champ("Détecteur CO2 - Présence", ["Présent","Absent"]) +
    champ("Détecteur CO2 - Fonctionnalité", ["Fonctionnel","Défectueux"]),

  "Caméra surveillance": () =>
    champ("Caméra surveillance - Présence", ["Présente","Absente"]) +
    champ("Caméra surveillance - Fonctionnalité", ["Fonctionnelle","Défectueuse"]),

  "Interphone": () =>
    champ("Interphone - Présence", ["Présent","Absent"]) +
    champ("Interphone - Fonctionnalité", ["Fonctionnel","Défectueux"]),

  "Accès handicapé": () =>
    champ("Accès handicapé - Présence", ["Présent","Absent"]) +
    champ("Accès handicapé - Conformité", ["Conforme","Non conforme"]),

  "Thermopompe": () =>
    champ("Thermopompe - Présence", ["Présente","Absente"]) +
    champ("Thermopompe - Type", ["Murale","Centrale"]) +
    champ("Thermopompe - Fonctionnalité", ["Fonctionnelle","Défectueuse"]),

  "Échangeur d'air": () =>
    champ("Échangeur d'air - Présence", ["Présent","Absent"]) +
    champ("Échangeur d'air - Fonctionnalité", ["Fonctionnel","Défectueux"]),

  "Panneau secondaire": () =>
    champ("Panneau secondaire - Présence", ["Présent","Absent"]) +
    champ("Panneau secondaire - État", ["Bon","Non conforme"]),

  "Compteur électrique": () =>
    champ("Compteur électrique - Présence", ["Présent","Absent"]) +
    champ("Compteur électrique - État", ["Bon","Endommagé"]),

  "Valve principale eau": () =>
    champ("Valve principale eau - Présence", ["Présente","Absente"]) +
    champ("Valve principale eau - État", ["Bonne","Fuite"]),

  "Compteur eau": () =>
    champ("Compteur eau - Présence", ["Présent","Absent"]) +
    champ("Compteur eau - État", ["Bon","Défectueux"]),

  "Sortie extérieure": () =>
    champ("Sortie extérieure - Présence", ["Présente","Absente"]) +
    champ("Sortie extérieure - État", ["Bonne","Endommagée"]),

  "Balcon": () =>
    champ("Balcon - Présence", ["Présent","Absent"]) +
    champ("Balcon - État", ["Bon","Instable","Endommagé"]) +
    champ("Garde-corps balcon - État", ["Bon","Instable","Non conforme"])

};

// ======================================================
// MODULE 4
// AJOUT ÉQUIPEMENT
// ======================================================

function ajouterEquipement(pieceId) {

  const piece = document.getElementById(pieceId);
  if (!piece) return;

  const select = document.getElementById("equipement-" + pieceId);
  const type = select.value;

  if (!type) return;

  const zone = piece.querySelector(".liste-equipements");

  const bloc = document.createElement("div");
  bloc.className = "bloc-equipement";

  bloc.innerHTML =
  `<strong>${type}</strong>
   <button type="button" onclick="this.parentElement.remove()">Supprimer</button>
   ${equipementsTechniques[type]()}
  `;

  zone.appendChild(bloc);

  select.value = "";

}

// ======================================================
// MODULE 4
// CHOISIR TYPE DE VÉRIFICATION (FINAL STABLE)
// ======================================================

function choisirVerification(type) {

    const bandeau = document.getElementById("bandeau-mode-verification");
    const piecesInterieur = document.getElementById("pieces-interieur");
    const piecesExterieur = document.getElementById("pieces-exterieur");
    const champType = document.getElementById("type-verification");

    if (!bandeau) return;

    if (type === "interieur") {

        bandeau.textContent = "Mode de vérification : INTÉRIEURE";

        if(piecesInterieur) piecesInterieur.style.display = "block";
        if(piecesExterieur) piecesExterieur.style.display = "none";
        if(champType) champType.value = "interieur";

    }

    if (type === "exterieur") {

        bandeau.textContent = "Mode de vérification : EXTÉRIEURE";

        if(piecesExterieur) piecesExterieur.style.display = "block";
        if(piecesInterieur) piecesInterieur.style.display = "none";
        if(champType) champType.value = "exterieur";

    }

}



// ======================================================
// MODULE 5.1
// MODÈLES DE PIÈCES – COMPLÉTÉES ET DÉTAILLÉES
// ======================================================

const modelesPieces = {

  "Cuisine": function() {
    let html = "";

   html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
    html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
    html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois","Métal"]);
    html += champ("Plafond - Esthétique", ["Esthétique OK", "Taches visibles", "Fissures importantes"]);

    // Vérification des murs
    html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Béton"]);
    html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
    html += champ("Mur - Matériau", ["Peinture","Papier peint","Carrelage","Bois"]);
    html += champ("Mur - Esthétique", ["Esthétique OK", "Peinture écaillée", "Humidité visible"]);

    // Vérification du plancher
    html += champ("Plancher - Type", ["Céramique","Vinyle","Bois"]);
    html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
    html += champ("Plancher - Matériau", ["Bois franc","Stratifié","Vinyle","Céramique"]);
    html += champ("Plancher - Esthétique", ["Esthétique OK", "Rayures visibles", "Moins stable"]);

    // Vérification des fenêtres
    html += champ("Fenêtre - Présence", ["Présente","Absente"]);
    html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
    html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
    html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
    html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
    html += champ("Fenêtre - Mécanisme", ["Coulissant","Oscillo-battant","Fixe"]);
    html += champ("Fenêtre - Quantité", ["1","2","3+"]);
    html += champ("Fenêtre - Moustiquaire", ["Présente","Absente"]);
    html += champ("Fenêtre - Esthétique", ["Esthétique OK", "Condensation", "Encrassée"]);

    // Vérification des armoires
    html += champ("Armoires supérieures - Type", ["Standard","Modulaire","Sur mesure"]);
    html += champ("Armoires supérieures - État", ["Bonnes","Endommagées","Gondolées"]);
    html += champ("Armoires supérieures - Matériau", ["Bois","Mélamine","PVC"]);
    html += champ("Armoires supérieures - Esthétique", ["Esthétique OK", "Portes gondolées", "Gros éraflures"]);

    html += champ("Armoires inférieures - Type", ["Standard","Modulaire","Sur mesure"]);
    html += champ("Armoires inférieures - État", ["Bonnes","Endommagées","Humidité"]);
    html += champ("Armoires inférieures - Matériau", ["Bois","Mélamine","PVC"]);
    html += champ("Armoires inférieures - Esthétique", ["Esthétique OK", "Humidité visible", "Portes déformées"]);

    // Vérification des éviers
    html += champ("Évier - Type", ["Simple","Double","Commercial"]);
    html += champ("Évier - État", ["Bon","Fissuré","Rouille"]);
    html += champ("Évier - Matériau", ["Inox","Composite","Céramique"]);
    html += champ("Évier - Fonctionnalité", ["Fonctionnel","Défectueux"]);
    html += champ("Évier - Esthétique", ["Esthétique OK", "Fissures", "Taches de rouille"]);

    // Vérification des robinets
    html += champ("Robinetterie - Type", ["Standard","À détecteur","Combinée"]);
    html += champ("Robinetterie - État", ["Bonne","Fuite","Défectueuse"]);
    html += champ("Robinetterie - Matériau", ["Chrome","Noir mat","Inox"]);
    html += champ("Robinetterie - Esthétique", ["Esthétique OK", "Fuite visible", "Corrosion"]);

    // Vérification des hottes
    html += champ("Hotte - Présence", ["Présente","Absente"]);
    html += champ("Hotte - Type", ["Standard","Micro-ondes intégrée","Commerciale"]);
    html += champ("Hotte - État", ["Fonctionnelle","Défectueuse","Bruyante"]);
    html += champ("Hotte - Matériau", ["Inox","Plastique","Aluminium"]);
    html += champ("Hotte - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
    html += champ("Hotte - Esthétique", ["Esthétique OK", "Bruits anormaux", "Taches visibles"]);

    // Vérification du lave-vaisselle
    html += champ("Lave-vaisselle - Présence", ["Présent","Absent"]);
    html += champ("Lave-vaisselle - Fonctionnalité", ["Fonctionnel","Défectueux"]);
    html += champ("Lave-vaisselle - Esthétique", ["Esthétique OK", "Usure sur les bords", "Encrassé"]);

    // Commentaires de la cuisine
    html += texte("Commentaires cuisine");
    return html;
  },
  
  "Porte": function() {
  let html = "";

  // Présence
  html += champ("Porte - Présence", [
    "Présente",
    "Absente"
  ]);

  // Type
  html += champ("Porte - Type", [
    "Intérieure",
    "Extérieure",
    "Coulissante",
    "Française",
    "Pliante"
  ]);

  // Matériau
  html += champ("Porte - Matériau", [
    "Bois",
    "PVC",
    "Aluminium",
    "Métal",
    "Verre",
    "Composite"
  ]);

  // État général
  html += champ("Porte - État général", [
    "Bon",
    "Usure normale",
    "Endommagée"
  ]);

  // Alignement
  html += champ("Porte - Alignement", [
    "Correct",
    "Légèrement décalé",
    "Mal aligné"
  ]);

  // Charnières
  html += champ("Charnières - État", [
    "Bon",
    "Grincement",
    "Desserrées",
    "Endommagées"
  ]);

  // Poignée
  html += champ("Poignée - Fonctionnement", [
    "Fonctionnelle",
    "Légèrement dure",
    "Défectueuse"
  ]);

  // Serrure
  html += champ("Serrure - Fonctionnement", [
    "Fonctionnelle",
    "Difficile",
    "Défectueuse",
    "Absente"
  ]);

  // Coupe-froid
  html += champ("Coupe-froid - État", [
    "Bon",
    "Usé",
    "Absent"
  ]);

  // Étanchéité
  html += champ("Étanchéité - État", [
    "Bonne",
    "Air présent",
    "Infiltration possible"
  ]);

  // Esthétique
  html += champ("Porte - Esthétique", [
    "Esthétique OK",
    "Égratignures",
    "Peinture écaillée",
    "Endommagée"
  ]);

  html += texte("Commentaires porte");

  return html;
},

"Salle de bain": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Taché","Fissuré","Moisissure"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Moisissure"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Carrelage","Brique"]);
  html += champ("Mur - État", ["Bon","Humidité","Fissuré","Moisissure"]);
  html += champ("Mur - Matériau", ["Peinture","Carrelage","Bois"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Céramique","Vinyle","Bois"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Céramique","Vinyle","Bois"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures","Instable"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Fenêtre - Quantité", ["1","2","3+"]);
  html += champ("Fenêtre - Moustiquaire", ["Présente","Absente"]);

  // Vérification du lavabo
  html += champ("Lavabo - Type", ["Simple","Double","Suspendu"]);
  html += champ("Lavabo - État", ["Bon","Fissuré","Endommagé"]);
  html += champ("Lavabo - Matériau", ["Céramique","Composite","Verre"]);
  html += champ("Lavabo - Fonctionnalité", ["Fonctionnel","Drain lent","Défectueux"]);
  html += champ("Lavabo - Esthétique", ["Esthétique OK","Taches","Fissures"]);

  // Vérification de la vanité
  html += champ("Vanité - Type", ["Sur pied","Suspendue","Modulaire"]);
  html += champ("Vanité - État", ["Bonne","Endommagée","Humidité"]);
  html += champ("Vanité - Matériau", ["Bois","Mélamine","PVC"]);
  html += champ("Vanité - Esthétique", ["Esthétique OK","Portes gonflées","Éraflures"]);

  // Vérification toilette
  html += champ("Toilette - Type", ["Standard","Suspendue","Double chasse"]);
  html += champ("Toilette - État", ["Bonne","Fuite","Instable"]);
  html += champ("Toilette - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
  html += champ("Toilette - Étanchéité", ["Bonne","Fuite base","Fuite réservoir"]);
  html += champ("Toilette - Esthétique", ["Esthétique OK","Taches","Jaunissement"]);

  // Vérification douche
  html += champ("Douche - Type", ["Coin","Murale","Walk-in"]);
  html += champ("Douche - État", ["Bonne","Fuite","Moisissure"]);
  html += champ("Douche - Matériau", ["Fibre de verre","Céramique","Acrylique"]);
  html += champ("Douche - Étanchéité", ["Bonne","Infiltration","Joint dégradé"]);
  html += champ("Douche - Esthétique", ["Esthétique OK","Joints noirs","Calcaire"]);

  // Vérification baignoire
  html += champ("Baignoire - Type", ["Encastrée","Autoportante"]);
  html += champ("Baignoire - État", ["Bonne","Fissurée","Endommagée"]);
  html += champ("Baignoire - Matériau", ["Acrylique","Fonte","Composite"]);
  html += champ("Baignoire - Étanchéité", ["Bonne","Joint dégradé","Fuite"]);
  html += champ("Baignoire - Esthétique", ["Esthétique OK","Rayures","Calcaire"]);

  // Vérification robinetterie
  html += champ("Robinetterie bain - Type", ["Standard","Thermostatique","Combinée"]);
  html += champ("Robinetterie bain - État", ["Bonne","Fuite","Défectueuse"]);
  html += champ("Robinetterie bain - Matériau", ["Chrome","Noir mat","Inox"]);
  html += champ("Robinetterie bain - Esthétique", ["Esthétique OK","Corrosion","Calcaire"]);

  // Ventilation
  html += champ("Ventilation - Type", ["Mécanique","Naturelle"]);
  html += champ("Ventilation - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
  html += champ("Ventilation - Bruit", ["Normal","Bruyant"]);

  // Électricité
  html += champ("Prise GFCI - Présence", ["Présente","Absente"]);
  html += champ("Prise GFCI - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  html += champ("Éclairage - Type", ["Plafonnier","Encastré","Applique murale"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires salle de bain");

  return html;
},

"Salle d'eau": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Taché","Fissuré","Moisissure"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Moisissure"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Carrelage","Brique"]);
  html += champ("Mur - État", ["Bon","Humidité","Fissuré","Moisissure"]);
  html += champ("Mur - Matériau", ["Peinture","Carrelage","Bois"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Céramique","Vinyle","Bois"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Céramique","Vinyle","Bois"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures","Instable"]);

  // Vérification du lavabo
  html += champ("Lavabo - Type", ["Simple","Suspendu"]);
  html += champ("Lavabo - État", ["Bon","Fissuré","Endommagé"]);
  html += champ("Lavabo - Matériau", ["Céramique","Composite","Verre"]);
  html += champ("Lavabo - Fonctionnalité", ["Fonctionnel","Drain lent","Défectueux"]);
  html += champ("Lavabo - Esthétique", ["Esthétique OK","Taches","Fissures"]);

  // Vérification de la vanité
  html += champ("Vanité - Type", ["Sur pied","Suspendue"]);
  html += champ("Vanité - État", ["Bonne","Endommagée","Humidité"]);
  html += champ("Vanité - Matériau", ["Bois","Mélamine","PVC"]);
  html += champ("Vanité - Esthétique", ["Esthétique OK","Portes gonflées","Éraflures"]);

  // Vérification toilette
  html += champ("Toilette - Type", ["Standard","Suspendue","Double chasse"]);
  html += champ("Toilette - État", ["Bonne","Fuite","Instable"]);
  html += champ("Toilette - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
  html += champ("Toilette - Étanchéité", ["Bonne","Fuite base","Fuite réservoir"]);
  html += champ("Toilette - Esthétique", ["Esthétique OK","Taches","Jaunissement"]);

  // Ventilation
  html += champ("Ventilation - Type", ["Mécanique","Naturelle"]);
  html += champ("Ventilation - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Électricité
  html += champ("Prise GFCI - Présence", ["Présente","Absente"]);
  html += champ("Prise GFCI - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  html += champ("Éclairage - Type", ["Plafonnier","Applique murale"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires salle d'eau");

  return html;
},

"Salle à manger": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Papier peint","Bois","Pierre"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Bois","Céramique","Vinyle"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Bois franc","Stratifié","Vinyle","Céramique"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures visibles","Moins stable"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Fenêtre - Quantité", ["1","2","3+"]);
  html += champ("Fenêtre - Moustiquaire", ["Présente","Absente"]);

  // Vérification des portes
  html += champ("Porte intérieure - Présence", ["Présente","Absente"]);
  html += champ("Porte intérieure - Type", ["Standard","Française","Coulissante"]);
  html += champ("Porte intérieure - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte intérieure - Poignée", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte intérieure - Esthétique", ["Esthétique OK","Égratignures","Peinture écaillée"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Suspension","Encastré"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);
  html += champ("Éclairage - Esthétique", ["Esthétique OK","Luminaire endommagé"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","USB"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires salle à manger");

  return html;
},

"Salon": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois","Métal"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Béton"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Papier peint","Bois","Pierre"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Bois","Céramique","Vinyle","Tapis"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Bois franc","Stratifié","Vinyle","Céramique"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures visibles","Moins stable"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Fenêtre - Mécanisme", ["Coulissant","Oscillo-battant","Fixe"]);
  html += champ("Fenêtre - Quantité", ["1","2","3+"]);
  html += champ("Fenêtre - Moustiquaire", ["Présente","Absente"]);
  html += champ("Fenêtre - Esthétique", ["Esthétique OK","Condensation","Encrassée"]);

  // Vérification des portes
  html += champ("Porte intérieure - Présence", ["Présente","Absente"]);
  html += champ("Porte intérieure - Type", ["Standard","Française","Coulissante"]);
  html += champ("Porte intérieure - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte intérieure - Matériau", ["Bois","MDF","Verre"]);
  html += champ("Porte intérieure - Poignée", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte intérieure - Esthétique", ["Esthétique OK","Égratignures","Peinture écaillée"]);

  // Vérification foyer
  html += champ("Foyer - Présence", ["Présent","Absent"]);
  html += champ("Foyer - Type", ["Bois","Gaz","Électrique"]);
  html += champ("Foyer - État", ["Bon","Endommagé","Non fonctionnel"]);
  html += champ("Foyer - Esthétique", ["Esthétique OK","Suie visible","Briques fissurées"]);

  // Vérification électrique
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","USB"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  html += champ("Interrupteurs - Quantité", ["1","2","3+"]);
  html += champ("Interrupteurs - Fonctionnalité", ["Fonctionnels","Défectueux"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Encastré","Applique murale"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);
  html += champ("Éclairage - Esthétique", ["Esthétique OK","Ampoule manquante","Luminaire endommagé"]);

  // Vérification chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);
  html += champ("Chauffage - Esthétique", ["Esthétique OK","Rouille","Peinture écaillée"]);

  // Sortie média
  html += champ("Sortie câble / internet - Présence", ["Présente","Absente"]);
  html += champ("Sortie câble / internet - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  html += texte("Commentaires salon");

  return html;
},

"Vide sanitaire": function() {
  let html = "";

  // Accès
  html += champ("Accès au vide sanitaire", [
    "Trappe intérieure",
    "Trappe extérieure",
    "Accès direct",
    "Accès difficile"
  ]);

  html += champ("Trappe d'accès - État", [
    "Bonne",
    "Endommagée",
    "Absente"
  ]);

  // Hauteur
  html += champ("Hauteur du vide sanitaire", [
    "Moins de 60 cm",
    "60 à 90 cm",
    "90 cm à 1.5 m",
    "Plus de 1.5 m"
  ]);

  // Sol
  html += champ("Sol - Type", [
    "Terre battue",
    "Gravier",
    "Béton",
    "Membrane pare-vapeur"
  ]);

  html += champ("Sol - État", [
    "Sec",
    "Humide",
    "Accumulation d'eau"
  ]);

  // Humidité
  html += champ("Humidité - Niveau", [
    "Aucune",
    "Faible",
    "Élevée"
  ]);

  html += champ("Odeur d'humidité", [
    "Aucune",
    "Légère",
    "Forte"
  ]);

  // Isolation
  html += champ("Isolation - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Isolation - État", [
    "Bonne",
    "Humide",
    "Endommagée"
  ]);

  // Structure
  html += champ("Poutres / solives - État", [
    "Bon",
    "Usure normale",
    "Humidité",
    "Endommagé"
  ]);

  // Ventilation
  html += champ("Ventilation - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Ventilation - État", [
    "Bonne",
    "Obstruée",
    "Insuffisante"
  ]);

  // Tuyauterie
  html += champ("Tuyauterie - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Tuyauterie - État", [
    "Bon",
    "Condensation",
    "Fuite possible"
  ]);

  // Câblage
  html += champ("Câblage électrique - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Câblage électrique - État", [
    "Bon",
    "À vérifier",
    "Non conforme"
  ]);

  html += texte("Commentaires vide sanitaire");

  return html;
},

"Bureau": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Papier peint","Bois","Pierre"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Bois","Céramique","Vinyle","Tapis"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Bois franc","Stratifié","Vinyle","Céramique","Tapis"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures visibles","Moins stable"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Fenêtre - Quantité", ["1","2","3+"]);
  html += champ("Fenêtre - Moustiquaire", ["Présente","Absente"]);

  // Vérification des portes
  html += champ("Porte intérieure - Présence", ["Présente","Absente"]);
  html += champ("Porte intérieure - Type", ["Standard","Française","Coulissante"]);
  html += champ("Porte intérieure - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte intérieure - Poignée", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte intérieure - Esthétique", ["Esthétique OK","Égratignures","Peinture écaillée"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Suspension","Encastré","Lampe bureau"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);
  html += champ("Éclairage - Esthétique", ["Esthétique OK","Luminaire endommagé"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","USB","Réseau"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification sorties internet
  html += champ("Sortie internet - Présence", ["Présente","Absente"]);
  html += champ("Sortie internet - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires bureau");

  return html;
},

  "Chambre": function() {
    let html = "";
    html += champ("Plafond - Type", ["Gypsum","Bois","Béton"]);
    html += champ("Plafond - État", ["Bon","Fissuré"]);
    html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC"]);

    html += champ("Mur - Type", ["Cloison sèche","Brique","Bois"]);
    html += champ("Mur - État", ["Bon","Taché"]);
    html += champ("Mur - Matériau", ["Peinture","Bois","Carrelage"]);

    html += champ("Plancher - Type", ["Bois","Céramique","Vinyle"]);
    html += champ("Plancher - État", ["Bon","Usé"]);
    html += champ("Plancher - Matériau", ["Bois","Céramique","Vinyle"]);

    html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
    html += champ("Fenêtre - État", ["Bonne","Air","Condensation"]);
    html += champ("Fenêtre - Matériau", ["PVC","Aluminium","Bois"]);
    html += champ("Fenêtre - Mécanisme", ["Coulissant","Oscillo-battant","Fixe"]);
    html += champ("Fenêtre - Quantité", ["1","2","3+"]);

    html += champ("Garde-robe - Présence", ["Présent","Absent"]);
    html += champ("Garde-robe - Type", ["Standard","Walk-in","Porte coulissante"]);
    html += champ("Garde-robe - État", ["Bon","Endommagé","Portes défectueuses"]);

    html += champ("Sortie TV - Présence", ["Présente","Absente"]);
    html += champ("Sortie TV - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

    html += champ("Sortie téléphone - Présence", ["Présente","Absente"]);
    html += champ("Sortie téléphone - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

    html += champ("Détecteur fumée - Présence", ["Présent","Absent"]);
    html += champ("Détecteur fumée - Fonctionnalité", ["Fonctionnel","Défectueux"]);

    html += texte("Commentaires chambre");

    return html;
  },
  
  "Corridor": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Pierre"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Papier peint","Bois","Pierre"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Bois","Céramique","Vinyle","Tapis"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Bois franc","Stratifié","Vinyle","Céramique","Tapis"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures visibles","Moins stable"]);

  // Vérification des portes
  html += champ("Porte intérieure - Présence", ["Présente","Absente"]);
  html += champ("Porte intérieure - Type", ["Standard","Française","Coulissante"]);
  html += champ("Porte intérieure - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte intérieure - Poignée", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte intérieure - Esthétique", ["Esthétique OK","Égratignures","Peinture écaillée"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Encastré","Applique murale"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);
  html += champ("Éclairage - Esthétique", ["Esthétique OK","Luminaire endommagé"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","USB"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires corridor");

  return html;
},

"Escalier": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Béton"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Bois","Pierre","Carrelage"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification de la structure de l'escalier
  html += champ("Escalier - Type", ["Bois","Métal","Béton"]);
  html += champ("Escalier - État", ["Bon","Usé","Endommagé"]);
  html += champ("Escalier - Stabilité", ["Stable","Instable"]);

  // Vérification des marches
  html += champ("Marches - Matériau", ["Bois","Métal","Béton","Céramique"]);
  html += champ("Marches - État", ["Bon","Usé","Endommagé"]);
  html += champ("Marches - Antidérapant", ["Présent","Absent"]);

  // Vérification de la rampe
  html += champ("Rampe - Présence", ["Présente","Absente"]);
  html += champ("Rampe - Matériau", ["Bois","Métal","Verre"]);
  html += champ("Rampe - Stabilité", ["Stable","Instable"]);
  html += champ("Rampe - État", ["Bonne","Endommagée"]);

  // Vérification du garde-corps
  html += champ("Garde-corps - Présence", ["Présent","Absent"]);
  html += champ("Garde-corps - Matériau", ["Bois","Métal","Verre"]);
  html += champ("Garde-corps - État", ["Bon","Endommagé"]);
  html += champ("Garde-corps - Stabilité", ["Stable","Instable"]);

  // Vérification de l'éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Applique murale","Encastré"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Présence", ["Présentes","Absentes"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  html += texte("Commentaires escalier");

  return html;
},

"Hall d'entrée": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Pierre"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Papier peint","Bois","Pierre"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Céramique","Bois","Vinyle","Tapis"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher - Matériau", ["Céramique","Bois franc","Stratifié","Vinyle","Tapis"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Rayures visibles","Moins stable"]);

  // Vérification de la porte principale
  html += champ("Porte principale - Type", ["Bois","Acier","Fibre de verre","Vitrée"]);
  html += champ("Porte principale - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte principale - Serrure", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte principale - Poignée", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte principale - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Porte principale - Esthétique", ["Esthétique OK","Égratignures","Peinture écaillée"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Applique murale","Encastré"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","USB"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification garde-robe d'entrée
  html += champ("Garde-robe d'entrée - Présence", ["Présente","Absente"]);
  html += champ("Garde-robe d'entrée - Type", ["Standard","Walk-in","Porte coulissante"]);
  html += champ("Garde-robe d'entrée - État", ["Bon","Endommagé"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires hall d'entrée");

  return html;
},

"Sous-sol": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton","Ouvert"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC","Métal"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Béton","Bloc de béton","Cloison sèche","Bois"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité","Efflorescence"]);
  html += champ("Mur - Matériau", ["Peinture","Bois","Béton brut","Panneau"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Humidité visible","Peinture écaillée"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Béton","Céramique","Vinyle","Bois"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé","Humidité"]);
  html += champ("Plancher - Matériau", ["Béton","Céramique","Vinyle","Bois"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Taches visibles","Fissures visibles"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe","Sous-sol"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Fenêtre - Puits de fenêtre", ["Présent","Absent"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Encastré","Tube fluorescent"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification humidité
  html += champ("Humidité - Présence", ["Aucune","Faible","Modérée","Élevée"]);
  html += champ("Humidité - Odeur", ["Aucune","Humidité légère","Humidité forte"]);

  // Vérification drainage
  html += champ("Drain de plancher - Présence", ["Présent","Absent"]);
  html += champ("Drain de plancher - État", ["Bon","Obstrué","Endommagé"]);

  // Chauffage
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires sous-sol");

  return html;
},

"Salle mécanique": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Béton","Ouvert"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC","Métal"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Béton","Bloc de béton","Cloison sèche"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Béton brut","Panneau"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Béton","Céramique","Époxy"]);
  html += champ("Plancher - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Plancher - Drain", ["Présent","Absent"]);

  // Vérification chauffe-eau
  html += champ("Chauffe-eau - Présence", ["Présent","Absent"]);
  html += champ("Chauffe-eau - Type", ["Électrique","Gaz"]);
  html += champ("Chauffe-eau - État", ["Bon","Rouille","Fuite"]);
  html += champ("Chauffe-eau - Année approximative", ["0-5 ans","5-10 ans","10+ ans"]);

  // Vérification fournaise / système chauffage
  html += champ("Système chauffage - Type", ["Fournaise","Chaudière","Thermopompe"]);
  html += champ("Système chauffage - État", ["Bon","À vérifier","Défectueux"]);
  html += champ("Système chauffage - Entretien", ["Récent","Ancien","Inconnu"]);

  // Vérification échangeur d'air
  html += champ("Échangeur d'air - Présence", ["Présent","Absent"]);
  html += champ("Échangeur d'air - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification tuyauterie
  html += champ("Tuyauterie - Matériau", ["Cuivre","PEX","PVC","Mixte"]);
  html += champ("Tuyauterie - État", ["Bon","Corrosion","Fuite"]);

  // Vérification valve principale
  html += champ("Valve principale eau - Présence", ["Présente","Absente"]);
  html += champ("Valve principale eau - État", ["Bonne","Bloquée","Fuite"]);

  // Vérification pompe (si présente)
  html += champ("Pompe puisard - Présence", ["Présente","Absente"]);
  html += champ("Pompe puisard - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification ventilation
  html += champ("Ventilation mécanique - Présence", ["Présente","Absente"]);
  html += champ("Ventilation mécanique - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification humidité
  html += champ("Humidité - Présence", ["Aucune","Faible","Modérée","Élevée"]);

  html += texte("Commentaires salle mécanique");

  return html;
},

"Salle électrique": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Béton","Ouvert"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC","Métal"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Béton","Bloc de béton","Cloison sèche"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité"]);
  html += champ("Mur - Matériau", ["Peinture","Béton brut","Panneau"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Béton","Céramique","Époxy"]);
  html += champ("Plancher - État", ["Bon","Fissuré","Humidité"]);

  // Vérification du panneau électrique principal
  html += champ("Panneau électrique principal - Présence", ["Présent","Absent"]);
  html += champ("Panneau électrique principal - Type", ["Disjoncteurs","Fusibles"]);
  html += champ("Panneau électrique principal - État", ["Bon","Rouille","Endommagé"]);
  html += champ("Panneau électrique principal - Identification", ["Bien identifiés","Partiellement identifiés","Non identifiés"]);

  // Vérification panneau secondaire
  html += champ("Panneau secondaire - Présence", ["Présent","Absent"]);
  html += champ("Panneau secondaire - État", ["Bon","Rouille","Endommagé"]);

  // Vérification câblage apparent
  html += champ("Câblage apparent - Présence", ["Présent","Absent"]);
  html += champ("Câblage apparent - État", ["Bon","Endommagé","Non conforme"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Présence", ["Présentes","Absentes"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Tube fluorescent","Encastré"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification mise à la terre
  html += champ("Mise à la terre - Présence", ["Présente","Absente"]);
  html += champ("Mise à la terre - État", ["Bonne","À vérifier","Non conforme"]);

  // Vérification accès panneau
  html += champ("Accès au panneau - Dégagement", ["Conforme","Obstrué"]);

  html += texte("Commentaires salle électrique");

  return html;
},

"Éclairage": function() {
  let html = "";

  // Présence
  html += champ("Éclairage - Présence", ["Présent","Absent"]);

  // Type de luminaire
  html += champ("Luminaire - Type", [
    "Plafonnier",
    "Encastré",
    "Suspension",
    "Applique murale",
    "Rail lumineux",
    "Tube fluorescent",
    "DEL intégré"
  ]);

  // Quantité
  html += champ("Éclairage - Quantité", ["1","2","3","4+"]);

  // Fonctionnement
  html += champ("Éclairage - Fonctionnement", [
    "Fonctionnel",
    "Intermittent",
    "Ne fonctionne pas"
  ]);

  // Intensité lumineuse
  html += champ("Éclairage - Intensité", [
    "Bonne",
    "Faible",
    "Très faible"
  ]);

  // Fixation
  html += champ("Luminaire - Fixation", [
    "Stable",
    "Légèrement instable",
    "Instable"
  ]);

  // État esthétique
  html += champ("Luminaire - Esthétique", [
    "Esthétique OK",
    "Usure visible",
    "Endommagé"
  ]);

  // Interrupteur
  html += champ("Interrupteur - Présence", ["Présent","Absent"]);
  html += champ("Interrupteur - Fonctionnement", [
    "Fonctionnel",
    "Défectueux"
  ]);

  // Type d'ampoule
  html += champ("Ampoule - Type", [
    "DEL",
    "Halogène",
    "Fluocompacte",
    "Incandescente"
  ]);

  html += texte("Commentaires éclairage");

  return html;
},

"Salle lavage": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Suspendu","Béton"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","PVC","Bois","Métal"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Cloison sèche","Brique","Bois","Béton"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité","Moisissure"]);
  html += champ("Mur - Matériau", ["Peinture","Carrelage","Bois","PVC"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Céramique","Vinyle","Béton","Bois"]);
  html += champ("Plancher - État", ["Bon","Usé","Endommagé","Humidité"]);
  html += champ("Plancher - Matériau", ["Céramique","Vinyle","Béton","Bois"]);
  html += champ("Plancher - Esthétique", ["Esthétique OK","Taches visibles","Fissures visibles"]);

  // Vérification des fenêtres
  html += champ("Fenêtre - Présence", ["Présente","Absente"]);
  html += champ("Fenêtre - Type", ["Coulissante","À battant","Fixe"]);
  html += champ("Fenêtre - État", ["Bonne","À réparer","Brisée"]);
  html += champ("Fenêtre - Étanchéité", ["Bonne","Air","Infiltration"]);

  // Vérification plomberie
  html += champ("Entrée eau chaude - Présence", ["Présente","Absente"]);
  html += champ("Entrée eau froide - Présence", ["Présente","Absente"]);
  html += champ("Drain laveuse - Présence", ["Présent","Absent"]);
  html += champ("Drain laveuse - État", ["Bon","Obstrué","Fuite"]);

  // Vérification laveuse
  html += champ("Laveuse - Présence", ["Présente","Absente"]);
  html += champ("Laveuse - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification sécheuse
  html += champ("Sécheuse - Présence", ["Présente","Absente"]);
  html += champ("Sécheuse - Type", ["Électrique","Gaz"]);
  html += champ("Sécheuse - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
  html += champ("Sortie sécheuse - Présence", ["Présente","Absente"]);
  html += champ("Sortie sécheuse - État", ["Bonne","Obstruée","Endommagée"]);

  // Vérification prises électriques
  html += champ("Prise 110V - Présence", ["Présente","Absente"]);
  html += champ("Prise 220V - Présence", ["Présente","Absente"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification ventilation
  html += champ("Ventilation - Présence", ["Présente","Absente"]);
  html += champ("Ventilation - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification humidité
  html += champ("Humidité - Présence", ["Aucune","Faible","Modérée","Élevée"]);

  html += texte("Commentaires salle lavage");

  return html;
},

"Réservoir eau chaude": function() {
  let html = "";

  // Présence
  html += champ("Réservoir eau chaude - Présence", ["Présent","Absent"]);

  // Type
  html += champ("Réservoir eau chaude - Type", [
    "Électrique",
    "Gaz",
    "Thermopompe",
    "Instantané"
  ]);

  // Capacité
  html += champ("Réservoir eau chaude - Capacité", [
    "30 gallons",
    "40 gallons",
    "50 gallons",
    "60 gallons",
    "80 gallons",
    "100 gallons",
    "Autre"
  ]);

  // Année approximative
  html += champ("Réservoir eau chaude - Âge approximatif", [
    "0-5 ans",
    "5-10 ans",
    "10-15 ans",
    "15 ans +",
    "Inconnu"
  ]);

  // État général
  html += champ("Réservoir eau chaude - État général", [
    "Bon",
    "Usure normale",
    "Corrosion",
    "Endommagé"
  ]);

  // Fonctionnement
  html += champ("Réservoir eau chaude - Fonctionnement", [
    "Fonctionnel",
    "Température instable",
    "Défectueux"
  ]);

  // Fuite
  html += champ("Réservoir eau chaude - Fuite", [
    "Aucune",
    "Soupçon de fuite",
    "Fuite visible"
  ]);

  // Valve de sécurité
  html += champ("Valve de sécurité - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Valve de sécurité - État", [
    "Bonne",
    "À vérifier",
    "Défectueuse"
  ]);

  // Bac de récupération
  html += champ("Bac de récupération - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Bac de récupération - État", [
    "Bon",
    "Endommagé"
  ]);

  // Drain
  html += champ("Drain de sécurité - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Drain de sécurité - État", [
    "Bon",
    "Obstrué",
    "Endommagé"
  ]);

  // Isolation
  html += champ("Isolation du réservoir - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Isolation du réservoir - État", [
    "Bonne",
    "Usée",
    "Endommagée"
  ]);

  html += texte("Commentaires réservoir eau chaude");

  return html;
},

"Stationnement": function() {
  let html = "";

  // Type de stationnement
  html += champ("Stationnement - Type", [
    "Extérieur",
    "Intérieur",
    "Garage intégré",
    "Garage détaché",
    "Stationnement couvert"
  ]);

  // Nombre de places
  html += champ("Stationnement - Nombre de places", [
    "1",
    "2",
    "3",
    "4+"
  ]);

  // Type de surface
  html += champ("Surface - Type", [
    "Asphalte",
    "Béton",
    "Gravier",
    "Pavé uni"
  ]);

  // État de la surface
  html += champ("Surface - État", [
    "Bon",
    "Fissures mineures",
    "Fissures importantes",
    "Affaissement",
    "Endommagé"
  ]);

  // Drainage
  html += champ("Drainage - État", [
    "Bon",
    "Accumulation d'eau",
    "Drainage insuffisant"
  ]);

  // Marquage au sol
  html += champ("Marquage au sol - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Marquage au sol - État", [
    "Visible",
    "Effacé",
    "Non applicable"
  ]);

  // Éclairage
  html += champ("Éclairage stationnement - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Éclairage stationnement - Fonctionnement", [
    "Fonctionnel",
    "Défectueux",
    "Non applicable"
  ]);

  // Accessibilité
  html += champ("Accessibilité - Accès", [
    "Facile",
    "Restreint",
    "Obstrué"
  ]);

  // Signalisation
  html += champ("Signalisation - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Signalisation - État", [
    "Bonne",
    "Usée",
    "Endommagée",
    "Non applicable"
  ]);

  html += texte("Commentaires stationnement");

  return html;
},

"Porte patio": function() {
  let html = "";

  // Présence
  html += champ("Porte patio - Présence", ["Présente","Absente"]);

  // Type
  html += champ("Porte patio - Type", ["Coulissante","Battante","Française"]);

  // Matériau
  html += champ("Porte patio - Matériau", ["PVC","Aluminium","Bois","Hybride"]);

  // État général
  html += champ("Porte patio - État", ["Bonne","À réparer","Endommagée"]);

  // Vitrage
  html += champ("Vitrage - Type", ["Simple","Double","Triple"]);
  html += champ("Vitrage - État", ["Bon","Fissuré","Brisé","Condensation"]);

  // Mécanisme
  html += champ("Mécanisme coulissant - Fonctionnement", ["Fluide","Difficile","Bloqué"]);

  // Poignée
  html += champ("Poignée - Fonctionnement", ["Fonctionnelle","Défectueuse"]);

  // Serrure
  html += champ("Serrure - Fonctionnement", ["Fonctionnelle","Défectueuse"]);

  // Étanchéité
  html += champ("Étanchéité - État", ["Bonne","Infiltration d'air","Infiltration d'eau"]);

  // Coupe-froid
  html += champ("Coupe-froid - État", ["Bon","Usé","Absent"]);

  // Rail
  html += champ("Rail - État", ["Bon","Usé","Endommagé"]);

  // Moustiquaire
  html += champ("Moustiquaire - Présence", ["Présente","Absente"]);
  html += champ("Moustiquaire - État", ["Bonne","Déchirée","Endommagée"]);

  html += texte("Commentaires porte patio");

  return html;
},

"Balcon": function() {
  let html = "";

  // Vérification de la structure
  html += champ("Structure du balcon - Matériau", ["Bois","Béton","Métal","Composite"]);
  html += champ("Structure du balcon - État", ["Bon","Usé","Endommagé"]);
  html += champ("Structure du balcon - Stabilité", ["Stable","Instable"]);

  // Vérification du plancher du balcon
  html += champ("Plancher balcon - Type", ["Bois","Composite","Béton","Céramique"]);
  html += champ("Plancher balcon - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher balcon - Drainage", ["Bon","Accumulation d'eau"]);

  // Vérification du garde-corps
  html += champ("Garde-corps - Présence", ["Présent","Absent"]);
  html += champ("Garde-corps - Matériau", ["Bois","Métal","Verre","Aluminium"]);
  html += champ("Garde-corps - État", ["Bon","Instable","Endommagé"]);
  html += champ("Garde-corps - Conformité", ["Conforme","Non conforme"]);

  // Vérification de la rampe
  html += champ("Rampe - Présence", ["Présente","Absente"]);
  html += champ("Rampe - État", ["Bonne","Instable","Endommagée"]);

  // Vérification accès balcon
  html += champ("Porte patio - Fonctionnement", ["Fonctionnelle","Défectueuse"]);
  html += champ("Porte patio - Étanchéité", ["Bonne","Air","Infiltration"]);

  // Vérification drainage
  html += champ("Drainage balcon - État", ["Bon","Obstrué","Accumulation d'eau"]);

  // Vérification fixations
  html += champ("Fixations et ancrages - État", ["Bon","Rouille","Desserrés"]);

  html += texte("Commentaires balcon");

  return html;
},

"Terrasse": function() {
  let html = "";

  // Vérification de la structure
  html += champ("Structure terrasse - Matériau", ["Bois","Composite","Béton","Métal"]);
  html += champ("Structure terrasse - État", ["Bon","Usé","Endommagé"]);
  html += champ("Structure terrasse - Stabilité", ["Stable","Instable"]);

  // Vérification du plancher de la terrasse
  html += champ("Plancher terrasse - Type", ["Bois traité","Composite","Béton","Céramique"]);
  html += champ("Plancher terrasse - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher terrasse - Drainage", ["Bon","Accumulation d'eau"]);

  // Vérification du garde-corps
  html += champ("Garde-corps - Présence", ["Présent","Absent"]);
  html += champ("Garde-corps - Matériau", ["Bois","Métal","Verre","Aluminium","Composite"]);
  html += champ("Garde-corps - État", ["Bon","Instable","Endommagé"]);
  html += champ("Garde-corps - Conformité", ["Conforme","Non conforme"]);

  // Vérification des marches d'accès
  html += champ("Escalier terrasse - Présence", ["Présent","Absent"]);
  html += champ("Escalier terrasse - Matériau", ["Bois","Métal","Béton"]);
  html += champ("Escalier terrasse - État", ["Bon","Usé","Endommagé"]);
  html += champ("Escalier terrasse - Stabilité", ["Stable","Instable"]);

  // Vérification de la rampe
  html += champ("Rampe - Présence", ["Présente","Absente"]);
  html += champ("Rampe - État", ["Bonne","Instable","Endommagée"]);

  // Vérification drainage
  html += champ("Drainage terrasse - État", ["Bon","Obstrué","Accumulation d'eau"]);

  // Vérification fixations
  html += champ("Fixations et ancrages - État", ["Bon","Rouille","Desserrés"]);

  html += texte("Commentaires terrasse");

  return html;
},

"Piscine": function() {
  let html = "";

  // Type de piscine
  html += champ("Piscine - Type", ["Hors terre","Creusée","Semi-creusée"]);
  html += champ("Piscine - Matériau structure", ["Acier","Résine","Béton","Fibre de verre"]);
  html += champ("Piscine - État général", ["Bon","Usé","Endommagé"]);

  // Revêtement intérieur
  html += champ("Revêtement - Type", ["Toile vinyle","Fibre de verre","Béton peint"]);
  html += champ("Revêtement - État", ["Bon","Plis","Déchirure","Usé"]);
  html += champ("Revêtement - Étanchéité", ["Bonne","Fuite possible"]);

  // Margelle
  html += champ("Margelle - Matériau", ["Aluminium","Pierre","Composite"]);
  html += champ("Margelle - État", ["Bon","Usé","Endommagé"]);

  // Échelle / escalier
  html += champ("Échelle / Escalier - Présence", ["Présent","Absent"]);
  html += champ("Échelle / Escalier - Matériau", ["Acier inoxydable","Plastique","Composite"]);
  html += champ("Échelle / Escalier - État", ["Bon","Instable","Endommagé"]);

  // Système de filtration
  html += champ("Filtre piscine - Type", ["Sable","Cartouche","Diatomée"]);
  html += champ("Filtre piscine - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Pompe
  html += champ("Pompe piscine - Présence", ["Présente","Absente"]);
  html += champ("Pompe piscine - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);
  html += champ("Pompe piscine - Bruit", ["Normal","Bruit anormal"]);

  // Skimmer
  html += champ("Skimmer - Présence", ["Présent","Absent"]);
  html += champ("Skimmer - État", ["Bon","Fissuré","Endommagé"]);

  // Retour d'eau
  html += champ("Retour d'eau - Fonctionnement", ["Normal","Faible débit","Défectueux"]);

  // Drain de fond
  html += champ("Drain de fond - Présence", ["Présent","Absent"]);
  html += champ("Drain de fond - État", ["Bon","À vérifier"]);

  // Système de sécurité
  html += champ("Clôture piscine - Présence", ["Présente","Absente"]);
  html += champ("Clôture piscine - Conformité", ["Conforme","Non conforme"]);
  html += champ("Porte clôture - Verrouillage", ["Fonctionnel","Défectueux"]);

  // Chauffe-piscine
  html += champ("Chauffe-piscine - Présence", ["Présent","Absent"]);
  html += champ("Chauffe-piscine - Type", ["Électrique","Gaz","Thermopompe"]);
  html += champ("Chauffe-piscine - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Éclairage
  html += champ("Éclairage piscine - Présence", ["Présent","Absent"]);
  html += champ("Éclairage piscine - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires piscine");

  return html;
},

"Verrière": function() {
  let html = "";

  // Vérification de la structure
  html += champ("Structure verrière - Matériau", ["Aluminium","Bois","PVC","Acier"]);
  html += champ("Structure verrière - État", ["Bon","Usé","Endommagé"]);
  html += champ("Structure verrière - Stabilité", ["Stable","Instable"]);

  // Vérification du plafond vitré
  html += champ("Plafond vitré - Type", ["Verre simple","Verre double","Polycarbonate"]);
  html += champ("Plafond vitré - État", ["Bon","Fissuré","Endommagé"]);
  html += champ("Plafond vitré - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Plafond vitré - Propreté", ["Propre","Encrassé"]);

  // Vérification des panneaux vitrés
  html += champ("Panneaux vitrés - Type", ["Fixes","Coulissants","Battants"]);
  html += champ("Panneaux vitrés - État", ["Bon","Fissuré","Brisé"]);
  html += champ("Panneaux vitrés - Étanchéité", ["Bonne","Air","Infiltration"]);
  html += champ("Panneaux vitrés - Mécanisme", ["Fonctionnel","Défectueux"]);

  // Vérification du plancher
  html += champ("Plancher verrière - Type", ["Bois","Céramique","Vinyle","Composite","Béton"]);
  html += champ("Plancher verrière - État", ["Bon","Usé","Endommagé"]);
  html += champ("Plancher verrière - Drainage", ["Bon","Accumulation d'eau"]);

  // Vérification des portes
  html += champ("Porte verrière - Présence", ["Présente","Absente"]);
  html += champ("Porte verrière - Type", ["Coulissante","Battante","Française"]);
  html += champ("Porte verrière - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte verrière - Serrure", ["Fonctionnelle","Défectueuse"]);

  // Vérification ventilation
  html += champ("Ventilation - Présence", ["Présente","Absente"]);
  html += champ("Ventilation - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification chauffage (si présent)
  html += champ("Chauffage - Présence", ["Présent","Absent"]);
  html += champ("Chauffage - Type", ["Plinthe","Radiateur","Convecteur"]);
  html += champ("Chauffage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  html += texte("Commentaires verrière");

  return html;
},

"Climatisation": function() {
  let html = "";

  // Vérification du type de climatisation
  html += champ("Climatisation - Type", ["Murale","Centrale","Portable","Fenêtre"]);
  html += champ("Climatisation - Présence", ["Présente","Absente"]);

  // Vérification unité intérieure
  html += champ("Unité intérieure - État", ["Bon","Usé","Endommagé"]);
  html += champ("Unité intérieure - Propreté", ["Propre","Encrassée"]);
  html += champ("Unité intérieure - Fixation", ["Stable","Instable"]);

  // Vérification unité extérieure
  html += champ("Unité extérieure - Présence", ["Présente","Absente"]);
  html += champ("Unité extérieure - État", ["Bon","Usé","Endommagé"]);
  html += champ("Unité extérieure - Fixation", ["Stable","Instable"]);
  html += champ("Unité extérieure - Bruit", ["Normal","Bruit anormal"]);

  // Vérification fonctionnement
  html += champ("Climatisation - Fonctionnement", ["Fonctionnelle","Défectueuse"]);
  html += champ("Climatisation - Refroidissement", ["Normal","Faible","Aucun"]);
  html += champ("Climatisation - Télécommande", ["Présente","Absente"]);

  // Vérification drainage
  html += champ("Drain condensation - Présence", ["Présent","Absent"]);
  html += champ("Drain condensation - État", ["Bon","Obstrué","Fuite"]);

  // Vérification alimentation électrique
  html += champ("Alimentation électrique - Type", ["Prise standard","Circuit dédié"]);
  html += champ("Alimentation électrique - État", ["Bon","Défectueux"]);

  html += texte("Commentaires climatisation");

  return html;
},

"Borne de recharge": function() {
  let html = "";

  // Présence de la borne
  html += champ("Borne de recharge - Présence", [
    "Présente",
    "Absente"
  ]);

  // Type de borne
  html += champ("Borne de recharge - Type", [
    "Niveau 1 (120V)",
    "Niveau 2 (240V)",
    "Charge rapide DC",
    "Inconnu"
  ]);

  // Marque
  html += champ("Borne de recharge - Marque", [
    "Flo",
    "Tesla",
    "ChargePoint",
    "EVduty",
    "Autre",
    "Inconnue"
  ]);

  // État général
  html += champ("Borne de recharge - État général", [
    "Bon",
    "Usure normale",
    "Endommagée"
  ]);

  // Fonctionnement
  html += champ("Borne de recharge - Fonctionnement", [
    "Fonctionnelle",
    "Intermittente",
    "Défectueuse"
  ]);

  // Fixation
  html += champ("Fixation de la borne", [
    "Murale",
    "Sur poteau",
    "Autre"
  ]);

  html += champ("Fixation - État", [
    "Solide",
    "Instable",
    "Endommagée"
  ]);

  // Câble
  html += champ("Câble de recharge - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Câble de recharge - État", [
    "Bon",
    "Usé",
    "Endommagé"
  ]);

  // Connecteur
  html += champ("Connecteur - Type", [
    "J1772",
    "Tesla",
    "CCS",
    "CHAdeMO",
    "Autre"
  ]);

  html += champ("Connecteur - État", [
    "Bon",
    "Usé",
    "Endommagé"
  ]);

  // Circuit électrique
  html += champ("Circuit dédié - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Disjoncteur - État", [
    "Bon",
    "À vérifier",
    "Défectueux"
  ]);

  // Protection météo
  html += champ("Protection contre intempéries", [
    "Adéquate",
    "Partielle",
    "Aucune"
  ]);

  html += texte("Commentaires borne de recharge");

  return html;
},

"Clôture": function() {
  let html = "";

  // Présence
  html += champ("Clôture - Présence", [
    "Présente",
    "Absente"
  ]);

  // Type de clôture
  html += champ("Clôture - Type", [
    "Bois",
    "Frost (mailles métalliques)",
    "PVC",
    "Composite",
    "Fer forgé",
    "Aluminium"
  ]);

  // Hauteur
  html += champ("Clôture - Hauteur", [
    "Moins de 1 m",
    "1 m à 1.5 m",
    "1.5 m à 2 m",
    "Plus de 2 m"
  ]);

  // État général
  html += champ("Clôture - État général", [
    "Bon",
    "Usure normale",
    "Endommagée"
  ]);

  // Stabilité
  html += champ("Clôture - Stabilité", [
    "Stable",
    "Légèrement instable",
    "Instable"
  ]);

  // Poteaux
  html += champ("Poteaux - Matériau", [
    "Bois",
    "Métal",
    "Béton",
    "Composite"
  ]);

  html += champ("Poteaux - État", [
    "Bon",
    "Usé",
    "Endommagé"
  ]);

  // Portail
  html += champ("Portail - Présence", [
    "Présent",
    "Absent"
  ]);

  html += champ("Portail - Fonctionnement", [
    "Fonctionnel",
    "Difficile à ouvrir",
    "Défectueux"
  ]);

  html += champ("Portail - Serrure", [
    "Fonctionnelle",
    "Défectueuse",
    "Aucune"
  ]);

  // Alignement
  html += champ("Alignement clôture", [
    "Droit",
    "Légèrement incliné",
    "Fortement incliné"
  ]);

  // Conformité
  html += champ("Clôture - Conformité apparente", [
    "Conforme",
    "À vérifier",
    "Non conforme"
  ]);

  html += texte("Commentaires clôture");

  return html;
},

"Cabanon": function() {
  let html = "";

  // Type de cabanon
  html += champ("Cabanon - Type", [
    "Bois",
    "Résine / PVC",
    "Métal",
    "Composite"
  ]);

  // Fondation
  html += champ("Fondation - Type", [
    "Béton",
    "Blocs",
    "Gravier",
    "Direct au sol"
  ]);

  html += champ("Fondation - État", [
    "Bonne",
    "Affaissement",
    "Instable"
  ]);

  // Structure
  html += champ("Structure - État", [
    "Bonne",
    "Usée",
    "Endommagée"
  ]);

  html += champ("Structure - Stabilité", [
    "Stable",
    "Légèrement instable",
    "Instable"
  ]);

  // Plancher
  html += champ("Plancher - Type", [
    "Bois",
    "Béton",
    "Composite",
    "Absent"
  ]);

  html += champ("Plancher - État", [
    "Bon",
    "Usé",
    "Endommagé"
  ]);

  // Murs
  html += champ("Murs - Matériau", [
    "Bois",
    "PVC",
    "Métal",
    "Composite"
  ]);

  html += champ("Murs - État", [
    "Bon",
    "Usé",
    "Endommagé"
  ]);

  // Toiture
  html += champ("Toiture - Type", [
    "Bardeaux d'asphalte",
    "Tôle",
    "Membrane",
    "PVC"
  ]);

  html += champ("Toiture - État", [
    "Bonne",
    "Usure normale",
    "Fuite possible",
    "Endommagée"
  ]);

  // Porte
  html += champ("Porte cabanon - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Porte cabanon - Fonctionnement", [
    "Fonctionnelle",
    "Difficile",
    "Défectueuse"
  ]);

  html += champ("Porte cabanon - Serrure", [
    "Présente",
    "Absente",
    "Défectueuse"
  ]);

  // Fenêtre
  html += champ("Fenêtre cabanon - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Fenêtre cabanon - État", [
    "Bonne",
    "Brisée",
    "Endommagée"
  ]);

  // Ventilation
  html += champ("Ventilation - Présence", [
    "Présente",
    "Absente"
  ]);

  html += champ("Ventilation - État", [
    "Bonne",
    "Obstruée",
    "Endommagée"
  ]);

  html += texte("Commentaires cabanon");

  return html;
},

 "Garage": function() {
  let html = "";

  // Vérification du plafond
  html += champ("Plafond - Type", ["Gypsum","Bois","Béton","Ouvert"]);
  html += champ("Plafond - État", ["Bon","Fissuré","Taché","Endommagé"]);
  html += champ("Plafond - Matériau", ["Plâtre","Bois","PVC","Métal"]);
  html += champ("Plafond - Esthétique", ["Esthétique OK","Taches visibles","Fissures importantes"]);

  // Vérification des murs
  html += champ("Mur - Type", ["Béton","Bloc de béton","Cloison sèche","Bois"]);
  html += champ("Mur - État", ["Bon","Fissuré","Humidité","Endommagé"]);
  html += champ("Mur - Matériau", ["Peinture","Béton brut","Bois","Panneau"]);
  html += champ("Mur - Esthétique", ["Esthétique OK","Peinture écaillée","Humidité visible"]);

  // Vérification du plancher
  html += champ("Plancher - Type", ["Béton brut","Béton scellé","Époxy"]);
  html += champ("Plancher - État", ["Bon","Fissuré","Taché huile","Endommagé"]);
  html += champ("Plancher - Drain", ["Présent","Absent"]);

  // Vérification de la porte de garage
  html += champ("Porte de garage - Type", ["Manuelle","Motorisée"]);
  html += champ("Porte de garage - Matériau", ["Acier","Aluminium","Bois","Composite"]);
  html += champ("Porte de garage - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte de garage - Étanchéité", ["Bonne","Air","Infiltration"]);

  // Vérification moteur de porte
  html += champ("Moteur porte garage - Présence", ["Présent","Absent"]);
  html += champ("Moteur porte garage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification porte extérieure
  html += champ("Porte extérieure - Présence", ["Présente","Absente"]);
  html += champ("Porte extérieure - État", ["Bonne","À réparer","Endommagée"]);
  html += champ("Porte extérieure - Serrure", ["Fonctionnelle","Défectueuse"]);

  // Vérification éclairage
  html += champ("Éclairage - Type", ["Plafonnier","Tube fluorescent","Encastré"]);
  html += champ("Éclairage - Fonctionnalité", ["Fonctionnel","Défectueux"]);

  // Vérification prises électriques
  html += champ("Prises électriques - Quantité", ["1","2","3","4+"]);
  html += champ("Prises électriques - Type", ["Standard","GFCI","240V"]);
  html += champ("Prises électriques - Fonctionnalité", ["Fonctionnelles","Défectueuses"]);

  // Vérification ventilation
  html += champ("Ventilation - Présence", ["Présente","Absente"]);
  html += champ("Ventilation - Fonctionnalité", ["Fonctionnelle","Défectueuse"]);

  // Vérification humidité
  html += champ("Humidité - Présence", ["Aucune","Faible","Modérée","Élevée"]);

  html += texte("Commentaires garage");

return html;
  }
}; 

// ======================================================
// MODULE 5
// MOTEUR DES PIÈCES – BOUTONS À GAUCHE + CSS INTÉGRÉ
// ======================================================

function ajouterPiece() {

  const type = document.getElementById("type-piece").value;
  if (!type) { alert("Veuillez sélectionner une pièce."); return; }

  const id = "piece-" + Date.now();
  const div = document.createElement("div");
  div.className = "piece-container";
  div.id = id;

  // HEADER : Titre + boutons alignés à gauche
  let html = `
  <div class="piece-header">
    <span class="piece-titre">${type}</span>
    <div class="piece-actions">
      <button type="button" onclick="retracterPiece('${id}')">Terminer</button>
      <button type="button" onclick="document.getElementById('${id}').remove()">Retirer</button>
    </div>
  </div>
  `;

  // Équipements techniques
  html += `
  <div class="equipement-technique">
    <h4>Équipements techniques</h4>
    <select id="equipement-${id}">
      <option value="">Sélectionnez</option>
      ${typeof equipementsTechniques !== "undefined" 
        ? Object.keys(equipementsTechniques).map(e => `<option>${e}</option>`).join("")
        : ""}
    </select>
    <button type="button" onclick="ajouterEquipement('${id}')">Ajouter</button>
    <div class="liste-equipements"></div>
  </div>
  `;

  // Modèle spécifique
  if (modelesPieces[type]) { html += modelesPieces[type](); } 
  else { html += texte("Commentaires"); }

  // Photos
  html += `
  <label>Photo générale 1
    <input type="file" accept="image/*" onchange="previewImage(event,this)">
    <img style="max-width:200px; display:none; margin-top:5px;">
  </label>
  <label>Photo générale 2
    <input type="file" accept="image/*" onchange="previewImage(event,this)">
    <img style="max-width:200px; display:none; margin-top:5px;">
  </label>
  <label>Photo défaut spécifique
    <input type="file" accept="image/*" onchange="previewImage(event,this)">
    <img style="max-width:200px; display:none; margin-top:5px;">
  </label>
  `;

  // Validation visuelle
  html += `
  <label>Validation visuelle pièce
    <select>
      <option value="">Sélectionnez</option>
      <option>Conforme</option>
      <option>Non conforme</option>
    </select>
  </label>
  `;

  // Commentaire final
  html += texte("Résumé technique final de la pièce");

  // Injection dans DOM
  div.innerHTML = html;
  document.getElementById("liste-pieces").appendChild(div);
  document.getElementById("type-piece").value = "";

  // ===== CSS intégré pour boutons et rétractable =====
  const style = document.createElement("style");
  style.innerHTML = `
  .piece-container {
    border:1px solid #ccc; border-radius:6px; padding:10px; margin-bottom:10px; background:#fff;
  }
  .piece-header {
    display:flex; align-items:center; gap:10px; justify-content:flex-start;
  }
  .piece-actions {
    display:flex; gap:5px;
  }
  .piece-container.retractable .equipement-technique,
  .piece-container.retractable label,
  .piece-container.retractable textarea,
  .piece-container.retractable select,
  .piece-container.retractable .liste-equipements {
    display:none;
  }
  .piece-container.retractable { opacity:0.8; border:2px solid #4CAF50; }
  .piece-header button {
    background-color:#4CAF50; color:#fff; border:none; padding:5px 10px; border-radius:4px; cursor:pointer;
  }
  .piece-header button:hover { background-color:#45a049; }
  `;
  document.head.appendChild(style);
}

// ======================================================
// MODULE RÉTRACTABLE
// ======================================================

function retracterPiece(id) {
  const piece = document.getElementById(id);
  if (!piece) return;

  piece.classList.add("retractable");

  const header = piece.querySelector(".piece-header");
  if (header) {
    header.querySelector(".piece-actions").innerHTML =
      `<button type="button" onclick="deployerPiece('${id}')">Réouvrir</button>`;
  }

  const suivante = piece.nextElementSibling;
  if (suivante) suivante.scrollIntoView({ behavior: "smooth" });
}

function deployerPiece(id) {
  const piece = document.getElementById(id);
  if (!piece) return;

  piece.classList.remove("retractable");

  const header = piece.querySelector(".piece-header");
  if (header) {
    header.querySelector(".piece-actions").innerHTML =
      `<button type="button" onclick="retracterPiece('${id}')">Terminer</button>
       <button type="button" onclick="document.getElementById('${id}').remove()">Retirer</button>`;
  }
}

// ======================================================
// MODULE 6
// PRÉVISUALISATION DES IMAGES
// ======================================================

function previewImage(event, input) {

  const file = event.target.files[0];

  if (!file) return;

  const reader = new FileReader();

  const img = input.nextElementSibling;

  reader.onload = function(e) {

    img.src = e.target.result;

    img.style.display = "block";

  };

  reader.readAsDataURL(file);

}

/* ======================================================
MODULE 7
ANALYSE DES ÉLÉMENTS CONFORMES / DÉFECTUEUX (STABLE)
====================================================== */

function genererRapportImpression(){

const valeursConformes = [
"Bon","Bonne","Bons","Bonnes",
"Correct","Correcte",
"Stable","Stables",
"Fonctionnel","Fonctionnelle",
"Fonctionnels","Fonctionnelles",
"Présent","Présente",
"Présents","Présentes",
"Oui",
"Conforme",
"Esthétique OK",
"Normal"
];

const valeursDefectueuses = [
"Défectueux","Défectueuse",
"Endommagé","Endommagée",
"Usé","Usée",
"Fissuré","Fissurée",
"Taché","Tachée",
"Instable",
"Rouille",
"Humidité",
"Moisissure",
"Condensation",
"Air",
"Infiltration",
"Fuite",
"Brisé","Brisée",
"Obstrué","Obstruée",
"Non conforme",
"À réparer",
"Bloqué"
];

let defectueux = "";
let conformes = "";

const pieces = document.querySelectorAll(".piece-container");

/* ===========================
ANALYSE DES PIÈCES
=========================== */

pieces.forEach(function(piece){

const titreElement = piece.querySelector(".piece-titre");
const titre = titreElement ? titreElement.textContent.trim() : "Pièce";

/* ===========================
LECTURE DES SELECT
=========================== */

piece.querySelectorAll("label select").forEach(function(select){

if(!select.value || select.value === "Sélectionnez") return;

const label = select.closest("label");
const nomChamp = label.childNodes[0].textContent.trim();

const ligne =
"<div style='margin-bottom:6px'>" +
"<strong>" + titre + "</strong><br>" +
nomChamp + " : " + select.value +
"</div>";

const valeur = select.value.trim();

if(valeursConformes.includes(valeur)){

conformes += ligne;

}else if(valeursDefectueuses.includes(valeur)){

defectueux += ligne;

}else{

defectueux += ligne;

}

});

/* ===========================
LECTURE DES COMMENTAIRES
=========================== */

piece.querySelectorAll("textarea").forEach(function(txt){

if(!txt.value.trim()) return;

const nomChamp = txt.parentNode.childNodes[0].textContent.trim();

defectueux +=
"<div style='margin-bottom:6px'>" +
"<strong>" + titre + "</strong><br>" +
nomChamp + " : " + txt.value +
"</div>";

});

/* ===========================
LECTURE DES PHOTOS
=========================== */

piece.querySelectorAll("img").forEach(function(img){

if(!img.src || img.style.display === "none") return;

defectueux +=
"<div style='margin-bottom:10px'>" +
"<strong>" + titre + "</strong><br>" +
"<img src='" + img.src + "' style='max-width:300px'>" +
"</div>";

});

});

/* ===========================
INFOS CLIENT
=========================== */

const dossier = document.getElementById("numeroDossier")?.value || "";
const locataire = document.getElementById("locataire")?.value || "";
const telephone = document.getElementById("telephone")?.value || "";
const appartement = document.getElementById("numeroAppartement")?.value || "";
const adresse = document.getElementById("adresse")?.value || "";
const ville = document.getElementById("ville")?.value || "";

/* ===========================
FACTURATION
=========================== */

const heures = tempsTotalSecondes / 3600;
const sousTotal = heures * tauxHoraire;
const tps = sousTotal * 0.05;
const tvq = sousTotal * 0.09975;
const total = sousTotal + tps + tvq;

/* ===========================
ZONE RAPPORT
=========================== */

const zone = document.getElementById("rapport-impression");
if(!zone) return;

zone.innerHTML =

"<h2>Éléments défectueux</h2>" +
(defectueux || "<p>Aucun problème détecté</p>") +

"<hr style='margin:30px 0'>" +

"<h2>Éléments conformes</h2>" +
(conformes || "<p>Aucun élément conforme</p>") +

"<hr style='margin:30px 0'>" +

"<h2>Facturation</h2>" +
"<p>Temps travaillé : " + heures.toFixed(2) + " heures</p>" +
"<p>Taux horaire : " + tauxHoraire.toFixed(2) + " $</p>" +
"<p>Sous-total : " + sousTotal.toFixed(2) + " $</p>" +
"<p>TPS : " + tps.toFixed(2) + " $</p>" +
"<p>TVQ : " + tvq.toFixed(2) + " $</p>" +
"<h3>Total : " + total.toFixed(2) + " $</h3>";

}

/* ======================================================
MODULE 7.1
IMPRESSION RAPPORT PROPRE (SANS JAVASCRIPT)
====================================================== */

function imprimerRapport(){

if(typeof genererRapportImpression === "function"){
genererRapportImpression();
}

if(typeof remplirInformationsRapport === "function"){
remplirInformationsRapport();
}

const zone = document.getElementById("rapport-impression");

if(!zone){
alert("Zone rapport introuvable");
return;
}

/* clone propre du rapport */

const clone = zone.cloneNode(true);

/* supprimer scripts */

clone.querySelectorAll("script").forEach(function(s){
s.remove();
});

/* fenêtre impression */

const fenetre = window.open("", "_blank");

/* structure HTML propre */

fenetre.document.open();

fenetre.document.write(`
<!DOCTYPE html>
<html>
<head>

<title>Rapport de vérification</title>

<style>

body{
font-family:Arial;
padding:40px;
line-height:1.5;
}

img{
max-width:300px;
margin-top:10px;
}

.page-break{
page-break-before:always;
}

</style>

</head>

<body>

<div id="zone-rapport-print"></div>

</body>

</html>
`);

fenetre.document.close();

/* injecter uniquement le rapport */

fenetre.document.getElementById("zone-rapport-print").appendChild(clone);

/* impression */

setTimeout(function(){

fenetre.print();
fenetre.close();

},300);

}

// ======================================================
// MODULE 8
// TERMINER UNE PIÈCE
// ======================================================

function terminerPiece(id) {

  const piece = document.getElementById(id);
  if (!piece) return;

  piece.querySelectorAll("select, textarea, input").forEach(el => {
    el.disabled = true;
  });

  let resume = "";

  piece.querySelectorAll("label").forEach(label => {

    const select = label.querySelector("select");
    if (!select) return;

    if (!select.value || select.value === "Sélectionnez") return;

    const nomChamp = label.childNodes[0].textContent.trim();

    resume += `<div>${nomChamp} : ${select.value}</div>`;

  });

  const blocResume = document.createElement("div");
  blocResume.className = "resume-piece";

  blocResume.innerHTML = `
  <div style="margin-top:10px;padding:10px;background:#f0f0f0;border-radius:6px;">
  <strong>Résumé rapide :</strong>
  ${resume || "<div>Aucune donnée sélectionnée</div>"}
  </div>
  `;

  piece.appendChild(blocResume);

  const actions = piece.querySelector(".piece-actions");

  if (actions) {

    actions.innerHTML = `
    <button type="button" onclick="rouvrirPiece('${id}')">
    Réouvrir
    </button>
    `;

  }

  piece.style.opacity = "0.85";
  piece.style.border = "2px solid #4CAF50";

  piece.classList.add("piece-fermee");

  const suivante = piece.nextElementSibling;

  if (suivante) {
    suivante.scrollIntoView({behavior:"smooth"});
  }

}

// ======================================================
// MODULE 9
// RÉOUVRIR UNE PIÈCE
// ======================================================

function rouvrirPiece(id) {

  const piece = document.getElementById(id);
  if (!piece) return;

  piece.querySelectorAll("select, textarea, input").forEach(el => {
    el.disabled = false;
  });

  const resume = piece.querySelector(".resume-piece");
  if (resume) resume.remove();

  const actions = piece.querySelector(".piece-actions");

  if (actions) {

    actions.innerHTML = `
    <button type="button" onclick="terminerPiece('${id}')">
    Terminer
    </button>

    <button type="button" onclick="document.getElementById('${id}').remove()">
    Retirer
    </button>
    `;

  }

  piece.style.opacity = "1";
  piece.style.border = "1px solid #ccc";

  piece.classList.remove("piece-fermee");

}

/* ======================================================
MODULE 10
SIGNATURES COMPATIBLE MOBILE ANDROID / IOS / PC
ANTI-SCROLL + TACTILE
====================================================== */

function activerSignature(canvasId){

const canvas = document.getElementById(canvasId);
if(!canvas) return;

const ctx = canvas.getContext("2d");

let dessin = false;

canvas.dataset.locked = "false";

/* bloque le scroll tactile */
canvas.style.touchAction = "none";

ctx.lineWidth = 2;
ctx.lineCap = "round";
ctx.strokeStyle = "#000";

/* =========================
POSITION CURSEUR
========================= */

function position(event){

const rect = canvas.getBoundingClientRect();

let clientX, clientY;

if(event.touches && event.touches.length > 0){

clientX = event.touches[0].clientX;
clientY = event.touches[0].clientY;

}else{

clientX = event.clientX;
clientY = event.clientY;

}

return{
x: clientX - rect.left,
y: clientY - rect.top
};

}

/* =========================
DEBUT
========================= */

function debut(event){

if(canvas.dataset.locked === "true") return;

event.preventDefault();

dessin = true;

const pos = position(event);

ctx.beginPath();
ctx.moveTo(pos.x,pos.y);

}

/* =========================
TRACER
========================= */

function tracer(event){

if(!dessin || canvas.dataset.locked === "true") return;

event.preventDefault();

const pos = position(event);

ctx.lineTo(pos.x,pos.y);
ctx.stroke();

}

/* =========================
FIN
========================= */

function fin(){

dessin = false;
ctx.beginPath();

}

/* =========================
EVENTS PC
========================= */

canvas.addEventListener("mousedown",debut);
canvas.addEventListener("mousemove",tracer);
canvas.addEventListener("mouseup",fin);
canvas.addEventListener("mouseleave",fin);

/* =========================
EVENTS MOBILE
========================= */

canvas.addEventListener("touchstart",debut,{passive:false});
canvas.addEventListener("touchmove",tracer,{passive:false});
canvas.addEventListener("touchend",fin);

/* =========================
EVENTS STYLET / MODERNES
========================= */

canvas.addEventListener("pointerdown",debut);
canvas.addEventListener("pointermove",tracer);
canvas.addEventListener("pointerup",fin);

}

/* ======================================================
INITIALISATION SIGNATURES
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

activerSignature("signature-client");
activerSignature("signature-verificateur");

});

// ======================================================
// MODULE 11
// MINUTEUR DE VÉRIFICATION
// ======================================================

let tempsTotalSecondes = 0;
let intervalMinuteur = null;
let minuteurEnCours = false;

let tauxHoraire = 125;

function formaterTemps(secondes) {

  const h = Math.floor(secondes / 3600);
  const m = Math.floor((secondes % 3600) / 60);
  const s = secondes % 60;

  return (
    String(h).padStart(2, "0") + ":" +
    String(m).padStart(2, "0") + ":" +
    String(s).padStart(2, "0")
  );

}

function mettreAJourAffichage() {

  const tempsElement = document.getElementById("temps-affiche");
  const montantElement = document.getElementById("montant-affiche");

  if (!tempsElement || !montantElement) return;

  tempsElement.textContent = formaterTemps(tempsTotalSecondes);

  const heures = tempsTotalSecondes / 3600;
  const montant = heures * tauxHoraire;

  montantElement.textContent = montant.toFixed(2) + " $";

}

function demarrerMinuteur() {

  if (minuteurEnCours) return;

  minuteurEnCours = true;

  intervalMinuteur = setInterval(function() {

    tempsTotalSecondes++;

    mettreAJourAffichage();

  }, 1000);

}

function pauseMinuteur() {

  minuteurEnCours = false;

  clearInterval(intervalMinuteur);

}

function reinitialiserMinuteur() {

  pauseMinuteur();

  tempsTotalSecondes = 0;

  mettreAJourAffichage();

}

function basculerVisibiliteMinuteur() {

  const affichage = document.getElementById("affichage-minuteur");
  const montant = document.getElementById("affichage-montant");

  if (!affichage || !montant) return;

  if (affichage.style.display === "none") {

    affichage.style.display = "block";
    montant.style.display = "block";

  } else {

    affichage.style.display = "none";
    montant.style.display = "none";

  }

}

/* ======================================================
MODULE 12
ENVOI DU RAPPORT PAR COURRIEL + FIN DE VÉRIFICATION
====================================================== */

function genererMailto() {

  const emailProprietaire = document.getElementById("emailProprietaire")?.value || "";
  const dossier = document.getElementById("numeroDossier")?.value || "";
  const locataire = document.getElementById("locataire")?.value || "";
  const telephone = document.getElementById("telephone")?.value || "";
  const appartement = document.getElementById("numeroAppartement")?.value || "";
  const adresse = document.getElementById("adresse")?.value || "";
  const ville = document.getElementById("ville")?.value || "";

  const heures = tempsTotalSecondes / 3600;

  const sousTotal = heures * tauxHoraire;
  const tps = sousTotal * 0.05;
  const tvq = sousTotal * 0.09975;
  const total = sousTotal + tps + tvq;

  let contenu = "";

  contenu += "VÉRIFICATION PRÉVENTIVE IMMOBILIÈRE\n";
  contenu += profilEntreprise.entreprise + "\n";
  contenu += "Consultant : " + profilEntreprise.nom + "\n\n";
  contenu += "Courriel : " + profilEntreprise.courriel + "\n";
  contenu += "Téléphone : " + profilEntreprise.telephone + "\n";
  contenu += "NEQ : " + profilEntreprise.neq + "\n";
  contenu += "TPS : " + profilEntreprise.tps + "\n";
  contenu += "TVQ : " + profilEntreprise.tvq + "\n";

  contenu += "Numéro de dossier : " + dossier + "\n";
  contenu += "Locataire : " + locataire + "\n";
  contenu += "Téléphone : " + telephone + "\n";
  contenu += "Adresse : " + adresse + ", " + appartement + ", " + ville + "\n\n";

  const pieces = document.querySelectorAll(".piece-container");

  pieces.forEach(piece => {

    const titre = piece.querySelector("h3")?.textContent
      .replace("Terminer","")
      .replace("Retirer","")
      .trim() || "Pièce";

    contenu += ">>> " + titre + "\n";

    piece.querySelectorAll("label").forEach(label => {

      const select = label.querySelector("select");
      if (!select) return;

      if (!select.value || select.value === "Sélectionnez") return;

      const nomChamp = label.childNodes[0].textContent.trim();

      contenu += nomChamp + " : " + select.value + "\n";

    });

    contenu += "\n";

  });

  contenu += "FACTURATION\n";
  contenu += "----------------------------------------\n";
  contenu += "Temps travaillé : " + heures.toFixed(2) + " heures\n";
  contenu += "Taux horaire : " + tauxHoraire + " $ / heure\n\n";

  contenu += "Sous-total : " + sousTotal.toFixed(2) + " $\n";
  contenu += "TPS (5%) : " + tps.toFixed(2) + " $\n";
  contenu += "TVQ (9.975%) : " + tvq.toFixed(2) + " $\n";
  contenu += "TOTAL À PAYER : " + total.toFixed(2) + " $\n\n";

  const sujet = "Rapport et facture - " + dossier;

  const mailtoUrl =
    "mailto:" + emailProprietaire +
    "?subject=" + encodeURIComponent(sujet) +
    "&body=" + encodeURIComponent(contenu);

  window.location.href = mailtoUrl;
}

/* ======================================================
MODULE 12.1
VALIDATION FORMULAIRE
====================================================== */

function formulaireValide(){

  const nom = validerNomComplet(document.getElementById("locataire")?.value || "");
  const tel = telephoneValide(nettoyerTelephone(document.getElementById("telephone")?.value || ""));
  const apt = validerNumeroAppartement(document.getElementById("numeroAppartement")?.value || "");
  const type = document.getElementById("type-verification")?.value;

  return nom && tel && apt && type;
}

/* ======================================================
MODULE 12.2
FIN DE VÉRIFICATION
====================================================== */

function verificationComplete(){

  if(!formulaireValide()){
    alert("Veuillez compléter correctement les champs obligatoires.");
    return;
  }

  const confirmation = confirm("Confirmer la fin de la vérification ?");
  if(!confirmation) return;

  console.log("✔ Vérification confirmée");

  // ENVOI EMAIL
  genererMailto();

  // SAUVEGARDE
  const dossier = {
    date: new Date().toISOString(),
    numero: document.getElementById("numeroDossier")?.value || "",
    locataire: document.getElementById("locataire")?.value || "",
    telephone: document.getElementById("telephone")?.value || ""
  };

  let historique = JSON.parse(localStorage.getItem("historiqueVPI") || "[]");
  historique.push(dossier);
  localStorage.setItem("historiqueVPI", JSON.stringify(historique));

  // RESET
  document.querySelectorAll("input").forEach(input=>{
    if(input.type !== "button" && input.id !== "verification-date"){
      input.value = "";
    }
  });

  document.querySelectorAll("select").forEach(select=>{
    select.selectedIndex = 0;
  });

  document.querySelectorAll(".indicateur-etape").forEach(el=>{
    el.classList.remove("etape-ok");
    el.classList.add("etape-ko");
  });

  document.getElementById("type-verification").value = "";

  if(typeof appliquerDateAutomatique === "function"){
    appliquerDateAutomatique();
  }

  document.getElementById("numeroDossier").value = "";

  alert("Nouvelle vérification prête ✔");
}

/* ======================================================
INIT
====================================================== */

document.addEventListener("DOMContentLoaded", function() {
  mettreAJourAffichage();
});

/* ======================================================
MODULE 13
PROTECTION FERMETURE DÉSACTIVÉE
====================================================== */

/*
window.addEventListener("beforeunload", function(e){

if(!verificationTerminee){

e.preventDefault();
e.returnValue = "";
return "";

}

});
*/

// ======================================================
// MODULE 14
// ARCHIVAGE DES DOSSIERS DE VÉRIFICATION
// Enregistre la vérification complète dans localStorage
// ======================================================

function archiverVerification(){

const dossier = {};

document.querySelectorAll("input, select, textarea").forEach(function(champ){

if(!champ.id) return;

if(champ.type === "checkbox"){
dossier[champ.id] = champ.checked;
}else{
dossier[champ.id] = champ.value;
}

});

dossier.dateArchivage = new Date().toISOString();

let dossiers = localStorage.getItem("VPI_DOSSIERS");

if(dossiers){
dossiers = JSON.parse(dossiers);
}else{
dossiers = [];
}

dossiers.push(dossier);

localStorage.setItem("VPI_DOSSIERS", JSON.stringify(dossiers));

alert("La vérification a été archivée avec succès.");

}

// ======================================================
// MODULE 15
// CONSULTATION DES DOSSIERS ARCHIVÉS
// ======================================================

function afficherDossiersArchives(){

const zone = document.getElementById("liste-dossiers-archives");

if(!zone) return;

zone.innerHTML = "";

let dossiers = localStorage.getItem("VPI_DOSSIERS");

if(!dossiers){
zone.innerHTML = "Aucun dossier archivé.";
return;
}

dossiers = JSON.parse(dossiers);

dossiers.forEach(function(dossier){

const ligne = document.createElement("div");

ligne.className = "piece-container";

ligne.innerHTML =
"<strong>Dossier :</strong> " + (dossier.numeroDossier || "") + "<br>" +
"<strong>Locataire :</strong> " + (dossier.locataire || "") + "<br>" +
"<strong>Adresse :</strong> " + (dossier.adresse || "") + "<br>" +
"<strong>Ville :</strong> " + (dossier.ville || "") + "<br>";

zone.appendChild(ligne);

});

}



// ======================================================
// MODULE 15.1
// OUVRIR DOSSIER CLIENT
// ======================================================

function ouvrirDossier(numero){

const dossiers = JSON.parse(localStorage.getItem("VPI_DOSSIERS") || "[]");

const dossier = dossiers.find(d => d.numeroDossier === numero);

if(!dossier){
alert("Dossier introuvable");
return;
}

Object.keys(dossier).forEach(function(id){

const champ = document.getElementById(id);

if(!champ) return;

if(champ.type === "checkbox"){
champ.checked = dossier[id];
}else{
champ.value = dossier[id];
}

});

}

// ======================================================
// MODULE 16
// CONFIRMATION VISUELLE DES ÉTAPES DU FORMULAIRE
// ======================================================

document.addEventListener("DOMContentLoaded", function(){

const etapes = document.querySelectorAll("[data-etape]");

etapes.forEach(function(section){

const champs = section.querySelectorAll("input, select, textarea, canvas");

champs.forEach(function(champ){

champ.addEventListener("change", verifierEtape);
champ.addEventListener("input", verifierEtape);

});

});

verifierEtape();

});


function verifierEtape(){

document.querySelectorAll("[data-etape]").forEach(function(section){

let complete = true;

section.querySelectorAll("input, select, textarea").forEach(function(champ){

if(champ.type === "checkbox") return;

if(champ.value === "" || champ.value === null){
complete = false;
}

});

if(complete){
section.classList.add("etape-complete");
}else{
section.classList.remove("etape-complete");
}

});

}

/* ======================================================
MODULE 17
INDICATEUR CHAMPS (POINT + TEXTE)
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const champs = [

"locataire",
"telephone",
"numeroAppartement",
"adresse",
"ville-quebec",
"codePostal",
"province",
"pays",
"verificateur",
"verification-date",
"type-verification",
"type-piece",
"emailProprietaire"

];

champs.forEach(function(id){

const champ = document.getElementById(id);

if(!champ) return;

const label = champ.parentNode;

if(!label) return;

/* ÉVITER DOUBLON SI LE MODULE EST RELANCÉ */
if(label.querySelector(".etat-champ")) return;

const indicateur = document.createElement("span");
indicateur.className = "indicateur-etape etape-ko";

const texte = document.createElement("span");
texte.className = "texte-etape";
texte.innerText = "Non terminé";

const conteneur = document.createElement("span");
conteneur.className = "etat-champ";

conteneur.appendChild(indicateur);
conteneur.appendChild(texte);

label.appendChild(conteneur);

function verifier(){

let valeur = "";

if(champ.tagName === "SELECT"){
valeur = champ.value || "";
}else{
valeur = (champ.value || "").trim();
}

if(valeur !== ""){

indicateur.classList.remove("etape-ko");
indicateur.classList.add("etape-ok");

texte.innerText = "Terminé";

}else{

indicateur.classList.remove("etape-ok");
indicateur.classList.add("etape-ko");

texte.innerText = "Non terminé";

}

}

champ.addEventListener("input", verifier);
champ.addEventListener("change", verifier);

verifier();

});

});


/* ======================================================
MODULE 18
REPLIER / DÉPLIER SIGNATURES AVEC TEXTE AUTOMATIQUE
====================================================== */

function basculerSectionSignatures(){

const bloc = document.getElementById("contenu-signatures");
const bouton = document.getElementById("bouton-signatures");

if(!bloc || !bouton) return;

if(bloc.style.display === "none"){

bloc.style.display = "block";
bouton.innerText = "Replier signatures";

}else{

bloc.style.display = "none";
bouton.innerText = "Déplier signatures";

}

}

/* ======================================================
MODULE 25
INDICATEURS CHAMPS STABLES
====================================================== */

document.querySelectorAll("#formulaire-client input, #formulaire-client select")
.forEach(function(champ){

champ.addEventListener("input", function(){

const label = champ.closest("label");

if(!label) return;

const indicateur = label.querySelector(".indicateur-etape");

if(!indicateur) return;

if(champ.value.trim() !== ""){

indicateur.classList.remove("etape-ko");
indicateur.classList.add("etape-ok");

}else{

indicateur.classList.remove("etape-ok");
indicateur.classList.add("etape-ko");

}

});

});

/* ======================================================
MODULE 26
SECTION CLIENT REPLIABLE ANDROID STABLE
====================================================== */

function basculerSectionClient(){

const section = document.getElementById("contenu-client");

if(!section) return;

if(section.classList.contains("section-replie")){

section.classList.remove("section-replie");

}else{

section.classList.add("section-replie");

}

}

/* ======================================================
MODULE 27
AUTHENTIFICATION ADMIN
====================================================== */

function activerModeAdmin(){

const champ = document.getElementById("admin-password");
const controles = document.getElementById("admin-controles");
const login = document.getElementById("zone-login-admin");

if(!champ) return;

if(champ.value === "jlr1959"){

if(controles){
controles.style.display = "block";
}

if(login){
login.style.display = "none";
}

champ.value = "";

alert("Mode administrateur activé.");

}else{

alert("Mot de passe incorrect.");

}

}

/* ======================================================
MODULE 28
GESTION VISIBILITÉ MINUTEUR
====================================================== */

function basculerMinuteur(){

const section = document.getElementById("section-minuteur");

if(!section) return;

section.classList.toggle("minuteur-visible");

}

/* ======================================================
MODULE 29
DÉSACTIVER MODE ADMIN
====================================================== */

function desactiverModeAdmin(){

const controles = document.getElementById("admin-controles");
const login = document.getElementById("zone-login-admin");
const champ = document.getElementById("admin-password");
const minuteur = document.getElementById("section-minuteur");

if(controles){
controles.style.display = "none";
}

if(login){
login.style.display = "block";
}

if(champ){
champ.value = "";
}

if(minuteur){
minuteur.classList.remove("minuteur-visible");
}

alert("Mode administrateur désactivé.");

}

/* ======================================================
MODULE 30
DÉMARRAGE AUTOMATIQUE DU MINUTEUR
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const champDossier = document.getElementById("numeroDossier");

if(!champDossier) return;

const observer = new MutationObserver(function(){

if(champDossier.value && champDossier.value.trim() !== ""){
demarrerMinuteur();
}

});

observer.observe(champDossier, {
attributes:true,
attributeFilter:["value"]
});

});

/* ======================================================
MODULE 31
FIN DE VÉRIFICATION
====================================================== */

function terminerVerification(){

pauseMinuteur();

alert("Vérification complète terminée.");

}

/* ======================================================
MODULE 32
CALCUL FACTURATION RAPPORT
====================================================== */

function calculerFacturationRapport(){

const temps = obtenirTempsTotal();

const heures = temps / 3600000;

const taux = 125;

const sousTotal = heures * taux;

const tps = sousTotal * 0.05;

const tvq = sousTotal * 0.09975;

const total = sousTotal + tps + tvq;

return {
heures: heures.toFixed(2),
sousTotal: sousTotal.toFixed(2),
tps: tps.toFixed(2),
tvq: tvq.toFixed(2),
total: total.toFixed(2)
};

}

/* ======================================================
MODULE 23
DÉMARRAGE AUTOMATIQUE MINUTEUR SUR DOSSIER
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const champDossier = document.getElementById("numeroDossier");

if(!champDossier) return;

let minuteurDemarre = false;

const verifierDossier = function(){

if(champDossier.value && champDossier.value.trim() !== "" && !minuteurDemarre){

if(typeof demarrerMinuteur === "function"){

demarrerMinuteur();

minuteurDemarre = true;

}

}

};

/* vérifie au chargement */
verifierDossier();

/* vérifie si la valeur change */
setInterval(verifierDossier, 500);

});

function verificationComplete(){

/* ===========================
ARRÊT DU MINUTEUR
=========================== */

if(typeof pauseMinuteur === "function"){
pauseMinuteur();
}

/* ===========================
GÉNÉRATION RAPPORT
=========================== */

if(typeof genererRapportImpression === "function"){
genererRapportImpression();
}

/* ===========================
IMPRESSION
=========================== */

setTimeout(function(){

if(typeof imprimerRapport === "function"){
imprimerRapport();
}

},500);


/* ===========================
COURRIEL
=========================== */

setTimeout(function(){

if(typeof genererMailto === "function"){
genererMailto();
}

},1500);


/* ===========================
ARCHIVAGE
=========================== */

setTimeout(function(){

if(typeof archiverVerification === "function"){
archiverVerification();
}

},2000);


/* ===========================
MESSAGE FINAL
=========================== */

setTimeout(function(){

alert("Vérification complète terminée.");

},2500);

}

/* ======================================================
MODULE 24
SAUVEGARDE ENTREPRISE FACTURATION
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const entreprise = document.getElementById("entreprise-facturation");
const courriel = document.getElementById("email-facturation");

if(!entreprise || !courriel) return;

/* restauration */

entreprise.value = localStorage.getItem("entrepriseFacturation") || "";
courriel.value = localStorage.getItem("emailFacturation") || "";

/* sauvegarde */

entreprise.addEventListener("input", function(){
localStorage.setItem("entrepriseFacturation", entreprise.value);
});

courriel.addEventListener("input", function(){
localStorage.setItem("emailFacturation", courriel.value);
});

});

/* ======================================================
MODULE 25
VÉRIFICATION ENTREPRISE FACTURATION
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const entreprise = document.getElementById("entreprise-facturation");
const email = document.getElementById("email-facturation");

const etatEntreprise = document.getElementById("etat-entreprise-facturation");
const etatEmail = document.getElementById("etat-email-facturation");

if(!entreprise || !email) return;

function verifierChamp(champ, indicateur){

if(champ.value.trim() !== ""){

indicateur.classList.remove("etape-ko");
indicateur.classList.add("etape-ok");

}else{

indicateur.classList.remove("etape-ok");
indicateur.classList.add("etape-ko");

}

}

entreprise.addEventListener("input", function(){
verifierChamp(entreprise, etatEntreprise);
});

email.addEventListener("input", function(){
verifierChamp(email, etatEmail);
});

/* vérification initiale */

verifierChamp(entreprise, etatEntreprise);
verifierChamp(email, etatEmail);

});

/* ======================================================
MODULE 99
EFFACER SIGNATURES GLOBAL
====================================================== */

function effacerSignatureLocataire() {

  const canvas = document.getElementById("signature-client");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

function effacerSignatureConsultant() {

  const canvas = document.getElementById("signature-verificateur");
  if (!canvas) return;

  const ctx = canvas.getContext("2d");

  ctx.clearRect(0, 0, canvas.width, canvas.height);

}

window.effacerSignatureLocataire = effacerSignatureLocataire;
window.effacerSignatureConsultant = effacerSignatureConsultant;

/* ======================================================
MODULE 201
MODE LOCATAIRE / PROPRIETAIRE
====================================================== */

async function verifierModeLogiciel(){

try{

const reponse = await fetch("licence.json");

const licence = await reponse.json();

if(licence.mode === "locataire"){

activerModeLocataire();

}

}catch(e){

console.log("Licence non trouvée");

}

}


/* ======================================================
ACTIVER MODE LOCATAIRE
====================================================== */

function activerModeLocataire(){

const elements = document.querySelectorAll(".infos-proprietaire");

elements.forEach(el => {

el.style.display = "none";

});

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierModeLogiciel();

});

/* ======================================================
MODULE 202
MODE ESSAI 30 JOURS
====================================================== */

function verifierModeEssai(){

const licence = localStorage.getItem("dateInstallation");

if(!licence){

const aujourdHui = new Date();

localStorage.setItem("dateInstallation", aujourdHui.toISOString());

return;

}

const dateInstallation = new Date(licence);

const aujourdHui = new Date();

const joursUtilisation =
Math.floor((aujourdHui - dateInstallation) / (1000 * 60 * 60 * 24));

const dureeEssai = 30;

if(joursUtilisation > dureeEssai){

bloquerLogicielEssai();

}

}


/* ======================================================
BLOCAGE ESSAI
====================================================== */

function bloquerLogicielEssai(){

document.body.innerHTML = `
<div style="
font-family:Arial;
text-align:center;
margin-top:120px;
">

<h1>Période d'essai expirée</h1>

<p>
La période d'essai de ce logiciel est terminée.
Veuillez acheter une licence.
</p>

</div>
`;

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierModeEssai();

});

/* ======================================================
MODULE 203
PROTECTION CONTRE MODIFICATION DATE SYSTEME
====================================================== */

function verifierDateSysteme(){

const aujourdHui = new Date();

const derniereUtilisation = localStorage.getItem("derniereUtilisation");

if(!derniereUtilisation){

localStorage.setItem("derniereUtilisation", aujourdHui.toISOString());

return;

}

const dateEnregistree = new Date(derniereUtilisation);

/* si la date système est reculée */

if(aujourdHui < dateEnregistree){

bloquerLogicielDate();

return;

}

/* mise à jour date utilisation */

localStorage.setItem("derniereUtilisation", aujourdHui.toISOString());

}


/* ======================================================
BLOCAGE LOGICIEL
====================================================== */

function bloquerLogicielDate(){

document.body.innerHTML = `
<div style="
font-family:Arial;
text-align:center;
margin-top:120px;
">

<h1>Erreur système</h1>

<p>
Une modification anormale de la date système a été détectée.
Le logiciel est bloqué.
</p>

</div>
`;

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierDateSysteme();

});

/* ======================================================
MODULE 205
CONTROLE NOMBRE UTILISATEURS
====================================================== */

async function verifierNombreUtilisateurs(){

try{

const reponse = await fetch("licence.json");

const licence = await reponse.json();

/* limite utilisateurs */

let limite = licence.utilisateurs || 1;

/* licence illimitée */

if(limite === "illimite"){
return;
}

let compteur = localStorage.getItem("compteurUtilisateurs");

/* première utilisation */

if(!compteur){

localStorage.setItem("compteurUtilisateurs",1);

return;

}

compteur = parseInt(compteur);

/* dépassement licence */

if(compteur > limite){

bloquerLogicielUtilisateurs();

}

}catch(e){

console.log("Licence non trouvée");

}

}


/* ======================================================
BLOCAGE UTILISATEURS
====================================================== */

function bloquerLogicielUtilisateurs(){

document.body.innerHTML = `
<div style="
font-family:Arial;
text-align:center;
margin-top:120px;
">

<h1>Licence dépassée</h1>

<p>
Le nombre d'utilisateurs autorisés pour cette licence est dépassé.
</p>

</div>
`;

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierNombreUtilisateurs();

});


/* ======================================================
BLOCAGE UTILISATEURS
====================================================== */

function bloquerLogicielUtilisateurs(){

document.body.innerHTML = `
<div style="
font-family:Arial;
text-align:center;
margin-top:120px;
">

<h1>Licence dépassée</h1>

<p>
Le nombre d'utilisateurs autorisés pour cette licence est dépassé.
</p>

</div>
`;

}


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

verifierNombreUtilisateurs();

});


/* ======================================================
MODULE 206
PANNEAU ADMINISTRATEUR LICENCE
====================================================== */

async function afficherInfosLicence(){

try{

const reponse = await fetch("licence.json");
const licence = await reponse.json();

const machine = localStorage.getItem("machineAutorisee") || "non enregistré";

const panneau = document.createElement("div");

panneau.id = "panneau-admin-licence";

panneau.style.position = "fixed";
panneau.style.bottom = "20px";
panneau.style.right = "20px";
panneau.style.background = "#ffffff";
panneau.style.border = "1px solid #ccc";
panneau.style.padding = "15px";
panneau.style.fontSize = "14px";
panneau.style.zIndex = "9999";
panneau.style.display = "none";

panneau.innerHTML = `
<strong>Informations licence</strong><br><br>

Logiciel : ${licence.logiciel || ""}<br>
Type : ${licence.type || ""}<br>
Client : ${licence.client || ""}<br>
Expiration : ${licence.expiration || ""}<br>
Utilisateurs : ${licence.utilisateurs || ""}<br>
Machine ID : ${machine}<br>

<br>
<button onclick="document.getElementById('panneau-admin-licence').style.display='none'">
Fermer
</button>
`;

document.body.appendChild(panneau);

}catch(e){

console.log("Licence non trouvée");

}

}


/* ======================================================
OUVERTURE PANNEAU ADMIN
CTRL + SHIFT + L
====================================================== */

document.addEventListener("keydown",function(e){

if(e.ctrlKey && e.shiftKey && e.key === "L"){

const panneau = document.getElementById("panneau-admin-licence");

if(panneau){

panneau.style.display = "block";

}

}

});


/* ======================================================
INITIALISATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

afficherInfosLicence();

});

/* ======================================================
MODULE 300
CHARGER PROFIL ENTREPRISE
====================================================== */

let profilEntreprise = {};

async function chargerProfilEntreprise(){

try{

const reponse = await fetch("entreprise.json");

profilEntreprise = await reponse.json();

}catch(e){

console.log("Profil entreprise introuvable");

}

}

document.addEventListener("DOMContentLoaded", function(){

chargerProfilEntreprise();

});

/* ======================================================
MODULE 301
GESTION VISIBILITÉ FACTURATION
====================================================== */

let facturationVisible = true;

function masquerFacturation(){

facturationVisible = false;

localStorage.setItem("facturationVisible","false");

alert("Facturation masquée dans les rapports.");

}

function afficherFacturation(){

facturationVisible = true;

localStorage.setItem("facturationVisible","true");

alert("Facturation visible dans les rapports.");

}

/* restauration état */

document.addEventListener("DOMContentLoaded",function(){

const etat = localStorage.getItem("facturationVisible");

if(etat === "false"){
facturationVisible = false;
}

});


/* ======================================================
MODULE 302
TAUX HORAIRE ADMINISTRATEUR
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

const tauxSauvegarde = localStorage.getItem("tauxHoraire");

if(tauxSauvegarde){
tauxHoraire = parseFloat(tauxSauvegarde);
}

});

function modifierTauxHoraire(){

const champ = document.getElementById("admin-taux-horaire");

if(!champ) return;

const nouveauTaux = parseFloat(champ.value);

if(isNaN(nouveauTaux) || nouveauTaux <= 0){

alert("Taux invalide");
return;

}

tauxHoraire = nouveauTaux;

localStorage.setItem("tauxHoraire",tauxHoraire);

alert("Taux horaire modifié : " + tauxHoraire + " $");

}


/* ======================================================
MODULE 304
REMPLACER INFORMATIONS ENTREPRISE DANS RAPPORT
====================================================== */

function remplirInformationsRapport(){

if(!profilEntreprise) return;

/* nom entreprise */

const nom = document.getElementById("rapport-entreprise-nom");
if(nom){
nom.textContent = profilEntreprise.nom || "";
}

/* titre */

const titre = document.getElementById("rapport-entreprise-titre");
if(titre){
titre.textContent = profilEntreprise.titre || "";
}

/* contact */

const contact = document.getElementById("rapport-entreprise-contact");
if(contact){
contact.textContent =
"📧 " + (profilEntreprise.courriel || "") +
" | 📞 " + (profilEntreprise.telephone || "");
}

/* NEQ */

const neq = document.getElementById("rapport-entreprise-neq");
if(neq){
neq.textContent = "NEQ : " + (profilEntreprise.neq || "");
}

/* taxes */

const taxes = document.getElementById("rapport-entreprise-taxes");
if(taxes){
taxes.textContent =
"TPS : " + (profilEntreprise.tps || "") +
" | TVQ : " + (profilEntreprise.tvq || "");
}

}

/* ======================================================
MODULE 304
AFFICHAGE ENTREPRISE CLIENT DANS ENTÊTE
====================================================== */

function afficherInfosEntreprise(){

if(!profilEntreprise) return;

/* nom entreprise */

const nom = document.getElementById("entreprise-nom");
if(nom){
nom.textContent = profilEntreprise.nom || "";
}

/* titre */

const titre = document.getElementById("entreprise-titre");
if(titre){
titre.textContent = profilEntreprise.titre || "";
}

/* contact */

const contact = document.getElementById("entreprise-contact");
if(contact){
contact.textContent =
"📧 " + (profilEntreprise.courriel || "") +
" | 📞 " + (profilEntreprise.telephone || "");
}

/* NEQ */

const neq = document.getElementById("entreprise-neq");
if(neq){
neq.textContent = "NEQ : " + (profilEntreprise.neq || "");
}

/* taxes */

const taxes = document.getElementById("entreprise-taxes");
if(taxes){
taxes.textContent =
"TPS : " + (profilEntreprise.tps || "") +
" | TVQ : " + (profilEntreprise.tvq || "");
}

}

/* ======================================================
MODULE 306
INDICATEUR ÉTAT VÉRIFICATION
POINT ROUGE / VERT + COLORATION CHAMP
====================================================== */

function verifierEtat(piece, champ){

const indicateur = document.getElementById("etat-"+piece);

if(!champ.value){

if(indicateur){
indicateur.className = "point-etat point-attente";
}

champ.classList.remove("champ-ok");
champ.classList.remove("champ-probleme");

return;

}

/* logique simple : si "ok" écrit → conforme */

if(champ.value.toLowerCase().includes("ok")){

if(indicateur){
indicateur.className = "point-etat point-ok";
}

champ.classList.add("champ-ok");

}else{

if(indicateur){
indicateur.className = "point-etat point-probleme";
}

champ.classList.add("champ-probleme");

}

}

/* ======================================================
MODULE 307
INDICATEUR CHAMP VÉRIFICATION
VERT / ROUGE / À COMPLÉTER
====================================================== */

function verifierChamp(idChamp){

const champ = document.getElementById(idChamp);
const indicateur = document.getElementById("etat-"+idChamp);

if(!champ || !indicateur) return;

/* champ vide */

if(champ.value.trim() === ""){

indicateur.className = "point-etat point-attente";
return;

}

/* mots indiquant défaut */

const motsProbleme = [
"brisé",
"fissure",
"défectueux",
"endommagé",
"cassé",
"usé",
"tache",
"fuite",
"moisissure"
];

const valeur = champ.value.toLowerCase();

let probleme = false;

motsProbleme.forEach(function(mot){

if(valeur.includes(mot)){
probleme = true;
}

});

/* état final */

if(probleme){

indicateur.className = "point-etat point-probleme";

}else{

indicateur.className = "point-etat point-ok";

}

}

/* ======================================================
MODULE 309
VERROU BANDEAU OBLIGATOIRE
====================================================== */

function verificationAutorisee(){

const type = document.getElementById("type-verification");

if(!type || type.value === ""){

alert("Veuillez d'abord sélectionner un type de vérification avec les bandeaux.");

return false;

}

return true;

}

/* ======================================================
MODULE 310
BANDEAU CLIQUABLE OUVERTURE PIÈCES
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

const bandeau = document.getElementById("bandeau-mode-verification");
const interieur = document.getElementById("pieces-interieur");
const exterieur = document.getElementById("pieces-exterieur");

if(!bandeau) return;

/* clic sur le bandeau */

bandeau.addEventListener("click", function(){

const texte = bandeau.textContent;

/* ouvrir intérieur */

if(texte.includes("INTÉRIEURE")){

if(interieur){
interieur.style.display = "block";
}

if(exterieur){
exterieur.style.display = "none";
}

}

/* ouvrir extérieur */

if(texte.includes("EXTÉRIEURE")){

if(exterieur){
exterieur.style.display = "block";
}

if(interieur){
interieur.style.display = "none";
}

}

});

});


/* ======================================================
MODULE 130 → 134 — SYSTEME LICENCE DESACTIVE (FINAL)
====================================================== */

/* ancien systeme totalement supprimé */

function genererMachineID(){
    return "DISABLED";
}

function calculerSignature(){
    return "DISABLED";
}

async function verifierLicence(){
    return true;
}

function verifierInstallation(){
    return true;
}

/* suppression COMPLETE du controle licence au demarrage */

document.addEventListener("DOMContentLoaded", function(){

    console.log("Licence gérée par licenceManager.js uniquement");

});

/* ======================================================
MODULE 400
CONFIGURATION ENTREPRISE (ENREGISTREMENT LOCAL)
====================================================== */

function validerEntreprise(){

const entreprise = {

nom: document.getElementById("entreprise-nom")?.value || "",
adresse: document.getElementById("entreprise-adresse")?.value || "",
licence: document.getElementById("entreprise-licence")?.value || "",
tps: document.getElementById("entreprise-tps")?.value || "",
tvq: document.getElementById("entreprise-tvq")?.value || ""

};

localStorage.setItem(
"vpijlr_entreprise",
JSON.stringify(entreprise)
);

alert("Informations de l'entreprise enregistrées");

const fenetre = document.getElementById("fenetre-entreprise");

if(fenetre){
fenetre.style.display = "none";
}

}

/* ======================================================
MODULE 350
ADMIN – FACTURATION VISIBLE / CACHÉE
====================================================== */

function basculerFacturationAdmin(){

const section = document.getElementById("section-facturation");

if(!section) return;

let etat = localStorage.getItem("vpijlr_facturation_visible");

if(etat === "false"){

section.style.display = "block";

localStorage.setItem("vpijlr_facturation_visible","true");

alert("Facturation visible dans l'impression du rapport");

}else{

section.style.display = "none";

localStorage.setItem("vpijlr_facturation_visible","false");

alert("Facturation cachée dans l'impression du rapport");

}

}


/* ======================================================
MODULE 351
CHARGEMENT VISIBILITÉ FACTURATION
====================================================== */

document.addEventListener("DOMContentLoaded",function(){

const section = document.getElementById("section-facturation");

if(!section) return;

let etat = localStorage.getItem("vpijlr_facturation_visible");

if(etat === "false"){

section.style.display = "none";

}

});

/* ======================================================
MODULE 400
BASE DE DONNÉES INDEXEDDB
====================================================== */

let db;

const request = indexedDB.open("VPIJLR_DATABASE",1);

request.onupgradeneeded = function(e){

db = e.target.result;

if(!db.objectStoreNames.contains("rapports")){

db.createObjectStore("rapports",{keyPath:"id"});

}

};

request.onsuccess = function(e){

db = e.target.result;

};

request.onerror = function(){

console.log("Erreur base de données");

};

/* ======================================================
MODULE 401
SAUVEGARDE RAPPORT
====================================================== */

function sauvegarderRapport(){

if(!db) return;

const transaction = db.transaction(["rapports"],"readwrite");

const store = transaction.objectStore("rapports");

const rapport = {

id:"rapport-courant",

locataire: document.getElementById("locataire")?.value || "",
telephone: document.getElementById("telephone")?.value || "",
adresse: document.getElementById("adresse")?.value || "",
ville: document.getElementById("ville-quebec")?.value || "",
codePostal: document.getElementById("codePostal")?.value || "",
province: document.getElementById("province")?.value || "",
pays: document.getElementById("pays")?.value || "",
verificateur: document.getElementById("verificateur")?.value || "",
date: document.getElementById("verification-date")?.value || "",

facturationVisible: localStorage.getItem("vpijlr_facturation_visible")

};

store.put(rapport);

console.log("Sauvegarde effectuée");

}

/* ======================================================
MODULE 402
SAUVEGARDE AUTOMATIQUE
====================================================== */

setInterval(function(){

sauvegarderRapport();

},120000);

/* ======================================================
MODULE 403
RESTAURATION AUTOMATIQUE
====================================================== */

function chargerRapport(){

if(!db) return;

const transaction = db.transaction(["rapports"],"readonly");

const store = transaction.objectStore("rapports");

const request = store.get("rapport-courant");

request.onsuccess = function(){

const data = request.result;

if(!data) return;

document.getElementById("locataire").value = data.locataire || "";
document.getElementById("telephone").value = data.telephone || "";
document.getElementById("adresse").value = data.adresse || "";
document.getElementById("ville-quebec").value = data.ville || "";
document.getElementById("codePostal").value = data.codePostal || "";

};

}

document.addEventListener("DOMContentLoaded",function(){

setTimeout(chargerRapport,1000);

});


/* ======================================================
MODULE 130
SYSTEME LICENCE CENTRAL DESACTIVE
====================================================== */

function genererMachineID(){
    return "DISABLED";
}


/* ======================================================
MODULE 131
SIGNATURE DESACTIVE
====================================================== */

function calculerSignature(){
    return "DISABLED";
}


/* ======================================================
MODULE 132
VERIFICATION LICENCE (FORCEE OK)
====================================================== */

async function verifierLicence(){
    return true;
}


/* ======================================================
MODULE 133
INSTALLATION (FORCEE OK)
====================================================== */

function verifierInstallation(){
    return true;
}


/* ======================================================
MODULE 134
DEMARRAGE SECURISE (SANS LICENCE)
====================================================== */

document.addEventListener("DOMContentLoaded", function(){

    console.log("Licence interne désactivée — utilisation licenceManager.js");

});


/* ======================================================
MODULE 01
VALIDATION CLIENT + DOSSIER AUTOMATIQUE
====================================================== */

function validerNomComplet(nom) {
  const propre = nom.trim();
  return /^[A-Za-zÀ-ÿ' -]+$/.test(propre) && propre.split(/\s+/).length >= 2;
}

function nettoyerTelephone(valeur) {
  return valeur.replace(/\D/g, "").slice(0, 10);
}

function telephoneValide(valeur) {
  return /^\d{10}$/.test(valeur);
}

function formaterTelephone(valeur) {
  const digits = nettoyerTelephone(valeur);

  if (digits.length === 0) return "";
  if (digits.length < 4) return `(${digits}`;
  if (digits.length < 7) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
}

function validerNumeroAppartement(valeur) {
  return /^\d+$/.test(valeur.trim());
}

function validerSuffixeAppartement(valeur) {
  return valeur.trim() === "" || /^[A-Za-z]$/.test(valeur.trim());
}

function setChampEtat(idInput, idEtat, valide, message = "") {
  const input = document.getElementById(idInput);
  const etat = document.getElementById(idEtat);
  const erreur = document.getElementById("erreur-" + idInput);

  if (!input) return;

  input.style.border = valide ? "" : "2px solid red";

  if (etat) {
    etat.classList.remove("etape-ok", "etape-ko");
    etat.classList.add(valide ? "etape-ok" : "etape-ko");
  }

  if (erreur) {
    erreur.textContent = valide ? "" : message;
  }
}

/* ======================================================
GÉNÉRATION DOSSIER
====================================================== */

function genererNumeroDossier() {

  const nomInput = document.getElementById("locataire");
  const telInput = document.getElementById("telephone");
  const aptInput = document.getElementById("numeroAppartement");
  const suffixeInput = document.getElementById("suffixeAppartement");
  const champ = document.getElementById("numeroDossier");

  if (!champ || !nomInput || !telInput || !aptInput) return;

  const nom = nomInput.value.trim();
  const telDigits = nettoyerTelephone(telInput.value);
  const appartement = aptInput.value.trim();
  const suffixe = suffixeInput ? suffixeInput.value.trim().toUpperCase() : "";

  if (suffixeInput) {
    suffixeInput.value = suffixe.replace(/[^A-Z]/g, "").slice(0, 1);
  }

  const nomOK = validerNomComplet(nom);
  const telOK = telephoneValide(telDigits);
  const aptOK = validerNumeroAppartement(appartement);
  const suffixeOK = validerSuffixeAppartement(suffixe);

  setChampEtat("locataire", "etat-locataire", nomOK, "Nom complet requis (lettres seulement)");
  setChampEtat("telephone", "etat-telephone", telOK, "Format requis : (514) 123-4567");
  setChampEtat("numeroAppartement", "etat-numeroAppartement", aptOK, "Chiffres seulement");

  if (suffixeInput) {
    suffixeInput.style.border = suffixeOK ? "" : "2px solid red";
  }

  telInput.value = formaterTelephone(telInput.value);

  if (!nomOK || !telOK || !aptOK || !suffixeOK) {
    champ.value = "";
    return;
  }

  const aujourdHui = new Date();

  const dateActive =
    aujourdHui.getFullYear().toString() +
    String(aujourdHui.getMonth() + 1).padStart(2, "0") +
    String(aujourdHui.getDate()).padStart(2, "0");

  const nomFormate = nom
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z\s'-]/g, "")
    .replace(/\s+/g, "");

  const appartementFinal = suffixe ? `${appartement}${suffixe}` : appartement;

  champ.value =
    "VPIJLR-" +
    dateActive + "-" +
    nomFormate + "-" +
    telDigits + "-" +
    appartementFinal;
}

/* ======================================================
ÉCOUTEURS
====================================================== */

document.addEventListener("DOMContentLoaded", function () {

  const nomInput = document.getElementById("locataire");
  const telInput = document.getElementById("telephone");
  const aptInput = document.getElementById("numeroAppartement");
  const suffixeInput = document.getElementById("suffixeAppartement");

  if (nomInput) {
    nomInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^A-Za-zÀ-ÿ' -]/g, "");
      genererNumeroDossier();
    });
  }

  if (telInput) {
    telInput.addEventListener("input", function () {
      this.value = formaterTelephone(this.value);
      genererNumeroDossier();
    });
  }

  if (aptInput) {
    aptInput.addEventListener("input", function () {
      this.value = this.value.replace(/\D/g, "");
      genererNumeroDossier();
    });
  }

  if (suffixeInput) {
    suffixeInput.addEventListener("input", function () {
      this.value = this.value.replace(/[^A-Za-z]/g, "").toUpperCase().slice(0, 1);
      genererNumeroDossier();
    });
  }

  genererNumeroDossier();
});



/* ======================================================
MODULE 02
DATE AUTOMATIQUE + VALIDATION VISUELLE
====================================================== */

function dateAujourdhuiISO() {
  const d = new Date();
  return d.getFullYear() + "-" +
    String(d.getMonth() + 1).padStart(2, "0") + "-" +
    String(d.getDate()).padStart(2, "0");
}

function appliquerDateAutomatique(){

  const champDate = document.getElementById("verification-date");
  const etat = document.getElementById("etat-verification-date");

  if(!champDate) return;

  const aujourdHui = dateAujourdhuiISO();

  champDate.value = aujourdHui;

  // ✅ VALIDATION VISUELLE
  if(etat){
    etat.classList.remove("etape-ko");
    etat.classList.add("etape-ok");
  }

}

// toujours appliquer au chargement
document.addEventListener("DOMContentLoaded", function(){

  appliquerDateAutomatique();

});
