'use strict';

// Intent:
// Ensure a class only has one instance, and provide a global point of access to it.

const MazeLibrary = {};

const Maze = function () { };
const Wall = function () { };
const Room = function () { };
const Door = function () { };

function MazeFactory () {

	let _instance;

	let constructor = function () {

		// This ID isn't mentioned in GoF Design Pattern Example, it's only to prove that all instances are the same.
		this.id = Math.random();

		this.makeMaze = function () {
			return new Maze();
		};

		this.makeWall = function () {
			return new Wall();
		};

		this.makeRoom = function (n) {
			return new Room(n);
		};

		this.makeDoor = function (room1, room2) {
			return new Door(room1, room2);
		};
	};

	this.Instance = function () {
		if (typeof _instance === 'undefined') {
			constructor.bind(_instance = {})();
		}

		return _instance;
	};
}

MazeLibrary.MazeFactory = new MazeFactory();

// or

function AlternateMazeFactory () {

	let _instance;

	function createInstance () {
		let instance = {};

		// This ID isn't mentioned in GoF Design Pattern Example, it's only to prove that all instances are the same.
		instance.id = Math.random();

		instance.makeMaze = function () {
			return new Maze();
		};

		instance.makeWall = function () {
			return new Wall();
		};

		instance.makeRoom = function (n) {
			return new Room(n);
		};

		instance.makeDoor = function (room1, room2) {
			return new Door(room1, room2);
		};

		return instance;
	}

	function getInstance () {
		if (typeof _instance === 'undefined') {
			_instance = createInstance();
		}

		return _instance;
	}

	return {
		getInstance: getInstance
	};
}

MazeLibrary.AlternateMazeFactory = new AlternateMazeFactory();

module.exports = MazeLibrary;
