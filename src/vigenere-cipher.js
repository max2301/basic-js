const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(flag) {
    this.flag = flag;
  };

  encrypt(message, key) {
    if(message === undefined || key === undefined) {
      throw new Error
    };
    let str = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode(((message.charCodeAt(i) - 65 + key.charCodeAt(count % key.length) - 65) % 26) + 65);
        count++;
      } else {
        str += message[i];
      };
    };
    if (this.flag === undefined) {
      return str;
    } else {
      return str.split('').reverse().join('');
    };
  };

  decrypt(message, key) {
    if(message === undefined ||  key === undefined) {
      throw Error
    };
    let str = '';
    let count = 0;
    message = message.toUpperCase();
    key = key.toUpperCase();
    for(let i = 0; i < message.length; i++) {
      if (message.charCodeAt(i) >= 65 && message.charCodeAt(i) <= 90) {
        str += String.fromCharCode(((message.charCodeAt(i) + 26 - key.charCodeAt(count % key.length)) % 26) + 65);
        count++;
      } else {
        str += message[i];
      };
    };
    if (this.flag === undefined) {
      return str;
    } else {
      return str.split('').reverse().join('');
    };
  };
}
module.exports = VigenereCipheringMachine;