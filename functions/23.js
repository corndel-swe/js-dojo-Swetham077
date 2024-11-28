/**
 * Determines the season based on the month number.
 * @param {number} month - The month number (1 for January, 12 for December).
 * @returns {string} The season ('Winter', 'Spring', 'Summer', 'Autumn').
 *
 * Example: determineSeason(4) should return 'Spring'.
 */
export function determineSeason(month) {
  // Return the season based on the month number
  if (month === 12 || month === 1 || month === 2) {
    return 'Winter';
  } else if (month >= 3 && month <= 5) {
    return 'Spring';
  } else if (month >= 6 && month <= 8) {
    return 'Summer';
  } else if (month >= 9 && month <= 11) {
    return 'Autumn';
  } else {
    return 'Invalid month';
  }
}
  // Winter: December (12), January (1), February (2)
  // Spring: March (3), April (4), May (5)
 
  // Summer: June (6), July (7), August (8)
  // Autumn: September (9), October (10), November (11)

