/**
 * Calculates the total pay including overtime pay.
 * @param {number} hoursWorked - The total hours worked in a week.
 * @param {number} hourlyRate - The regular hourly rate.
 * @returns {number} The total pay including overtime.
 *
 * Example: totalPay(45, 20) should return 950.
 */
export function totalPay(hoursWorked, hourlyRate) {
  // Calculate regular pay for up to 40 hours
  const regularHours = Math.min(hoursWorked, 40);
  const regularPay = regularHours * hourlyRate;

  // Calculate overtime pay for hours above 40 at 1.5 times the regular rate
  const overtimeHours = Math.max(hoursWorked - 40, 0);
  const overtimePay = overtimeHours * hourlyRate * 1.5;

  // Return the total pay
  return regularPay + overtimePay;
}
