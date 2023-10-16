/**
 * Función para habilitar y deshabilitar botones
 * @param {Boolean} value Ejem: true 
 * @param  {...HTMLElement} arr Ejem: btnElement
 */
export const enableButtons = (value, ...arr) =>
  arr.forEach((element) => (element.disabled = !value));