'use strict';

function MazeFactory () {

	function constructor () {

	}

	this.method = function () {

	};

	return constructor.apply(this, arguments);
}

// MazeFactory.prototype = Object.create(MazeFactoryParent.prototype);
// MazeFactory.prototype.constructor = MazeFactory;

module.exports = MazeFactory;
