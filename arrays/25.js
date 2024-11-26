/**
 * Add a new score, remove scores below 50, and increase each remaining score by 20%.
 * @param {number[]} scores - The array of scores.
 * @param {number} newScore - The new score to add.
 * @returns {number[]} The new array of modified scores.
 * @example
 * updateScores([45, 55, 65, 75], 85); // returns [66, 78, 90, 102]
 */
export function updateScores(scores, newScore) {
  // Add the new score to the array
  scores.push(newScore);
  
  // Filter the scores to keep only those that are 50 or above
  const filteredScores = scores.filter(score => score >= 50);
  
  // Increase each remaining score by 20% using the formula: score * 1.2
  const increasedScores = filteredScores.map(score => score * 1.2);
  
  // Return the new array of modified scores
  return increasedScores;
}
