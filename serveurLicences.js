/* ======================================================
MODULE 01
IMPORTS
====================================================== */

const express = require("express");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

/* ======================================================
MODULE 02
INITIALISATION
====================================================== */

const app = express();

app.use(cors());
app.use(express.json());

/* ======================================================
MODULE 03
SERVIR FRONTEND
====================================================== */

app.use(express.static(path.join(__dirname, "public")));

/* ======================================================
MODULE 04
FICHIER STOCKAGE LICENCES
====================================================== */

const DATA_FILE = path.join(__dirname, "licences.json");

function chargerLicences() {
  try {
    if (!fs.existsSync(DATA_FILE)) return [];
    return JSON.parse(fs.readFileSync(DATA_FILE, "utf8"));
  } catch {
    return [];
  }
}

function sauvegarderLicences(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), "utf8");
}

let licences = chargerLicences();

/* ======================================================
MODULE 05
ROUTE RACINE TEST
====================================================== */

app.get("/api", (req, res) => {
  res.json({
    status: "OK",
    licences: licences.length,
    date: new Date()
  });
});

/* ======================================================
MODULE 06
LISTER LICENCES
====================================================== */

app.get("/licences", (req, res) => {
  res.json(licences);
});

/* ======================================================
MODULE 07
AJOUT LICENCE
====================================================== */

app.post("/licences", (req, res) => {
  const licence = req.body;

  if (!licence || !licence.cle) {
    return res.status(400).json({ erreur: "Licence invalide" });
  }

  licences.push(licence);
  sauvegarderLicences(licences);

  res.json({ succes: true });
});

/* ======================================================
MODULE 08
SUPPRIMER LICENCE
====================================================== */

app.post("/supprimer-licence", (req, res) => {
  const { cle } = req.body;

  licences = licences.filter(l => l.cle !== cle);
  sauvegarderLicences(licences);

  res.json({ succes: true });
});

/* ======================================================
MODULE 09
VERIFIER LICENCE
====================================================== */

app.post("/verifier", (req, res) => {
  const { cle } = req.body;

  const licence = licences.find(l => l.cle === cle);

  if (!licence) {
    return res.json({ valide: false });
  }

  res.json({ valide: true, licence });
});

/* ======================================================
MODULE 10
FALLBACK HTML
====================================================== */

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* ======================================================
MODULE 11
DEMARRAGE SERVEUR
====================================================== */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Serveur démarré sur port " + PORT);
});
