const letters = ["C", "D", "H", "S"];
const specials = ["A", "J", "Q", "K"];
const numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10"];
/**
 * Función para crear las cartas.
 * @returns {Array<string>} Retorna las cartas generadas.
 */
export const getCards = () => [
  ...numbers.flatMap((i) => letters.map((j) => `${i}${j}`)),
  ...specials.flatMap((i) => letters.map((j) => `${i}${j}`)),
];


