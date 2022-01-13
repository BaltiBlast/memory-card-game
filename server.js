// Notre fichier index.js est le point d'entré de notre back.
// Il est également le fichier qui nous permet de lancer notre server en localhost afin de procéder à nos tests

"use strict";

// Import des dépendances utilisées
const express = require("express");

// Cors nous permet de gérer les authorisations lorsque nous effectuons des requêtes
const cors = require("cors");

// bodyParser nous permettra d'analyser les requêtes entrante avant notre géstionnaire
const bodyParser = require("body-parser");

// Import de notre fichier config.js contenant les authorisations de connexions à notre API ainsi que les informations pour lancer notre server en localhost
const config = require("./back-end/config");

// Import de notre fichier timer-routes.js contenant les routes qui nous servirons à communiquer avec notre Base De Donnée.
const timerRoutes = require("./back-end/routes/timer-routes");

// Point d'accés à Express
const app = express();


// Initialisation des paramètre cords afin d'avoir les authorisations de connexion entre nos requêtes et notre Base De Donnée
app.use(cors());

// Méthode afin de créer une compréhension d'écriture et de lécture de nos fichiers JSON, pour notre Base De Donnée
app.use(bodyParser.json());
app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);


app.use("/api", timerRoutes.routes);


app.listen(config.port, () =>
  console.log("App is listening on url http://localhost:" + config.port)
);
