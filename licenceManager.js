/* ======================================================
MODULE 01 — VERIFICATION LOCALE
====================================================== */

async function verifierLicenceLocal(){

    const cle = localStorage.getItem("licence_key");

    console.log("CLE STOCKEE :", cle);

    if(!cle){
        bloquer("Licence requise");
        return;
    }

    if(!validerFormat(cle)){
        bloquer("Licence invalide");
        return;
    }

    try{

        await verifierLicenceServeur(cle);

        afficherLicence(cle);

    }catch(e){

        console.error("ERREUR COMPLETE :", e);
        bloquer("Licence refusée serveur");

    }
}


/* ======================================================
MODULE 02 — VALIDATION FORMAT
====================================================== */

function validerFormat(cle){

    const regex = /^[A-Z0-9]{6}(-[A-Z0-9]{6}){6}$/;

    return regex.test(cle);
}


/* ======================================================
MODULE 03 — AFFICHAGE
====================================================== */

function afficherLicence(cle){

    const zone = document.getElementById("info-licence");

    if(zone){
        zone.innerText =
        "VPIJLR 2026 ACTIVÉ ✔\nLicence : " + cle;
    }

}


/* ======================================================
MODULE 04 — BLOCAGE
====================================================== */

function bloquer(message){

    document.body.innerHTML = `
    <div style="
        display:flex;
        height:100vh;
        justify-content:center;
        align-items:center;
        background:#0b1220;
        color:white;
        font-size:24px;
        text-align:center;
        padding:20px;
    ">
        ❌ ${message}
    </div>
    `;
}


/* ======================================================
MODULE 05 — INIT
====================================================== */

window.addEventListener("load", verifierLicenceLocal);


/* ======================================================
MODULE 06 — VERIFICATION SERVEUR
====================================================== */

async function verifierLicenceServeur(cle){

    const deviceId = genererDeviceId();

    console.log("ENVOI SERVEUR :", {
        cle: cle,
        deviceId: deviceId
    });

    const res = await fetch("https://licence-server-jlr-0jex.onrender.com/verify",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            cle: cle,
            deviceId: deviceId
        })
    });

    console.log("STATUS HTTP :", res.status);

    const text = await res.text();
    console.log("REPONSE BRUTE :", text);

    let data;

    try{
        data = JSON.parse(text);
    }catch(e){
        throw new Error("Réponse serveur non JSON");
    }

    console.log("REPONSE JSON :", data);

    if(!data.valid){
        throw new Error("Licence refusée");
    }

    console.log("Licence OK ✔");
}


/* ======================================================
MODULE 07 — DEVICE ID
====================================================== */

function genererDeviceId(){

    let id = localStorage.getItem("device_id");

    if(!id){
        id = crypto.randomUUID();
        localStorage.setItem("device_id", id);
    }

    return id;
}
