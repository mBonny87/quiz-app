/**
 * Removes duplicate objects from an array based on a specified property.
 * The uniqueness is determined by comparing the values of the specified property.
 * <T extends Record<string, unknown>>: This ensures that the generic type T must be an object
 * (record) with string keys. It provides a level of type safety for the objects in the array.
 *
 * @template T - The type of objects in the array.
 * @param {T[]} arr - The array of objects to filter.
 * @param {string} property - The property used to identify duplicates.
 * @returns {T[]} - An array containing only unique objects based on the specified property.
 */
export const removeDuplicatesByProperty = <T extends Record<string, unknown>>(
  arr: T[],
  property: string
) => {
  const uniqueMap = new Map();
  return arr.filter((obj) => {
    const propertyValue = obj[property] as string; // Type assertion to string
    if (!uniqueMap.has(propertyValue)) {
      uniqueMap.set(propertyValue, true);
      return true;
    }
    return false;
  });
};

/**
 * Shuffles the elements of an array in-place using the Fisher-Yates (Knuth) algorithm.
 * This function modifies the original array and returns the shuffled array.
 *
 * @template T - The type of elements in the array.
 * @param {T[]} array - The array to be shuffled.
 * @returns {T[]} - The shuffled array.
 */
export const shuffleArray = <T>(array: T[]): T[] => {
  let currentIndex = array.length,
    temporaryValue,
    randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};
