// -- REACTION POUR BONNE PAIRE -- //
function pairWin(array) {
  document.querySelector(
    ".memory__game-reactions"
  ).innerHTML = `<p class="memory__game-reactions-positive">${
    array[Math.floor(Math.random() * array.length)]
  }</p>`;
}

// ------------------------------------------------------------------------------------------------------------ //

// -- REACTION POUR MAUVAISE PAIRE -- //
function pairLoose(array) {
  document.querySelector(
    ".memory__game-reactions"
  ).innerHTML = `<p class="memory__game-reactions-negativ">${
    array[Math.floor(Math.random() * array.length)]
  }</p>`;
}

// ------------------------------------------------------------------------------------------------------------ //

