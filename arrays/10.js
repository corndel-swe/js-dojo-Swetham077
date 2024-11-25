/**
 * Get the last two names from the array.
 * @param {string[]} names - The array of names.
 * @returns {string[]} An array containing the last two names.
 * @example
 * getLastTwoNames(['Alice', 'Bob', 'Charlie', 'David', 'Eve']); // returns ['David', 'Eve']
 */
export function getLastTwoNames(names) {
  // TODO: Use the slice() method to get the last two elements of the array
  const lastTwoNames = names.splice(-2)
  // TODO: Return the new array containing the last two names
  return lastTwoNames
}
