/**
 * Función que retorna una carta del arreglo de cartas
 * @param {Array<string>} cardArray Ejemplo: [AJ,1J,2J,3J,4J] (usar metodo getCards)
 * @returns {string} Retorna una carta aletoria de un arreglo de cartas
 */
export const requestCard = (cardArray) => {
  // Genera un numero aletorio entre 1 y 51
  const randomIndex = Math.floor(Math.random() * cardArray.length);
  // Extrae una carta con un indice aletorio y retorno
  return cardArray.splice(randomIndex, 1).pop();
};

// Exportacion por defecto
// export default requestCard;