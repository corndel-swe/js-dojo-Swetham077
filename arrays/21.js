/**
 * Add a new product price, remove prices above 100, and double the remaining prices.
 * @param {number[]} prices - The array of product prices.
 * @param {number} newPrice - The new product price to add.
 * @returns {number[]} The new array of modified prices.
 * @example
 * updatePrices([30, 120, 50, 200], 45); // returns [60, 100, 90]
 */
export function updatePrices(prices, newPrice) {
  // TODO: Use the push() method to add the new price to the array
  prices.push('newPrice')
  // TODO: Use the filter() method to keep prices 100 or below
  const filteredPrices = prices.filter(price => price <= 100)
  // TODO: Use the map() method to double each remaining price
  const doubledprices = filteredPrices.map(price => price * 2)
  // TODO: Return the new array of modified prices
  return doubledprices
}
