const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
   // throw new CustomError('Not implemented');
    // remove line with error and write your code here
    if(!Array.isArray(arr)){
      return 1;
    }
    let depth = 1;
    for (let iter of arr) {
      if(Array.isArray(iter)){
        let dep = this.calculateDepth(iter) + 1;
        if(depth < dep){
          depth = dep;
        }
      }
      
    }
    return depth;
  }
};