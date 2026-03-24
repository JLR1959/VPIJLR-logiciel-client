/* ======================================================
MODULE 18
FONCTION CHAMP
====================================================== */

function champ(titre, options){

let html = "";

html += `<div class="champ-verification">`;

html += `<label>${titre}</label>`;

html += `<select>`;

html += `<option value="">Sélectionner</option>`;

options.forEach(function(option){

html += `<option value="${option}">${option}</option>`;

});

html += `</select>`;

html += `</div>`;

return html;

}


/* ======================================================
MODULE 18.1
FONCTION TEXTE COMMENTAIRE
====================================================== */

function texte(titre){

let html = "";

html += `<div class="champ-verification">`;

html += `<label>${titre}</label>`;

html += `<textarea rows="3" placeholder="Ajouter un commentaire"></textarea>`;

html += `</div>`;

return html;

}




// ======================================================
// MODULE 5
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
