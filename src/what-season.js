const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {  
  if (!date) {
    return 'Unable to determine the time of year!';
  }
  if (date === undefined){
    return 'Unable to determine the time of year!';
  }
    if( isNaN(date.getTime())){  
  throw new Error();
  }
  let mon = date.getMonth();
  if(mon == 11 || (mon >= 0 && mon <= 1 )) return 'winter';
  if(mon >= 2 && mon <=4 ) return 'spring';
  if(mon >= 5 && mon <= 7) return 'summer';
  if(mon >= 8 && mon <= 10) return 'autumn';
}