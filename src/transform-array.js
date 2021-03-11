const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr ) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) {
		throw new Error();
	}
	let array = [ '--double-next', '--double-prev','--discard-next', '--discard-prev'];
	let mass = [];
	for(let i = 0; i < arr.length; i++){
		if(i < arr.length - 1 && arr[i] === array[0]){
			mass.push(arr[i+1]);
		}else if(i > 0 && arr[i] === array[1]){
			mass.push(mass[mass.length - 1]);
		}else if(i < arr.length && arr[i] === array[2]){
			mass.push(undefined);
			i+=1;
		} else if(i > 0 && arr[i] === array[3]){
			mass.pop();
		} else if(arr[i] !== array[0] && arr[i] !== array[1] && arr[i] !== array[2] && arr[i] !== array[3]){
			mass.push(arr[i]); 
		}
	}
	let result = mass.filter(function(x) {
		return x !== undefined;
	  });
	return result;
}
