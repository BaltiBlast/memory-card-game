// 1. Je créer un tableau qui contiendra toutes les informations des mes cartes.
// Les informations des cartes seront stockées dans des {objets} que nous dupliqueront ensuit.
const cardArray = [
  { name: "arthur", img: "images/arthur.jpg" },
  { name: "arthur", img: "images/arthur.jpg" },
  { name: "blaise", img: "images/blaise.jpg" },
  { name: "blaise", img: "images/blaise.jpg" },
  { name: "dame_du_lac", img: "images/dame_du_lac.jpg" },
  { name: "dame_du_lac", img: "images/dame_du_lac.jpg" },
  { name: "gauvain", img: "images/gauvain.jpg" },
  { name: "gauvain", img: "images/gauvain.jpg" },
  { name: "geuthnoc", img: "images/geuthnoc.jpg" },
  { name: "geuthnoc", img: "images/geuthnoc.jpg" },
  { name: "guenièvre", img: "images/guenièvre.jpg" },
  { name: "guenièvre", img: "images/guenièvre.jpg" },
  { name: "kadoc", img: "images/kadoc.jpg" },
  { name: "kadoc", img: "images/kadoc.jpg" },
  { name: "karadoc", img: "images/karadoc.jpg" },
  { name: "karadoc", img: "images/karadoc.jpg" },
  { name: "lancelot", img: "images/lancelot.jpg" },
  { name: "lancelot", img: "images/lancelot.jpg" },
  { name: "leodagan", img: "images/leodagan.jpg" },
  { name: "leodagan", img: "images/leodagan.jpg" },
  { name: "loth", img: "images/loth.jpg" },
  { name: "loth", img: "images/loth.jpg" },
  { name: "merlin", img: "images/merlin.jpg" },
  { name: "merlin", img: "images/merlin.jpg" },
  { name: "perceval", img: "images/perceval.jpg" },
  { name: "perceval", img: "images/perceval.jpg" },
  { name: "yvain", img: "images/yvain.jpg" },
  { name: "yvain", img: "images/yvain.jpg" },
];

// 2. Je créer deux tableaux de "chaîne de caractère" ( strings ) que j'utiliserai en cas de réussite ou d'échec.
// Les messages seront séléctionnés aléatoirement selon le résultat du joueur
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