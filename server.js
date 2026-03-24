const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();
app.use(cors());
app.use(express.json());

const FILE = "licences.json";

/* =========================
UTILS
========================= */

function load(){
  try{
    return JSON.parse(fs.readFileSync(FILE));
  }catch{
    return { actives: [] };
  }
}

function save(data){
  fs.writeFileSync(FILE, JSON.stringify(data,null,2));
}

function generateKey(){
  return "LIC-" + Math.random().toString(36).substr(2,10).toUpperCase();
}

/* =========================
ROUTES
========================= */

app.get("/ping",(req,res)=>{
  res.send("OK");
});

app.get("/licences",(req,res)=>{
  res.json(load());
});

app.post("/licences",(req,res)=>{

  const data = load();

  const licence = {
    cle: generateKey(),
    email: req.body.email,
    client: req.body.client,
    date: new Date().toISOString()
  };

  data.actives.push(licence);
  save(data);

  console.log("LICENCE CRÉÉE:", licence);

  res.json(licence);
});

/* =========================
START
========================= */

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log("SERVEUR OK", PORT);
});
