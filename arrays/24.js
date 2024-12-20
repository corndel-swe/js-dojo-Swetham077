/**
 * Add a new temperature reading, remove readings below 60, and convert each remaining reading to Celsius.
 * @param {number[]} tempsFahrenheit - The array of temperature readings in Fahrenheit.
 * @param {number} newTempFahrenheit - The new temperature reading to add.
 * @returns {number[]} The new array of modified temperatures in Celsius.
 * @example
 * updateTemperatures([59, 65, 72, 50], 68); // returns [18.3333, 22.2222, 20]
 */
export function updateTemperatures(tempsFahrenheit, newTempFahrenheit) {
  // TODO: Use the push() method to add the new temperature to the array
  tempsFahrenheit.push(newTempFahrenheit)
  // TODO: Use the filter() method to keep temperatures that are 60 or above
  const filteredTemps = tempsFahrenheit.filter(temp => temp >= 60)
  // TODO: Use the map() method to convert each remaining temperature to Celsius using the formula: (Fahrenheit - 32) * 5/9
  const convertedTemp = filteredTemps.map(temp => (temp - 32) * 5/9)
  // TODO: Return the new array of modified temperatures in Celsius
  return convertedTemp
}
