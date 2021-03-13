const CustomError = require("../extensions/custom-error");

const chainMaker = {
  line: [],
	getLength() {
		return chainMaker.line.length;
	},
	addLink(value) {
		chainMaker.line.push(value);
		return chainMaker;
	},
	removeLink(position) {
    if(!Number.isInteger(position) ||
      position <= 0 ||
      position > chainMaker.linkelength) {
        chainMaker.line = [];
        throw new Error();
    }

		chainMaker.line.splice(position - 1, 1);
		return chainMaker;
	},
	reverseChain() {
		chainMaker.line.reverse();
		return chainMaker;
	},
	finishChain() {
		let result = '';
		for (const iter of chainMaker.line) {
			result += `( ${iter} )~~`;
		}
		chainMaker.line = [];
		return result.slice(0, result.length - 2);
	},
};

module.exports = chainMaker;
