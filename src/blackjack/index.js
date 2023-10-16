import { getCards, requestCard, getValFromCard, enableButtons } from "./functions";

document.addEventListener("DOMContentLoaded", () => {
  events();
});
const getElement = (id, objectElement = document) =>
  objectElement.querySelector(id);
const {
  btnOrder,
  btnNew,
  btnStop,
  playerPointSelector,
  pcPontSelector,
  playerCardContainer,
  pcCardContainer,
} = {
  btnOrder: getElement("[data-btn-pedir]"),
  btnNew: getElement("[data-btn-nuevo]"),
  btnStop: getElement("[data-btn-detener]"),
  playerPointSelector: getElement("[data-puntos-jugador]"),
  pcPontSelector: getElement("[data-puntos-pc]"),
  playerCardContainer: getElement("[data-cartas-jugador]"),
  pcCardContainer: getElement("[data-cartas-pc]"),
};

// Función que hace la accion de jugar y retorna un puntaje
const play = (score, scoreElement, cardContainerELement) => {
  // Obteniedo el valor de la carta
  const card = requestCard(cardArray);
  // Sumando puntaje
  score += getValFromCard(card);
  // Si el puntaje pasa de 21 se quitan los botones
  if (score > 21 || score === 21) enableButtons(false, btnStop, btnOrder,);
  // Mostrando el valor de la carta
  scoreElement.textContent = score;
  // Creando el elemento carta
  const img = document.createElement("IMG");
  img.classList.add("blackjack__cartas");
  img.src = `./assets/cartas/${card}.png`;
  // img.src = new URL(`./assets/cartas/${card}.png`, import.meta.url).href;
  cardContainerELement.append(img);

  return score;
};
// Función que realiza la accion de jugar para el PC
const playPc = () => {
  do {
    pcScore = play(pcScore, pcPontSelector, pcCardContainer);
    if (playerScore > 21) break;
  } while (pcScore < playerScore);

  setTimeout(() => {
    if (pcScore === playerScore) {
      alert("Empate");
    } else if (pcScore > 21) {
      alert("Jugador Gana");
    } else {
      alert("Pc Gana");
    }
  }, 100);

  enableButtons(false, btnStop, btnOrder,);
};
// Método par limpiar los elemetos del HTML
const deleteItemsFrom = (container) => (container.innerHTML = "");
// Función que inicia un nuevo juego
const newGame = () => {
  playerPointSelector.textContent = 0;
  pcPontSelector.textContent = 0;
  playerScore = 0;
  pcScore = 0;
  cardArray = getCards();
  deleteItemsFrom(playerCardContainer);
  deleteItemsFrom(pcCardContainer);
  enableButtons(true, btnStop, btnOrder,);
};
// Eventos de los elementos
const events = () => {
  btnOrder.addEventListener("click", () => {
    playerScore = play(playerScore, playerPointSelector, playerCardContainer);
    if (playerScore > 21 || playerScore == 21) playPc();
  });
  btnStop.addEventListener("click", () => {
    playPc();
  });
  btnNew.addEventListener("click", () => {
    newGame();
  });
};

// Variables
let cardArray = getCards();
let playerScore = 0;
let pcScore = 0;
