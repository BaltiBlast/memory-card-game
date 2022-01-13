// Import des ressources NPM utilisées
const express = require("express");

// Import de nos controllers "addTimer" et "getAllTimer"
const { addTimer, getAllTimer } = require("../controllers/timerController");

// Utilisation du Router express
const router = express.Router();

// Route pour l'envoi de notre temps en Base De Données
router.post("/time", addTimer);

// Route pour la réception des temps enregistrer en Base De Données
router.get("/times", getAllTimer);

// Export de notre module
module.exports = {
  routes: router,
};
