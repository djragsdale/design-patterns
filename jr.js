'use strict';

const JR = (function() {

	const prettyjson = require('prettyjson');

	const JR = {
		utilities: {}
	}; // Custom utilities package
	JR.utilities.isUndefined = obj => typeof obj === 'undefined';
	JR.utilities.isNull = obj => obj === null;
	JR.utilities.isString = str => typeof str === 'string';
	JR.utilities.isObject = obj => ((null !== obj) && Object.prototype.toString.call(obj) === '[object Object]');
	JR.utilities.isArray = arr => ((null !== arr) && Object.prototype.toString.call(arr) === '[object Array]');

	const { isNull, isUndefined } = JR.utilities;


	const jsonOptions = {
		keysColor: 'cyan',
		dashColor: 'cyan',
		stringColor: 'yellow',
		// noColor: true
	};

	function markStrings(obj) {
		if (JR.utilities.isString(obj)) {
			return `"${obj}"`;
		} else if (JR.utilities.isArray(obj)) {
			return Array.prototype.map.call(obj, markStrings);
		} else if (JR.utilities.isObject(obj)) {
			for (let prop in obj) {
				obj[prop] = markStrings(obj[prop]);
			}
		}

		return obj;
	}

	JR.log = (...args) => {
		console.log.apply(null, args.map(arg => prettyjson.render(isUndefined(arg) ? 'undefined' : isNull(arg) ? 'null' : markStrings(arg), jsonOptions)));
	};

	JR.sectionLog = name => console.log(`\n${prettyjson.render(`========== ${name} ==========`, { stringColor: 'magenta' })}`);

	return JR;

})();

module.exports = JR;
