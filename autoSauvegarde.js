/* ======================================================
MODULE 01
CONFIG
====================================================== */

const AUTO_SAVE_KEY = "vpijlr_auto_save";
const AUTO_SAVE_INTERVAL = 3000;

/* ======================================================
MODULE 02
RECUPERER TOUS LES CHAMPS
====================================================== */

function collecterDonnees() {

    const inputs = document.querySelectorAll("input, textarea, select");

    const data = {};

    inputs.forEach(el => {

        if (el.id) {

            if (el.type === "checkbox" || el.type === "radio") {
                data[el.id] = el.checked;
            } else {
                data[el.id] = el.value;
            }

        }

    });

    return data;
}

/* ======================================================
MODULE 03
SAUVEGARDE
====================================================== */

function sauvegarderAuto() {

    try {

        const data = collecterDonnees();

        localStorage.setItem(AUTO_SAVE_KEY, JSON.stringify(data));

        console.log("💾 Auto-save OK");

    } catch (e) {
        console.error("Erreur sauvegarde", e);
    }

}

/* ======================================================
MODULE 04
RESTAURATION
====================================================== */

function restaurerAuto() {

    try {

        const saved = localStorage.getItem(AUTO_SAVE_KEY);

        if (!saved) return;

        const data = JSON.parse(saved);

        Object.keys(data).forEach(id => {

            const el = document.getElementById(id);

            if (!el) return;

            if (el.type === "checkbox" || el.type === "radio") {
                el.checked = data[id];
            } else {
                el.value = data[id];
            }

        });

        console.log("♻️ Données restaurées");

    } catch (e) {
        console.error("Erreur restauration", e);
    }

}

/* ======================================================
MODULE 05
INITIALISATION
====================================================== */

window.addEventListener("load", () => {

    restaurerAuto();

    setInterval(sauvegarderAuto, AUTO_SAVE_INTERVAL);

});
