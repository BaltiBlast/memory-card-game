// 1. Je créer un tableau qui contiendra toutes les informations des mes cartes.
// Les informations des cartes seront stockées dans des {objets} que nous dupliqueront ensuit.
const cardArray = [
  { name: "arthur", img: "assets/cards/arthur.jpg" },
  { name: "arthur", img: "assets/cards/arthur.jpg" },
  { name: "blaise", img: "assets/cards/blaise.jpg" },
  { name: "blaise", img: "assets/cards/blaise.jpg" },
  { name: "dame_du_lac", img: "assets/cards/dame_du_lac.jpg" },
  { name: "dame_du_lac", img: "assets/cards/dame_du_lac.jpg" },
  { name: "gauvain", img: "assets/cards/gauvain.jpg" },
  { name: "gauvain", img: "assets/cards/gauvain.jpg" },
  { name: "geuthnoc", img: "assets/cards/geuthnoc.jpg" },
  { name: "geuthnoc", img: "assets/cards/geuthnoc.jpg" },
  { name: "guenièvre", img: "assets/cards/guenièvre.jpg" },
  { name: "guenièvre", img: "assets/cards/guenièvre.jpg" },
  { name: "kadoc", img: "assets/cards/kadoc.jpg" },
  { name: "kadoc", img: "assets/cards/kadoc.jpg" },
  { name: "karadoc", img: "assets/cards/karadoc.jpg" },
  { name: "karadoc", img: "assets/cards/karadoc.jpg" },
  { name: "lancelot", img: "assets/cards/lancelot.jpg" },
  { name: "lancelot", img: "assets/cards/lancelot.jpg" },
  { name: "leodagan", img: "assets/cards/leodagan.jpg" },
  { name: "leodagan", img: "assets/cards/leodagan.jpg" },
  { name: "loth", img: "assets/cards/loth.jpg" },
  { name: "loth", img: "assets/cards/loth.jpg" },
  { name: "merlin", img: "assets/cards/merlin.jpg" },
  { name: "merlin", img: "assets/cards/merlin.jpg" },
  { name: "perceval", img: "assets/cards/perceval.jpg" },
  { name: "perceval", img: "assets/cards/perceval.jpg" },
  { name: "yvain", img: "assets/cards/yvain.jpg" },
  { name: "yvain", img: "assets/cards/yvain.jpg" },
];

// 2. Je créer deux tableaux de "chaîne de caractère" ( strings ) que j'utiliserai en cas de réussite ou d'échec.
// Les messages seront séléctionnés aléatoirement selon le résultat du joueur.
// Si 2 cartes identitques sont trouvées nous utiliserons le tableau [arrayOfGlory], sinon le tableau [arrayOfShame]
// (Un peu de sarcasme et d'autodérision ne fait pas de mal après tout !)

// Messages en cas de réussites
const arrayOfGlory = [
  "Bah tu vois quand tu veux !",
  "Aaaaah, bah quand même !",
  "C'est pas trop tôt..",
  "Je commençais presque à m'ennuyer par ici..",
  "Je l'avais vue depuis le début celle ci. Je dis ça comme ça..",
  "J'ai failli attendre !",
  "Hey pas mal ! Ca change de d'habitude..",
];

// Messages en cas d'échec
const arrayOfShame = [
  "C'est pas térrible..",
  "C'est rageant hein ? ",
  "MOUUUUAIS",
  "Tu penses vraiment t'en sortir comme ça ?",
  "Faut se remettre en question là par contre..",
  "Bon, va falloir songer à une reconvertion je pense",
  "Au fait je me disais... Non oublies.",
];