const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater( str, options) {
/*   let arr = [];
  let addArr = [];


  if(typeof options.repeatTimes !== 'undefined' ){
    for(let i = 0; i < options.repeatTimes; i++){
      arr.push(options.addition)
    }
  }

  if(typeof options.additionRepeatTimes !== 'undefined' && typeof options.addition !== 'undefined'){
    for(let i = 0; i < additionRepeatTimes; i++){
      addArr.push(str)
    }

    if(typeof options.additionSeparator === 'undefined'){
      return addArr.join('|')
    }else {
      return addArr.join(`${options.additionSeparator}`)
    }
  }

  arr = arr.map(item => 
    item + options.addition
    )

  if(typeof options.separator === 'undefined'){
    return arr.join('+')
  }else {
    return arr.join(`${options.separator}`)
  } */
  throw new NotImplementedError('Not implemented');
}

module.exports = {
  repeater
};
