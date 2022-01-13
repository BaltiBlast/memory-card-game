// Import des dépendances utilisées
const firebase = require('firebase');

// Import de notre fichier config.js
const config = require('./config');

// Connexion entre notre Base De Données et notre application.
const db = firebase.initializeApp(config.firebaseConfig);

// Export de notre variable contenant la connexion
module.exports = db;