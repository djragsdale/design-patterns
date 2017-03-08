'use strict';

function numberToCoord (value = 0) {

	let _value = 0;

	if (typeof value !== 'number') {
		throw new TypeError(`numberToCoord only accepts argument of type 'number'`);
	} else {
		if (isFinite(value)) {
			_value = value;
		} else {
			if (value === Number.POSITIVE_INFINITY) {
				_value = Number.MAX_SAFE_INTEGER;
			} else if (value === Number.NEGATIVE_INFINITY) {
				_value = Number.MIN_SAFE_INTEGER;
			} else {
				_value = 0;
			}
		}
	}

	return _value;
}

module.exports = numberToCoord;
