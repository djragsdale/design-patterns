'use strict';

const numberToCoord = require('./Coord');

function Point (x = numberToCoord(), y = numberToCoord()) {
	let _x = numberToCoord();
	let _y = numberToCoord();

	Object.defineProperties(this, {
		'X': {
			get: function() {
				return _x;
			},
			set: function(value) {
				if (typeof value === 'number') {
					_x = numberToCoord(value);
				} else {
					throw new TypeError(`Point 'X' property only allows value of type 'number'`);
				}
			}
		},
		'Y': {
			get: function() {
				return _y;
			},
			set: function(value) {
				if (typeof value === 'number') {
					_y = numberToCoord(value);
				} else {
					throw new TypeError(`Point 'Y' property only allows value of type 'number'`);
				}
			}
		}
	});

	if (typeof x !== 'number') {
		throw new TypeError(`Point constructor only accepts argument 'x' of type 'number' instead of type ${typeof x}`);
	} else if (typeof y !== 'number') {
		throw new TypeError(`Point constructor only accepts argument 'y' of type 'number'`);
	} else {
		this.X = x;
		this.Y = y;
	}
}

Point.prototype.AddTo = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return new Point(numberToCoord(point.X + this.X), numberToCoord(point.Y + this.Y));
	} else {
		throw new TypeError(`Point.prototype.AddTo only accepts argument of type 'Point'`);
	}
};
Point.prototype.SubtractFrom = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return new Point(numberToCoord(point.X - this.X), numberToCoord(point.Y - this.Y));
	} else {
		throw new TypeError(`Point.prototype.SubtractFrom only accepts argument of type 'Point'`);
	}
};
Point.prototype.MultiplyBy = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return new Point(numberToCoord(point.X * this.X), numberToCoord(point.Y * this.Y));
	} else {
		throw new TypeError(`Point.prototype.MultiplyBy only accepts argument of type 'Point'`);
	}
};
Point.prototype.DivideFrom = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return new Point(numberToCoord(point.X / this.X), numberToCoord(point.Y / this.Y));
	} else {
		throw new TypeError(`Point.prototype.DivideBy only accepts argument of type 'Point'`);
	}
};
Point.prototype.IsEqualTo = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return point.X === this.X && point.Y === this.Y;
	} else {
		throw new TypeError(`Point.prototype.IsEqualTo only accepts argument of type 'Point'`);
	}
};
Point.prototype.IsNotEqualTo = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return point.X !== this.X || point.Y !== this.Y;
	} else {
		throw new TypeError(`Point.prototype.IsNotEqualTo only accepts argument of type 'Point'`);
	}
};

module.exports = Point;
