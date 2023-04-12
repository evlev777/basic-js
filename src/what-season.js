const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
/*   if(date === undefined){
    throw new Error('Unable to determine the time of year!')
  }else if(typeof date !== 'object' || typeof date === 'function' ){
    throw new Error('Invalid date!');
  }
  try {
    if(date.getMonth() < 2 || date.getMonth() === 11){
      return 'winter';
    }else if(date.getMonth() > 1 && date.getMonth() < 5){
      return 'spring';
    }else if(date.getMonth() > 4 && date.getMonth() < 8){
      return 'summer';
    }else if(date.getMonth() > 7 && date.getMonth() < 11){
      return 'autumn';
    }
  } catch (err) {
    return `${err}`;
  } */
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason
};
