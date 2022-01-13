// ------------------------------------------------------------------------------------------------------------ //
// Ressources utilisées sur cette page

// Type de variable :
// let -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/let
// var -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/var
// const -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/const
// -----
// Conditionnel -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/if...else
// -----
// .addEventListener() -> https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// "DOMContentLoaded" -> https://developer.mozilla.org/fr/docs/Web/API/Window/DOMContentLoaded_event
// .getElementById() -> https://developer.mozilla.org/fr/docs/Web/API/Document/getElementById
// .slice() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
// .forEach() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// .createElement() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
// .classList -> https://developer.mozilla.org/fr/docs/Web/API/Element/classList
// .replace() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// .setAttribute -> https://developer.mozilla.org/fr/docs/Web/API/Element/setAttribute
// .getAttribute() -> https://developer.mozilla.org/fr/docs/Web/API/Element/getAttribute
// .appendChild() -> https://developer.mozilla.org/fr/docs/Web/API/Node/appendChild
// .querySelectorAll() -> https://developer.mozilla.org/fr/docs/Web/API/Document/querySelectorAll
// .querySelector() -> https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
// .add() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Set/add
// .push() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push
// .setTimeout() -> https://developer.mozilla.org/fr/docs/Web/API/setTimeout
// .setInterval() -> https://developer.mozilla.org/en-US/docs/Web/API/setInterval
// .reload() -> https://developer.mozilla.org/fr/docs/Web/API/Location/reload
// .alert() -> https://developer.mozilla.org/fr/docs/Web/API/Window/alert
// .get() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Functions/get
// .then() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
// await -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Operators/await
// console.log() -> https://developer.mozilla.org/fr/docs/Web/API/Console/log
// try / catch -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/try...catch
// -----
// async function -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function
// function() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function
// array -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
// Interpolation de variable -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals

// ------------------------------------------------------------------------------------------------------------ //
// -- DEBUT DE NOTRE SCRIPT -- //

