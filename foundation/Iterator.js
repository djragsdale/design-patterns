'use strict';

function Iterator () {

	let _contents = [];
	let _currentIndex = 0;

	function constructor() {

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

module.exports = Iterator;
