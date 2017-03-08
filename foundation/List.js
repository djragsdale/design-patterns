'use strict';

function List () {

	const DEFAULT_LIST_CAPACITY = Math.pow(2, 32) - 1;
	let _size;
	let _contents = [];

	function constructor () {
		if (arguments.length > 0) {
			if (typeof arguments[0] === 'number') {
				_size = arguments[0];
			} else {
				_size = DEFAULT_LIST_CAPACITY;
				let list = arguments[0];

				if (List.prototype.isPrototypeOf(list)) {
					const count = list.Count();
					for (let i = 0; i < count; i++) {
						_contents.push(list.Get(i));
					}
				} else {
					throw new TypeError(`List constructor only accepts argument of type 'number' or 'List'`);
				}
			}
		} else {
			_size = DEFAULT_LIST_CAPACITY;
		}
	}

	// Accessing

	this.Count = function () {
		return _contents.length;
	};

	this.Get = function (index) {
		if (index < _contents.length && index > -1) {
			return _contents[index];
		} else {
			throw new RangeError('Index must be a non-negative valid index of List');
		}
	};

	this.First = function () {
		return _contents[0];
	};

	this.Last = function () {
		return _contents[_contents.length - 1];
	};

	this.Includes = function (item) {
		for (let i = 0; i < _contents.length; i++) {
			if (_contents[i] === item) {
				return true;
			}
		}
		return false;
	};

	// Adding

	this.Append = function (item) {
		_contents.push(item);
	};

	this.Prepend = function (item) {
		_contents.unshift(item);
	};

	// Removing

	this.Remove = function (item) {
		let i = 0;
		while (i < _contents.length) {
			if (_contents[i] === item) {
				_contents.splice(i, 1);
			} else {
				i++;
			}
		}
	};

	this.RemoveLast = function () {
		_contents.pop();
	};

	this.RemoveFirst = function () {
		_contents.shift();
	};

	this.RemoveAll = function () {
		_contents = [];
	};

	// Stack Interface

	this.Top = function () {
		return _contents[0];
	};

	this.Push = function (item) {
		if (_contents.length < _size - 1) {
			_contents.push(item);
		}
	};

	this.Pop = function () {
		return _contents.pop();
	};

	return constructor.apply(this, arguments);
}


module.exports = List;
