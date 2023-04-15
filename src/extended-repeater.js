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
  const string = String(str),
    repeatTimes = options.repeatTimes || 1,
    separator = options.separator || '+',
    additionRepeatTimes = options.additionRepeatTimes || 1,
    additionSeparator = String(options.additionSeparator || '|');
  let addition = String(options.addition),
    res = '';

  addition = addition === 'undefined' ? '' : addition;

  for (let i = 0; i < repeatTimes; i++) {
    res += string;

    for (let n = 0; n < additionRepeatTimes; n++) {
      res += addition;

      if (n !== additionRepeatTimes - 1) {
        res += additionSeparator;
      }
    }

    if (i !== repeatTimes - 1) {
      res += separator;
    }
  }

  return res;
}

module.exports = {
  repeater
};
