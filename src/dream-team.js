const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(arr) {
  return Array.isArray(arr) ? arr
  .filter(item => typeof item === 'string')
  .map(item => item.trim().split(' ').map(item => item[0]
    .toUpperCase()).slice(0,1))
  .flat(Infinity)
  .sort()
  .join('')
  .split('')
  .filter(item => item === item.toUpperCase())
  .join('') : false;
}
module.exports = {
  createDreamTeam
};
