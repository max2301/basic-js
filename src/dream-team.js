const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  //throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) {
		return false;
	}
	let array = [];
	let flag;
	for (let iterator of arr) {
		flag = false;
		if (typeof iterator === 'string') {
			let str = iterator.replace(/\s+/g, '');
      array.push(str[0].toUpperCase());
		}
	}
	return array.sort().join('');
};