// Nous allons commencer notre script en englobant sa totalité dans un "addEventListener" en utilisant "DOMContentLoaded".
// Ce qui nous permettra de stipuler à notre fichier HTML, que nous attendrons qu'il soit chargé et vérifié dans sa totalité avant de pouvoir accéder à nos scripts.
document.addEventListener("DOMContentLoaded", () => {
  // ------------------------------------------------------------------------------------------------------------ //
  // -- VARIABLES FRONT -- //

  // Nous selectionons la <div> HTML qui contiendra notre plateau de jeu grace à un .querySelector() en spécifiant sa class=".memory__game-grid"
  const grid = document.querySelector(".memory__game-grid");

  // Les tableaux :
  // [cardsWon] contiendra chaque paire de carte gagnante que l'utilisateur découvrira
  const cardsWon = [];
  // [cardsChosen] contiendra les cartes 2 cartes séléctionnées par l'utilisateur
  var cardsChosen = [];
  // [cardsChosenId] contiendra l'id des 2 cartes séléctionnées par l'utilisateur
  var cardsChosenId = [];

  // "timeLeft" contient le temps limite dont le joueur dispose pour finir la partie
  var timeLeft = 180;

  // -- VARIABLE API -- //
  // API_GET_TIMES contient notre url pour récupérer les temps stockés en Base De Donnée
  const API_GET_TIMES = "http://localhost:8080/api/times";
  // API_POST_TIME contient notre url pour envoyer les temps en Base De Donnée
  const API_POST_TIME = "http://localhost:8080/api/time";

  // ------------------------------------------------------------------------------------------------------------ //
  // -- ASYNCHRONE FUNCTION -- //

  // Nous déclarons une async function() afin de récupérer les temps en Base De Donnée.
  // Nous les disposons au sein de la modal au lancement de l'application afin d'y afficher les scores.
  async function gameInitialisation() {
    // Nous déclarons une variable qui contiendra les données que nous renvoie notre Base De Donnée ( Les meilleures temps )
    var bestTimesArray = [];

    // ici, nous utilisons l'opérateur "await" afin de dire à notre function, que nous attendons une réponse de la Base De Donnée avant de continuer notre code.
    // .get est utilisé pour questionner notre URL d'API
    // .then pour traiter la réponse de cette dernière. Si il y a une réponse, nous stockons les données renvoyées dans "bestTimesArray". Sinon, nous affichons un message d'érreur en console.
    await axios
      .get(API_GET_TIMES)
      .then((response) => {
        bestTimesArray = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
    // Nous rédcupérons l'element HTML <ul> qui contient l'id "best-timer" grace à notre getElementById() et le stockons dans la variable "scoresContainer"
    const scoresContainer = document.getElementById("best-timers");

    // scoreClassement contiendra la position du joueur dans le classement. Nous l'initialision à 1 afin qu'il n'y ai pas de décalage au moment de l'affichage. (1 , 2 , 3)
    // Si nous l'avions initalisé à 0, le joueur ayant le meilleur score autait eu la position 0. (0, 1, 2)
    let scoreClassement = 1;

    // Nous ouvrons une condition afin de gérer notre affichage des scores en mesurant la longueur de notre tableau avec ".length"
    // SI bestTimesArray que nous renvoie notre Base De Donnée est vide, alors nous afficherons la varaible "noScores" qui contient notre balise HTML <li> ainsi que notre message
    // SINON, nous trions les scores que notre Base De Donnée nous à renvoyé, stockés dans notre variable "bestTimesArray" avec un .sort()
    // .sort nous permet de trier les résultats par ordre croissant.
    if (bestTimesArray.length === 0) {
      // Container du message si aucun score n'est enregistré
      var noScores = `<li>Aucun record enregistré, deviens le nouveau roi de Bretagne !</li>`;
      // Nous injectons dans notre container le message si aucun score n'est enregistré
      // container + inneHTML + le contenue à afficher (noScores)
      scoresContainer.innerHTML = noScores;
    } else {
      // tri croissant
      bestTimesArray.sort((a, b) => {
        return a.time - b.time;
      });

      // Nous utilisons .forEach() sur notre tableau afin de spécifier que nous voulons que l'action qu'il contient se répète autan de fois qu'il y a d'élément dans le tableau.
      //  ATTENTION, seul les 3 meilleurs score nous intérésse, nous utilisons donc un .slice() afin d'arreter son execution au troisième résultat affiché.
      bestTimesArray.slice(-3).forEach((_t) => {
        // A chaque fois que notre boucle forEach se répètera, cette dernière executera ce code :

        // Nous aurions pu procéder de manière plus classique avec un .createElement() afin de générer notre balise HTML <li>
        // Ici, nous faisons le choix de l'interpolation de variable afin de conserver un code lisible, court et explicite.
        // L'interpolation de variable nous permet de mélanger du text ainsi que des valeurs stockés dans des variables.
        // notre variable content contient donc : Une balise HTML <li>(position dans le classement) + (le temps)</li>
        let content = `<li>${scoreClassement++}# ${_t.time}s</li>`;

        // Au même titre que notre message si il n'y a aucun score, nous injectons à son tour, les résultats stockées dans notre Base De Donnée. Nous procéderons de la même manière
        // container + innerHTML + contenue à afficher (notre variable content)
        scoresContainer.innerHTML += content;
      });
    }
  }

  // Cette fonction est très similaire à celle qui reçoit les temps enregistrés en Base De Donnée.
  // Il s'agit d'une fonction asyncrone disposant d'un await.
  async function postScores() {
    // Afin d'envoyer la bonne valeur à notre Base de Donnée, nous stockons dans une variable le temps dont le joueur dispose pour finir la partie
    // (180secondes, soit 3 min) - (moins) le temps qu'il lui restait au moment ou il aura terminé sa partie.
    var resultTime = 180 - timeLeft;

    // Nous passons à notre POST l'URL sur laquelle nous souhaitons envoyer notre temps sous forme d'{objet} contenant un index, suivi de sa valeur exemple : {index : valeur}
    // Puis nous attendons la réponse et affichons son status du résultat.
    await axios.post(API_POST_TIME, { time: resultTime }).then(
      (response) => {
        // Le temps est enregistré, nous logons la réponse de la Base De Donnée
        console.log(response);
      },
      (error) => {
        // Le temps ne s'est pas enregistré, nous logons le message d'erreur
        console.log(error);
      }
    );
  }

  // ------------------------------------------------------------------------------------------------------------ //
  // INITIALISATION

  // Ici, nous utilisons la function() gameInitialisation() rangée dans notre fichier utils.js puis l'executons avec les parenthèse. nomDeLaFonction()
  gameInitialisation();

  // ------------------------------------------------------------------------------------------------------------ //
  // -- LAUNCH GAME -- //

  // Ici, nous utilisons la function() buttonStartingGame() rangée dans notre fichier utils.js et lui passons en paramètre notre function (gameStart) qui lancera notre partie.
  buttonStartingGame(gameStart);

  // ------------------------------------------------------------------------------------------------------------ //
  // -- RENDU ALEATOIR DU PLATEAU DE JEU --  //

  // Ici, nous utilisons la function() randomiserCards() rangée dans notre fichier utils.js afin de dispacher les cartes de manière aléatoire suçr notre plateau
  // en lui passant en paramètre, notre tableau contenant les cartes
  randomiserCards(cardArray);

  // ------------------------------------------------------------------------------------------------------------ //
  // -- INNITIALISATION DE LA PARTIE -- //

  // Notre function gameStart contient toutes functions et code nécessaire pour le déroulement d'une partie. Regardons de plus près
  function gameStart() {
    // Quand notre partie se lance, nous remplaçons la class CSS de notre modal afin de la faire disparaître et avoir totalement accès à notre plateau de jeu.
    // Nous selectionons notre <div> avec la class="memory__game-modal" avec un .querySelector, puis utilisons .classList pour spécifier que nous allons .replace sa class, par une autre.
    document
      .querySelector(".memory__game-modal")
      .classList.replace("memory__game-modal", "memory__game-modal-display");

    // ------------------------------------------------------------------------------------------------------------ //
    // -- GENERATION DU PLATEAU DE JEU -- //
    function createBoard() {
      // Les boulces for() s'execute autant de fois que nécessaire grace aux conditions que nous lui fournissons.
      // ATTENTION si les conditions sont mauvaises, bonjour la boucle infinie ! Personne ne veut voir son navigateur pleurer, un bon développeur ne fait pas ça !

      // Tant que " i " est inférieur à la longueur de mon tableau contenant mes cartes (cardArray), alors cette boucle continuera de s'executer.
      for (let i = 0; i < cardArray.length; i++) {
        // A chaque passage de la boucle for()

        // Je créer une balise <img>
        let card = document.createElement("img");

        // J'attribue à ma balise <img> un "src" contenant le chemin d'une image
        card.setAttribute("src", "./assets/images/point-interrogation.png");

        // J'attribue de manière progressive un "data-id" à chacune de mes balises <img>
        // A chaque fois que ma boucle for() se répètera, notre variable "i" délcarer dans sa condition s'incrémentera de 1 avec "++"
        // Exmple i = 0; i++; alors i = 1
        card.setAttribute("data-id", i);

        // J'attribue à ma balise <img> une class="memory__game-img-size" afin de redimensionner leur tailles.
        // Les images faisant toutes la même taille, nous pouvons nous permettre ce genre de pratique.
        card.setAttribute("class", "memory__game-img-size");

        // J'ajoute un .addEventListener() sur ma balise afin d'y ajouter un événement de type "click" qui executera ma function() "flipCard". (Function déclaré un peu plus bas dans le code, nous allons y arriver !)
        card.addEventListener("click", flipCard);

        // J'injecte au sein de mon HTML ma balise <img> avec toutes ses informations.
        // "grid" est ma variable qui contient la <div> parent de toutes mes cartes, .appendChild() nous sert ici à injecter dans notre HTML, au seins de notre <div> parent, chacun des carte générer par notre boucle for()
        grid.appendChild(card);
      }
    }

    // ------------------------------------------------------------------------------------------------------------ //

    // -- VERIFICATION DES CARTES SELECTIONNEES -- //
    function checkForMatch() {
      // Je récupère toutes mes balises <img> avec .querySelectorAll(). Tout comme le .querySelector(), ce dernier nous permet, dans notre cas de récupérer la totalité des balises <img> de notre code HTML
      let cards = document.querySelectorAll("img");

      // Je stock dans une variable l'id de ma première carte selectionné au sein du tableau "cardsChosenId"
      const optionOneId = cardsChosenId[0];

      // Je stock dans une variable l'id de ma deuxième carte selectionné au sein du tableau "cardsChosenId"
      const optionTwoId = cardsChosenId[1];

      // -- LA CONDITION PARTIE 1 - DEBUT -- //
      // Si l'id de ma première carte correspond à l'id de ma deuxième carte alors//
      if (cardsChosen[0] === cardsChosen[1]) {
        // J'execute ma function parWin rangée dans mon fichier utils.js qui renvoie un doux message pour féliciter le joueur.
        // Je lui pase en paramètre le tableau qui contient toutes mes gentilles phrase rangé dans le fichier data.js
        pairWin(arrayOfGlory);

        // Une fois les cartes vérifiées et validées, j'ajoute une class="memory__game-img-found" à leurs balises <img> afin de les faire disparaitre de notre grille.
        cards[optionOneId].classList.add("memory__game-img-found");
        cards[optionTwoId].classList.add("memory__game-img-found");

        // PUIS, j'ajoute nos deux carte au sein de notre tableau [cardsWon] (déclarer dans nos variable en haut de script) avec un .push()
        // .push() nous permet ici de spécifier un tableau dans lequel nous souhaitons pousser de nouvelle donné.
        // Un tableau (cardsWon) + .push() et ce qu'on souhaite y pousser .push(cardsChosen)

        cardsWon.push(cardsChosen);

        // CONDITION DE VICTOIRE
        // SI notre tableau cardsWon, fait une longueur de 14, alors j'execute ma function() postScores() afin d'enregistrer le résultat en Base De Donnée
        // PUIS j'execute une alerte afin de prévenir le joueur qu'il a gagner
        // PUIS j'actualise la page afin de réinitialiser l'application et y afficher le score dans la modal
        if (cardsWon.length === 14) {
          postScores();
          alert("C'EST UNE VICTOIRE !");
          window.location.reload();
        }
        // -- LA CONDITION PARTIE 1 - FIN -- //
      } else {
        // -- LA CONDITION PARTIE 2 - DEBUT -- //
        // Si mes cartes n'ont pas matchées entre elles, alors je leur attribut leur état innitial.
        cards[optionOneId].setAttribute(
          "src",
          "./assets/images/point-interrogation.png"
        );
        cards[optionTwoId].setAttribute(
          "src",
          "./assets/images/point-interrogation.png"
        );

        // Je leur ajoute à nouveau leur .addEventListener précédemment enlevé afin de ne pas pouvoir cliquer 2 fois sur la même carte.
        cards[optionOneId].addEventListener("click", flipCard);
        cards[optionTwoId].addEventListener("click", flipCard);

        // J'execute ensuit ma function() pairLoose() rangée dans mon fichier utils.js et lui passant le paramètre "arrayOfShame" qui contient de douce phrases qui encourage le joueur à ce surpasser !
        pairLoose(arrayOfShame);
        // -- LA CONDITION PARTIE 2 - FIN -- //
      }

      // Puis, je redéclare mes tableaux afin de pouvoir répéter l'opération.
      cardsChosen = [];
      cardsChosenId = [];
    }

    // ------------------------------------------------------------------------------------------------------------ //

    // -- RETOURNER UNE CARTE -- //
    function flipCard() {
      // Je récupère le "data-id" de la balise <img> selectionné avec .getAttribute() en spécifiant l'attribut que nous souahitons récupérer
      // Dans notre cas, nous souhaitons récupérer le "data-id" de notre balise HTML <img> selectionnée.
      // Nous utiliserons donc .getAttribute("data-id")
      let cardId = this.getAttribute("data-id");

      // Je pousse dans mon tableau "cardsChoosen" avec .push() le nom de la carte selectionnée
      cardsChosen.push(cardArray[cardId].name);

      // Je pousse dans le tableau "cardsChosenId" avec .push() le "data-id" de la balise HTML <img> selectionnée
      cardsChosenId.push(cardId);

      // J'attribue à la carte séléctionnée, la source de l'image qui lui correspond avec .setAttribute()
      this.setAttribute("src", cardArray[cardId].img);

      // Puis je supprime sont évenement click avec .removeEventListener() afin de ne pas pouvoir recliquer sur la carte déjà retournée.
      this.removeEventListener("click", flipCard);

      // Si mon tableau [cardsChoosen] délcaré en haut de script est égale à une longueur de 2, alors j'execute ma function checkForMatch() pour vérifier la correspondance des cartes contenues.
      // .setTimeout() ici nous permet de spécifier que notre function() checkForMatch() aura 0.5secondes pour s'executer.
      if (cardsChosen.length === 2) {
        setTimeout(checkForMatch, 500);
      }
    }

    // ------------------------------------------------------------------------------------------------------------ //

    // -- BARRE DE TEMPS -- //
    function countDownTimer() {
      // Nous selectionnons la dive qui contiendra notre bar de temps avec un .querySelector() en spécifiant sa class="memory__game-bar"
      const bar = document.querySelector(".memory__game-bar");
      // Nous déclarer une variable contenant le même temps que nous laissons à lutilisateur par partie, afin de synchroniser l'animation de la bar.
      let timeLimit = "180s";

      // Puis nous injectons au sein de sa class CSS la durée toatle de l'animation. Dans notre cas, 180 secondes.
      bar.style.animationDuration = timeLimit;

      // .setInterval() nous permet de répéter du code avec un intervale régulier en milisecondes.
      this.setInterval(() => {
        // Notre variable "timeLeft" déclarée en haut de notre script, verra sa valeur décrémenter de 1 toutes les secondes.
        timeLeft -= 1;

        // LA CONDITION //

        // SI notre variable timeLeft vient à être égale à 0, et que le joueur n'a pas terminé le plateau de jeu, alors la partie sera terminée, et il aura perdu.
        // Nous executons donc une alerte afin de le prévenir.
        if (timeLeft === 0) {
          // Message signant la fin de partie perdante
          alert("C'est cuisant comme échec..");

          // Nous rafraichissons la page afin que l'utilisateur reccommence une partie.
          window.location.reload();
        }
      }, 1000);
    }
    // J'execute ma function() createBoard() afin de générer mon plateau de jeu
    createBoard();

    // J'execute ma function() countDownTimer() afin de démarrer mon timer
    countDownTimer();
  }
});
