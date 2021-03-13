const CustomError = require("../extensions/custom-error");

module.exports = function repeater( str, options ) {
  
  if(!options.separator) {
    options.separator = "+";
  }

  if(!options.additionSeparator) {
    options.additionSeparator = "|";
  }

  if(typeof str != 'string') {
    str = String(str);
  }

  let res = [];
  let addRes = [];

  if(options.hasOwnProperty("addition")) {

    if(typeof options.addition !== 'string') {
      options.addition = String(options.addition);
    }   

    for(let i = 0; i < options.additionRepeatTimes - 1; i++) {
      addRes.push(options.addition);
      addRes.push(options.additionSeparator);
    }

    addRes.push(options.addition);
    addRes.push(str);
    str = addRes.reverse().join('');
  }

for(let i = 0; i < options.repeatTimes - 1; i++) {
  res.push(str);
  res.push(options.separator);
}
res.push(str);
return res.join('');
};
  