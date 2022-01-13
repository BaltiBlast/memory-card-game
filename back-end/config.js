'use strict';

// Import des dépendances utilisées
const dotenv = require('dotenv');
const assert = require('assert');

// Utilisation de dotenv.config() afin d'interprêter nos valeurs stockées dans notre .env
dotenv.config();

// Importation de toutes nos valeurs stockées dans notre fichier .env sous forme de variable.
const {
    PORT,
    HOST,
    HOST_URL,
    API_KEY,
    AUTH_DOMAIN,
    DATABASE_URL,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDER_ID,
    APP_ID
} = process.env;

// Vérification de notre PORT et notre HOST afin de pouvoir lmancer notre server local. Ces deux élément sont nécessaire afin de mener à bien nos opérations.
assert(PORT, 'PORT is required');
assert(HOST, 'HOST is required');

// Exportation de toutes mes valeurs de connexion à ma Base De Données + mes valeurs pour lancer mon server local
module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: API_KEY,
        authDomain: AUTH_DOMAIN,
        databaseURL: DATABASE_URL,
        projectId: PROJECT_ID,
        storageBucket: STORAGE_BUCKET,
        messagingSenderId: MESSAGING_SENDER_ID,
        appId: APP_ID
    }
}