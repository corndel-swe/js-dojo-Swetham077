/**
 * Prefix each product name with its category in an e-commerce store.
 * @param {string[]} products - The array of product names.
 * @param {string} category - The category to prefix.
 * @returns {string[]} The new array of products prefixed with the category.
 * @example
 * prefixCategory(['Laptop', 'Phone', 'Tablet'], 'Electronics'); // returns ['Electronics: Laptop', 'Electronics: Phone', 'Electronics: Tablet']
 */
export function prefixCategory(products, category) {
  // Use the map() method to prefix each product with the category
  const prefixedProducts = products.map(product => `${category}: ${product}`);
  // Return the new array of prefixed products
  return prefixedProducts;
}
