"use strict";

// Import des ressources NPM utilisées //
const firebase = require("../db");
const firestore = firebase.firestore();

// Import de notre class Timer, copntenant la structure de notre donné à envoyer
const Timer = require("../models/timers");

// addTimer est notre méthode permettant d'envoyer notre temps en base de données.
// "Try" nous permet de construire la requête, puis de l'envoyer en nous retournant un message en cas de succés.
// "catch" nous préviens à l'aide d'un message dans la console et cas d'échec ou d'erreur survenue pendant l'envoie de la donnée
const addTimer = async (req, res, next) => {
  try {
    const data = req.body;

    // Connexion à notre collection "times" contenant tous nos scores
    await firestore.collection("times").doc().set(data);

    // Message en console en cas de bonne réception de la data
    res.send("Record saved successfuly");
  } catch (error) {
    // Message d'erreur s'affichant dans la console en cas de problème survenue pendant la procédure d'envoi
    res.status(400).send(error.message);
  }
};

// getAllTimer est notre méthode permettant d'accéder à tous nos temps en Base De Données
// Ici, "try" et "catch" ont le même devoir que notre méthode "addTimer". A la seule différence que nous réceptionnons et que nous n'envoyons pas la donnée.
const getAllTimer = async (req, res, next) => {
  try {
    // Connexion a ma collection "times"
    const time = await firestore.collection("times");

    // Reception de ma collection "times" stocké dans la variable "data"
    const data = await time.get();

    // Déclaration d'un tableau vide 
    const timesArray = [];

    // CONDITION

    // SI ma valeur reçu est vide, alors je renvoie un message d'erreur afin de prévenir que je n'ai pas réçu ma donnée
    if (data.empty) {
      res.status(404).send("No time record found");
    } else {
      // SINON Je déclare une nouvelle valeur structuré grace à notre Timer, que je pousse ensuite avec .push() au sein de notre tableau [timesArray].
      // Ce dernier contiendra tous nos temps stockés en Base De Données
      data.forEach((doc) => {
        // Structuration de ma donnée réceptionnée
        const time = new Timer(doc.data().time);

        // Envoie de ma donnée dans mon tableau [timesArrays]
        timesArray.push(time);
      });

      res.send(timesArray);
    }
  } catch (error) {
    // Je retourne un message d'erreur en console en cas de problème et de non réception de ma données
    res.status(400).send(error.message);
  }
};

// Export de nos modules
module.exports = {
  addTimer,
  getAllTimer,
};
