/**
 * Determines the price of a movie ticket based on age and membership status.
 * @param {number} age - The age of the person.
 * @param {boolean} isMember - True if the person is a member.
 * @returns {number} The price of the movie ticket.
 *
 * Example: ticketPrice(17, false) should return 8.
 */
export function ticketPrice(age, isMember) {
  let price;

  if (age < 18) {
    price = 8; // Children
  } else if (age >= 65) {
    price = 6; // Seniors
  } else {
    price = 10; // Adults
  }

  if (isMember) {
    price -= 2; // Members get a $2 discount
  }

  return price;
}
