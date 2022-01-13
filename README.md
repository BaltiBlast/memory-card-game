# Memory Card Game !

Aujourd'hui on part sur un projet for() sympathique ! ( "for()" ahahah. T'as compris hein ? :relieved: )

Création d'un petit jeu de Memory Card sur le thème de Kaamelott entièrement en JS Vanilla
Tout le code est commenté pour que tu puisses comprendre apprendre dans les meileures conditions.

Mais en cas de besoin.. <br>
Toute la documentation des ressources utilisées dans ce projet sont disponible à la fin de ce Readme, alors n'hésitez pas à les consulter en cas de besoin ! :wink:

## Mise en place de notre Back

Nous allons enregistrer les temps de nos fabuleux joueurs. Jouer c'est sympa, si on y rajoute un peu de compétition, ça peut être intéréssant ! :smiling_imp:

### Installation de nos packages

Nous pouvons ouvrir un terminal ! ( ctrl + alt + t Tu me remerciera plus tard :smirk: )

Les étapes à suivre :

- On se déplace dans notre dossier html situé sur notre bureau

> `$cd Bureau/html`

- On y est ? Créons notre dossier qui contiendra tout notre projet !

> `$ mkdir nomDeMonProjet`

- Et on se déplace dans le dossier qui contiendra dans notre projet :blush:

> `$cd nomDeMonProjet`

Puis nous copie collerons les lignes suivantes :

> `$npm install express firbase dotenv cors body-parser`

- Express nous permettra de gérer notre back pour la communication avec la BDD (Base De Données)
- Firebase est le package de notre BDD créé sur Firebase
- dotenv pourra nous permettre d'interpreter notre fichier ".env" dans lequel nous stockerons nos informations de connexion à notre BDD
- cors s'occupera des authorisations de transfert entre nos échanges de données
- body-parser nous permettra d'analyser le corps de nos requêtes entrantes

> `$npm install nodemon --save-dev`

- nodemon nous servira à relancer automatiquement notre server local à chaque fois que nous enregistrons une modification au lieu de le relancer manuellement à chaque modifications
- "-dev" nous permet de spécifier que nous souhaite l'utiliser uniquement en développement. En cas de déploiement, nous ne souhaitons pas le mettre en place !

Les ressources sont prêtes ? Tu es prêt également ? Créons la base ! :heart_eyes:

### Firebase

Allez op ! On va sur Firebase : https://firebase.google.com/

##### Connexion

Pour commencer, on va se connecter (ou s'inscrire) directement avec notre compte google ! Les choses sont biens faites n'est-ce pas ? :innocent:
Firebase est un service gérer par Google, autant te dire que ça y va fort :punch:
![signin-firbase](https://user-images.githubusercontent.com/49390735/149325840-5af41617-f2c8-4c28-b604-27758dce494a.png)

#### Le projet

Nous allons cliquer sur le petit onglet "Go to console" et créer notre petit projet ~

Suivons les étapes suivantes :

- Ajouter un projet
- Donnons un nom à notre projet
- On désactive les Google analytics, nous ne souhaitons pas déployer notre site aujourd'hui, ils ne seront donc pas utiles !
- Et op, on créer le projet.

Ayez ? C'est fait ? On perd pas le fil alors ! La suite est par là :

- Ajoutons firebase à notre projet web en cliquant sur l'icone " </> "
- Nous lui attribuons un nom ( dans mon cas, j'utilise le même que mon projet )

Oh ? On dirait bien que nous avons nos informations de connection du projet ! :yellow_heart:
Vous pouvez les copier coller sur un bloc note si vous voulez. Mais nous pouvons également y accéder plus tard à travers les options du projet, pas d'inquiètude :blush:

## Documentation des ressources utiliées

### <ins>Elements déclaratifs</ins>

- let : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let
- var : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var
- const : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const
- array : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
- function() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function

### <ins>Function pour l'asynchrone</ins>

- async function : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
- await : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await
- .get() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/get
- .then() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

### <ins>Les conditions</ins>

- if...else : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
- try...catch : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch

### <ins>Functions Javascript</ins>

- .addEventListener() : https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
- "DOMContentLoaded" : https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
- .getElementById() : https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
- .slice() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
- .forEach() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- .createElement() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
- .classList : https://developer.mozilla.org/fr/docs/Web/API/Element/classList
- .replace() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace
- .setAttribute : https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
- .getAttribute() : https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
- .appendChild() : https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
- .innerHTML : https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML
- .querySelectorAll() : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
- .querySelector() : https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
- .add() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/add
- .push() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push
- .setTimeout() : https://developer.mozilla.org/fr/docs/Web/API/setTimeout
- .setInterval() : https://developer.mozilla.org/en-US/docs/Web/API/setInterval
- .reload() : https://developer.mozilla.org/fr/docs/Web/API/Location/reload
- .Math.random() : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
- .Math.floor : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
- .alert() : https://developer.mozilla.org/fr/docs/Web/API/Window/alert
- console.log() : https://developer.mozilla.org/fr/docs/Web/API/Console/log
