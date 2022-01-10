// Je stipule à mon fichier game.js, que je souhaite qu'il soit utilisable qu'à partir du moment ou notre document HTML est entièrement chargé et analysé.
// Pour celà, j'utilise un évenement "DOMContentLoaded". (voir Readme.md )
document.addEventListener("DOMContentLoaded", () => {
  cardArray.sort(() => 0.5 - Math.random());
  // -- MES VARIABLES -- //
  const grid = document.querySelector(".memory__game-grid");

  // Function créant mon tableau de jeu avec des cartes vierges
  function createBoard() {
    // Je boucle sur mon tableau "cardArray"

    // Tant que " i " est inférieur à la longueur de mon tableau, alors cette boucle continuera de s'executer.
    for (let i = 0; i < cardArray.length; i++) {
      // Je créer à chaque passage de la boucle une balise <img>
      let card = document.createElement("img");

      // J'attribue à chacunes de mes balises <img> un "src" contenant le chemin d'une image
      card.setAttribute("src", "./assets/images/point-interrogation.png");

      // J'attribue de manière progressive un "data-id" à chacune de mes balises <img>
      card.setAttribute("data-id", i);

      // J'attribue à chacunes de mes balises <img> une "class" portant le nom "img-size"
      card.setAttribute("class", "memory__game-img-size");

      // J'ajoute une évenemnt click sur chacunes de mes balises <img> qui executera la function "flipCard"
      // card.addEventListener("click", flipCard);

      //
      grid.appendChild(card);
    }
  }

  createBoard();
});
