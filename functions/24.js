/**
 * Determines if a given day is a weekday or weekend.
 * @param {string} day - The day of the week.
 * @returns {string} 'Weekday' if the day is Monday to Friday, 'Weekend' if the day is Saturday or Sunday.
 *
 * Example: dayType('Saturday') should return 'Weekend'.
 */
export function dayType(day) {
  // TODO: Return 'Weekday' for Monday to Friday, and 'Weekend' for Saturday and Sunday
  if (day === 'Monday' || day === 'Tuesday'|| day === 'Wednesday' || day === 'Thursday' || day ==='Friday') {
    return 'Weekday';
  } else if (day === 'Saturday' || day=== 'Sunday') {
    return 'Weekend'
  }
}
