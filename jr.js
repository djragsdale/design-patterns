'use strict';

const JR = (function() {

	const prettyjson = require('prettyjson');

	const JR = {
		utilities: {}
	}; // Custom utilities package
	JR.utilities.isUndefined = obj => typeof obj === 'undefined';
	JR.utilities.isNull = obj => obj === null;

	const { isNull, isUndefined } = JR.utilities;


	const jsonOptions = {
		keysColor: 'cyan',
		dashColor: 'cyan',
		stringColor: 'yellow',
		// noColor: true
	};

	JR.log = (...args) => {
		console.log.apply(null, args.map(arg => prettyjson.render(isUndefined(arg) ? 'undefined' : isNull(arg) ? 'null' : arg, jsonOptions)));
	};

	JR.sectionLog = name => console.log(`\n${prettyjson.render(`========== ${name} ==========`, { stringColor: 'magenta' })}`);

	return JR;

})();

module.exports = JR;
