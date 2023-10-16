/**
 * Función que retorna el valor de una carta
 * @param {string} card Ejem: A1, A2
 * @returns {number} retorna el valor numerico de la carta
 */
const getValueFromCard = (card) => {
  // Extraer el número de la card sin contar la letra
  let value = card.slice(0, -1);
  // Si el value es un numero lo retorno caso contrario retorno 11 o 10
  return !isNaN(value) ? Number(value) : value === "A" ? 11 : 10;
};

// Exportación con Renombramiento
export {getValueFromCard as getValFromCard}