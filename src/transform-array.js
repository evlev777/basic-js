const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!arr instanceof Array) {
    throw Error('Not an array');
  }

  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }

  let result = [];

  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-next': {
        i++;

        break;
      }

      case '--discard-prev': {
        if (arr[i - 2] !== '--discard-next') {
          result.pop();
        }

        break;
      }

      case '--double-next': {
        if (arr[i + 1] !== undefined) {
          result.push(arr[i + 1]);
        }

        break;
      }

      case '--double-prev': {
        if (arr[i - 2] !== '--discard-next' && arr[i - 1] !== undefined) {
          result.push(arr[i - 1]);
        }

        break;
      }

      default:
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};
