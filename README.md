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

![add-project](https://user-images.githubusercontent.com/49390735/149326010-9e519776-dce7-4305-aa1a-06a8ed8f6658.png)

- Donnons un nom à notre projet

![name-project](https://user-images.githubusercontent.com/49390735/149326698-be3115b8-9184-4c81-a93a-95899ccf051f.png)

- On désactive les Google analytics, nous ne souhaitons pas déployer notre site aujourd'hui, ils ne seront donc pas utiles !

![google-analytics-off](https://user-images.githubusercontent.com/49390735/149326781-f8a5e8a9-0bad-4507-a437-2a61fbc04ed7.png)

- Et op, on créer le projet.

Ayez ? C'est fait ? On perd pas le fil alors ! La suite est par là :

- Ajoutons firebase à notre projet web en cliquant sur l'icone " </> "

![add-firebase](https://user-images.githubusercontent.com/49390735/149326849-981a3807-c4c2-489f-a3f7-a5ff98f7da76.png)

- Nous lui attribuons un nom ( dans mon cas, j'utilise le même que mon projet )

![name-web-project](https://user-images.githubusercontent.com/49390735/149326922-cec2ebe5-6c9f-4b96-b253-9e60e2c18780.png)

Oh ? On dirait bien que nous avons nos informations de connection du projet ! :yellow_heart:
Vous pouvez les copier coller sur un bloc note si vous voulez. Mais nous pouvons également y accéder plus tard à travers les options du projet, pas d'inquiètude :blush:

![connexion-information](https://user-images.githubusercontent.com/49390735/149327060-ceb4cebd-0f84-44b8-89df-5584334127f5.png)

## On commence le code ? Ca vous tente ? Allez !
### Structuration
On va commencer par structurer notre projet, on aime quand tout est bien rangé !

Les étapes : 
1) A la racine du projet :
- Créons notre ".env" qui contiendra nos informations de connexion à la BDD et de notre server local
- Créons "server.js" qui nous permettra de lancer notre server local afin de tester nos requêtes 
- Créons un dossier "back-end" dans notre projet

2) Dans le dossier Back-end :
- Ajoutons les dossiers "controllers", "models" et "routes"
- Dans le dossier "controllers", nous aurons les controllers
- Dans le dossier "models" les models ( évidemment )
- Dans le dossier "routes" .... Roulement de tambours... Les routes ! Tu es perspicace, j'aime ça 🔥
- Ajoutons "db.js" qui importera nos données de connexion ainsi que les données pour notre server local
- Puis, "config.js" dans lequel nous déclarons nos variables qui contiendrons nos informations de connexion de BBD + server local

Hey ? Tu sais quoi ? J'ai une bonne nouvelle. Si tu es arrivé jusqu'ici, tu n'auras plus qu'à faire

> `$ npm run start`

Dans ton terminal pour lancer ton server local !
Pas d'erreur de message d'erreur ? Alors félicitation ! Nous venons d'initialiser notre back-end et de lancer notre server en local 😀

## Jeu et instructions !

#### Règles
Jeu de mémory card, le principe étant d'avoir un plateau de jeu avec toutes nos cartes face cachées. Le but ? Que la personne deriière son écran puisse trouver toutes les paires identiques !

Nous disposons de 14 cartes différentes, pour un plateau total de 28 cartes.

Si les cartes séléctionnées par le joueur son identique, alors nous les enlevons de notre plateau de jeu.
Si les cartes séléctionnées par le joueur sont différente, alors nous les retournons face caché.

Si toutes les cartes ont étaient découvertes, alors la partie est gagnée ! 🥳
En cas contraire.. Le joueur aura perdu.. Et oui ! C'est la vie ! Mais rien ne l'empêche de reccomencer, autan de fois qu'il le souhaite 🥰

Le joueur disposera de 3 min à chaque partie afin de pouvoir tenter de réaliser un nouveau record, souhaitons lui bonne chance 😺 !

### Jeu avant son lancement sans scores encore enregistré

![before-start-game](https://user-images.githubusercontent.com/49390735/149343207-502d26d2-378e-49e9-8099-c98e04820bde.png)

### Jeu avant son lancement avec des scores enregistrés

![before-start-game-with-scores](https://user-images.githubusercontent.com/49390735/149344048-0bc35537-9682-429c-96fd-7bf63336b0ba.png)

### Plateau de jeu à son lancement

![game-started](https://user-images.githubusercontent.com/49390735/149343388-84ccb61d-29ce-41be-b431-37c51c91ef3c.png)

### Plateau de jeu pendant la partie

![game-ongoing](https://user-images.githubusercontent.com/49390735/149343494-4050c804-ea60-45cc-a06d-9079a8265c19.png)

### En cas de victoire

![game-victory](https://user-images.githubusercontent.com/49390735/149346028-1b39272c-35bf-4436-b45c-86fb051a8124.png)

### En cas de défaite

![Uploading game-defeat.png…]()

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
