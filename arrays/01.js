/**
 * Calculate the total cost of the first two items in the array.
 * @param {number[]} prices - The array of prices.
 * @returns {number} The sum of the first and second price.
 * @example
 * startSum([12.99, 23.45, 34.50, 45.99, 56.75]); // returns 36.44
 */
export function startSum(prices) {
  // Get the first element from the array
  const firstPrice = prices[0];
  // Get the second element from the array
  const secondPrice = prices[1];
  // Return the sum of the first and second elements
  return firstPrice + secondPrice;
}