/**
 * Checks if a car is exceeding the speed limit.
 * @param {number} speed - The speed of the car.
 * @param {number} speedLimit - The speed limit.
 * @returns {boolean} True if the speed is above the speed limit, false otherwise.
 *
 * Example: isSpeeding(80, 70) should return true.
 */
export function isSpeeding(speed, speedLimit) {
  // Return true if speed is greater than speedLimit
  if (speed > speedLimit) {
    return true;
  } else {
    return false;
  }
}