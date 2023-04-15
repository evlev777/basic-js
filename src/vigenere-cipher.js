const { NotImplementedError } = require('../extensions/index.js');
/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */

const alhabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const tablet = [
  ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],
  ['B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A'],
  ['C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B'],
  ['D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C'],
  ['E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D'],
  ['F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E'],
  ['G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F'],
  ['H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G'],
  ['I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H'],
  ['J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I'],
  ['K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J'],
  ['L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K'],
  ['M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L'],
  ['N','O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M'],
  ['O','P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N'],
  ['P','Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O'],
  ['Q','R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P'],
  ['R','S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q'],
  ['S','T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R'],
  ['T','U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S'],
  ['U','V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T'],
  ['V','W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U'],
  ['W','X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V'],
  ['X','Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W'],
  ['Y','Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X'],
  ['Z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y'],
];

const START_POSITION = 65;


class VigenereCipheringMachine {

    constructor(isDerect = true){
      this._reverseFlag = !isDerect;
    }

  encrypt(message, key) {
    if(message === undefined && key === undefined) throw new Error('Incorrect arguments!');

    const keyUC = key.toUpperCase();
    const keyUCDried = keyUC.replace(/\s/g,'');

    const messageUC = message.toUpperCase();
    const messageUCDried = messageUC.trim();

    const res = [];

    const keyLength = keyUCDried.length;
    const messageLength = messageUCDried.length;

    for(let i = 0, n = 0; i < messageLength; i+=1, n+=1 ){
      const messageChar = messageUCDried[i];
      if(!~alhabet.indexOf(messageChar)){
        res.push(messageChar);
        n--;
        continue;
      }

      const messageCharCode = messageChar.charCodeAt(0);
      const shifteRowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION;
      const shiftedCharIndex = messageCharCode - START_POSITION;

      res.push(tablet[shifteRowIndex][shiftedCharIndex]);
    }
    if(this._reverseFlag === true) return res.reverse().join('')
    return res.join('')
  }

  decrypt(encryptedMessage, key) {
    if(encryptedMessage === undefined && key === undefined) throw new Error('Incorrect arguments!');

    const keyUC = key.toUpperCase();
    const keyUCDried = keyUC.replace(/\s/g,'');

    const encryptedMessageUC = encryptedMessage.toUpperCase();
    const encryptedMessageUCDried = encryptedMessageUC.trim();

    const res = [];

    const keyLength = keyUCDried.length;
    const encryptedMessageLength = encryptedMessageUCDried.length;

    for(let i = 0, n = 0; i < encryptedMessageLength; i+=1, n+=1 ){
      let encryptedMessageChar = encryptedMessageUCDried[i];

      const rowIndex = keyUCDried.charCodeAt(n % keyLength) - START_POSITION;
      const row = tablet[rowIndex];



      if(!~alhabet.indexOf(encryptedMessageChar)){
        res.push(encryptedMessageChar);
        n--;
        continue;
      }

      const targetIndex  = row.indexOf(encryptedMessageChar);
      const unshiftedRow = tablet[0];
      const trueChar = unshiftedRow[targetIndex];

      res.push(trueChar);
    }
    if(this._reverseFlag === true) return res.reverse().join('')
    return res.join('')
  }
}

module.exports = {
  VigenereCipheringMachine
};
