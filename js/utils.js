// ------------------------------------------------------------------------------------------------------------ //
// Ressources utilisées sur cette page
// -----
// function() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/function
// array -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array
// Interpolation de variable -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Template_literals
// -----
// .sort() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// .Math.random() -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// .Math.floor -> https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor
// .querySelector() -> https://developer.mozilla.org/fr/docs/Web/API/Document/querySelector
// .addEventListener() -> https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener
// -----
// innerHTML -> https://developer.mozilla.org/fr/docs/Web/API/Element/innerHTML

// ------------------------------------------------------------------------------------------------------------ //
// -- REACTION POUR BONNE PAIRE -- //

// Ici, nous déclarons une (function) qui nous permettra d'afficher un message de manière aléatoire si la personne qui joue trouve une paire de carte valide.
// Nous passons "array" dans le paramètre de notre function afin de spécifier que nous avons besoin d'un [tableau] (array) pour l'executer.
function pairWin(array) {
  // "querySelector" nous permet de cibler un element grace à son nom de "class" ou son "id". Dans notre cas, noous ciblons la balise HTML <div> qui contient la ( class="memory__game-reactions" )
  //  "querySelector" peut être également utilisé avec des "id"
  // innerHTML nous permet d'injecter au seins de notre HTML des éléments créés à partir du notre script JavaScript.
  // Puis, nous exerçons un Math.random sur le tableau que nous passerons en paramètre de notre function afin de choisir de manière aléatoire, un élément dans son tableau.
  // Nous utilisons " l'interpolation de variable" afin de pouvoir déclarer directement la balise ainsi que ce quelle contiendra.
  // De manière plus classique, nous aurions dû utiliser "createElement" afin de créer notre balise <p> ainsi qu'un "setAttribute" pour lui ajouter un attribut de type "class" suivi de son nom.
  document.querySelector(
    ".memory__game-reactions"
  ).innerHTML = `<p class="memory__game-reactions-positive">${
    array[Math.floor(Math.random() * array.length)]
  }</p>`;
}

// ------------------------------------------------------------------------------------------------------------ //
// -- REACTION POUR MAUVAISE PAIRE -- //

// Cette function est structuré est fonctionne exactemùent de la même manière que pour celle des bonnes réponse.
// Sa différence est que le message s'affichera en rouge grace à sa class.
function pairLoose(array) {
  document.querySelector(
    ".memory__game-reactions"
  ).innerHTML = `<p class="memory__game-reactions-negativ">${
    array[Math.floor(Math.random() * array.length)]
  }</p>`;
}

// ------------------------------------------------------------------------------------------------------------ //
// -- DÉMMARER UNE PARTIE -- //

// Cette (function) nous permet de lancer notre jeu en appuyant sur le bouton "start" que ce situe dans notre modal au lancement de l'application.
// Elle attend la (function) qui contient notre jeu en paramètre.
// Nous ajoutons un "addEventListener" de type "click". Ce qui aura pour effet, d'executer la function que nous lui passerons en paramètre.
// l'évenement "click" est un des nombreux événement possible avec "addEventListener". ( https://developer.mozilla.org/fr/docs/Web/API/EventTarget/addEventListener )
function buttonStartingGame(func) {
  document
    .querySelector(".memory__game-button-start")
    .addEventListener("click", func);
}

// ------------------------------------------------------------------------------------------------------------ //
// -- RENDU ALEATOIR DES CARTES -- //

// Cette function attends en paramêtre un tableau. Nous utiliserons celui de nos cartes, afin de les dispacher de manière aléatoire sur notre plateau à chaque nouvelle partie.
// .sort() nous permet de réaranger les éléments dans notre tableau avant des les séléctionner de manière aléatoire grace à notre Math.random.
function randomiserCards(array) {
  array.sort(() => 0.5 - Math.random());
}
