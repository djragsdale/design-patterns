'use strict';

const List = require('./List');
const Iterator = require('./Iterator');

function ListIterator () {

	Iterator.apply(this, arguments);

	let _contents = [];
	let _currentIndex = 0;

	function constructor (aList) {

		if (List.prototype.isPrototypeOf(aList)) {

			const count = aList.Count();
			for (let i = 0; i < count; i++) {
				_contents.push(aList.Get(i));
			}
		} else {
			throw new TypeError(`ListIterator constructor only accepts argument of type 'List'`);
		}
	}

	this.First = function () {
		_currentIndex = 0;
	};

	this.Next = function () {
		_currentIndex += 1;
	};

	this.IsDone = function () {
		return _currentIndex >= _contents.length;
	};

	this.CurrentItem = function () {
		return _contents[_currentIndex];
	};

	return constructor.apply(this, arguments);
}

ListIterator.prototype = Object.create(Iterator.prototype);
ListIterator.prototype.constructor = ListIterator;

module.exports = ListIterator;
