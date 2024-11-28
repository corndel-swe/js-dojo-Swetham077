/**
 * Finds the sum of all numbers smaller than the given input.
 *
 * @param {number} input - The input number.
 * @returns {number} - The sum of all numbers smaller than the input.
 *
 * @example
 * // returns 10
 * sumSmallerNumbers(5);
 */
export function sumSmallerNumbers(input) {
  // Initialize a variable to hold the sum
  let sum = 0;
  
  // Use a for loop to iterate from 1 to one less than the input number
  for (let i = 1; i < input; i++) {
    // Add each number to the sum variable
    sum += i
  }
  
  // Return the sum
  return sum;
}
