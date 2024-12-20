/**
 * Add a hashtag to each trending topic on a social media app.
 * @param {string[]} topics - The array of trending topics.
 * @returns {string[]} The new array of topics with hashtags.
 * @example
 * addHashtags(['coding', 'javascript', 'webdev']); // returns ['#coding', '#javascript', '#webdev']
 */
export function addHashtags(topics) {
  // TODO: Use the map() method to add a hashtag to each topic
  const newtopics = topics.map(topics => '#' + topics)
// TODO: Return the new array of topics with hashtags
return newtopics
}
