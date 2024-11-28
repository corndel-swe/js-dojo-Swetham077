/**
 * Determines the letter grade based on a numeric score.
 * @param {number} score - The numeric score.
 * @returns {string} The letter grade.
 *
 * Example: determineGrade(85) should return 'B'.
 */
export function determineGrade(score) {
  // TODO: Determine the letter grade based on the score
  if (score >=90 && score <=100) {
    return A
  }
  // 90-100: 'A'
  // 80-89: 'B'
  if (score >=80 && score <=89) {
    return B
  }
  // 70-79: 'C'
  if (score >=70 && score <=79) {
    return C
  }
  // 60-69: 'D'
  if (score >=60 && score <=69) {
    return D
  }
  // Below 60: 'F'
  if (score < 60) {
    return F
  }
}
