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
/*   let arr = ['Dec','Jan','Feb','Mar','Apr', 'May','Jun','Jul', 'Aug','Sep','Oct', 'Nov'];

  if(arguments.length < 1){
    throw new Error('Unable to determine the time of year!');
  }



  try {
    if(date === 'INCORRECT') return false;
   let  monthIndex = arr.indexOf(String(date).split(' ')[1] , 0);
    if(monthIndex < 3 || date === 'winter') return 'winter'
    if(monthIndex > 2 && monthIndex < 6 || date === 'spring') return 'spring'
    if(monthIndex > 5 && monthIndex < 9 || date === 'summer') return 'summer'
    if(monthIndex > 8 || date === 'autumn') return 'autumn'
  } catch (err) {
    console.log(`${err}`);
  } */
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  getSeason
};
