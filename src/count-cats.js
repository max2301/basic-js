const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
 // throw new CustomError('Not implemented');
  if (!Array.isArray(arr)) {
		return 0;
	}
	let count = 0;
	for (const i of arr) {
		for (const j of i) {
			if (j === '^^') ++count;
		}
	}
	return count;
};
