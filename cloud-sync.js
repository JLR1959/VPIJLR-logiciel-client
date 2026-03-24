// ==========================
// CONFIG GITHUB
// ==========================
const GITHUB_OWNER = "JLR1959";
const GITHUB_REPO = "VPIJLR";
const FILE_PATH = "data.json";
const TOKEN = "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"; // ⚠️ mets ton vrai token

// ==========================
// LECTURE CLOUD
// ==========================
async function chargerCloud() {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;

  const response = await fetch(url, {
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Accept": "application/vnd.github+json"
    }
  });

  if (!response.ok) throw new Error("Erreur lecture cloud");

  const data = await response.json();
  const contenuDecode = atob(data.content.replace(/\n/g, ""));

  return {
    json: JSON.parse(contenuDecode),
    sha: data.sha
  };
}

// ==========================
// SAUVEGARDE CLOUD
// ==========================
async function sauvegarderCloud(jsonData, sha) {
  const url = `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`;

  const contenu = btoa(unescape(encodeURIComponent(JSON.stringify(jsonData, null, 2))));

  const body = {
    message: "sync VPIJLR",
    content: contenu,
    sha: sha
  };

  const response = await fetch(url, {
    method: "PUT",
    headers: {
      "Authorization": `token ${TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!response.ok) throw new Error("Erreur sauvegarde cloud");

  return await response.json();
}

// ==========================
// AJOUT CLIENT CLOUD SÉCURISÉ
// ==========================
async function cloudAjouterClient(client) {

  const { json, sha } = await chargerCloud();

  // ==========================
  // ANTI DOUBLON
  // ==========================
  const existe = json.clients.find(c =>
    c.locataire === client.locataire &&
    c.adresse === client.adresse &&
    c.date === client.date
  );

  if (existe) {
    console.log("⛔ Doublon détecté");
    return;
  }

  // ==========================
  // AJOUT
  // ==========================
  json.clients.push(client);

  // ==========================
  // LIMITE SÉCURITÉ
  // ==========================
  if (json.clients.length > 500) {
    json.clients.shift();
  }

  // ==========================
  // SAUVEGARDE
  // ==========================
  await sauvegarderCloud(json, sha);

  console.log("✔ Client ajouté cloud");
}

// ==========================
// EXPORT GLOBAL
// ==========================
window.cloudAPI = {
  ajouterClient: cloudAjouterClient
};

// ==========================
// LECTURE DES CLIENTS CLOUD
// ==========================
async function cloudChargerClients() {
  const { json } = await chargerCloud();
  return json.clients || [];
}

// ==========================
// EXPORT AJOUTÉ
// ==========================
window.cloudAPI = {
  ajouterClient: cloudAjouterClient,
  chargerClients: cloudChargerClients
};
