'use strict';

const numberToCoord = require('./Coord');
const Point = require('./Point');

function Rect () {

	let _width = numberToCoord();
	let _height = numberToCoord();
	let _left = numberToCoord();
	let _bottom = numberToCoord();

	Object.defineProperties(this, {
		'Width': {
			get: function () {
				return _width;
			},
			set: function (value) {
				if (typeof value === 'number') {
					_width = numberToCoord(value);
				} else {
					throw new TypeError(`Rect 'Width' property only allows value of type 'number'`);
				}
			}
		},
		'Height': {
			get: function () {
				return _height;
			},
			set: function (value) {
				if (typeof value === 'number') {
					_height = numberToCoord(value);
				} else {
					throw new TypeError(`Rect 'Height' property only allows value of type 'number'`);
				}
			}
		},
		'Left': {
			get: function () {
				return _left;
			},
			set: function (value) {
				if (typeof value === 'number') {
					_left = numberToCoord(value);
				} else {
					throw new TypeError(`Rect 'Left' property only allows value of type 'number'`);
				}
			}
		},
		'Bottom': {
			get: function () {
				return _bottom;
			},
			set: function (value) {
				if (typeof value === 'number') {
					_bottom = numberToCoord(value);
				} else {
					throw new TypeError(`Rect 'Bottom' property only allows value of type 'number'`);
				}
			}
		},
		'Origin': {
			get: function () {
				return new Point(_left, _bottom);
			},
			set: function (value) {
				if (Point.prototype.isPrototypeOf(value)) {
					this.Left = value.X;
					this.Bottom = value.Y;
				} else {
					throw new TypeError(`Rect 'Origin' property only allows value of type 'Point'`);
				}
			}
		},
		'Extent': {
			get: function () {
				return new Point(_left, _bottom);
			},
			set: function (value) {
				if (Point.prototype.isPrototypeOf(value)) {
					this.Width = value.X;
					this.Height = value.Y;
				} else {
					throw new TypeError(`Rect 'Extent' property only allows value of type 'Point'`);
				}
			}
		}
	});


	if (Point.prototype.isPrototypeOf(arguments[0]) && Point.prototype.isPrototypeOf(arguments[1])) {
		// origin(Point), extent(Point)
		this.Origin = arguments[0];
		this.Extent = arguments[1];
	} else if (typeof arguments[0] === 'number' && typeof arguments[1] === 'number' && typeof arguments[2] === 'number' && typeof arguments[3] === 'number') {
		// x(Number), y(Number), w(Number), h(Number)
		this.Left = arguments[0];
		this.Bottom = arguments[1];
		this.Width = arguments[2];
		this.Height = arguments[3];
	} else if (typeof arguments[0] === 'undefined' && typeof arguments[1] === 'undefined' && typeof arguments[2] === 'undefined' && typeof arguments[3] === 'undefined') {
		this.Origin = new Point();
		this.Extent = new Point();
	} else {
		throw new TypeError(`Rect constructor only accepts arguments of types ('Point', 'Point') or ('Coord', 'Coord', 'Coord', 'Coord')`);
	}
}



Rect.prototype.MoveTo = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		this.Left = point.X;
		this.Bottom = point.Y;
	} else {
		throw new TypeError(`Rect MoveTo method only allows argument of type 'Point'`);
	}
};

Rect.prototype.MoveBy = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		this.Left += point.X;
		this.Bottom += point.Y;
	} else {
		throw new TypeError(`Rect MoveBy method only allows argument of type 'Point'`);
	}
};

Rect.prototype.IsEmpty = function () {
	return this.Width === 0 && this.Height === 0;
};

Rect.prototype.Contains = function (point) {
	if (Point.prototype.isPrototypeOf(point)) {
		return this.Left <= point.X && this.Bottom <= point.Y && (this.Left + this.Width) >= point.X && (this.Bottom + this.Height) >= point.Y;
	} else {
		throw new TypeError(`Rect Contains method only allows argument of type 'Point'`);
	}
};

module.exports = Rect;
