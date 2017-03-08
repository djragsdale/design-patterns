'use strict';

const MazeLibrary = {};

// const Maze = require('./Maze');
const Maze = function () { };
const Wall = function () { };
const Room = function () { };
const Door = function () { };

const EnchantedRoom = function () { };
const Spell = function () { };
const DoorNeedingSpell = function () { };

const BombedWall = function () { };
const RoomWithABomb = function () { };

function MazeFactory () {

	function constructor () {

	}

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

	return constructor.apply(this, arguments);
}

// MazeFactory.prototype = Object.create(MazeFactoryParent.prototype);
// MazeFactory.prototype.constructor = MazeFactory;

MazeLibrary.MazeFactory = MazeFactory;


function EnchantedMazeFactory () {

	MazeFactory.apply(this, arguments);

	function constructor () {

	}

	function castSpell () {
		return new Spell();
	}

	this.makeRoom = function (n) {
		return new EnchantedRoom(n, castSpell());
	};

	this.makeDoor = function (room1, room2) {
		return new DoorNeedingSpell(room1, room2);
	};

	return constructor.apply(this, arguments);
}

EnchantedMazeFactory.prototype = Object.create(MazeFactory.prototype);
EnchantedMazeFactory.prototype.constructor = EnchantedMazeFactory;

MazeLibrary.EnchantedMazeFactory = EnchantedMazeFactory;


function BombedMazeFactory () {

	MazeFactory.apply(this, arguments);

	function constructor() {

	}

	this.makeWall = function () {
		return new BombedWall();
	};

	this.makeRoom = function (n) {
		return new RoomWithABomb(n);
	};

	return constructor.apply(this, arguments);
}

BombedMazeFactory.prototype = Object.create(MazeFactory.prototype);
BombedMazeFactory.prototype.constructor = BombedMazeFactory;

MazeLibrary.BombedMazeFactory = BombedMazeFactory;


function MazeGame () {

	function constructor () {

	}

	this.createMaze = function(factory) {
		let aMaze = factory.MakeMaze();
		let room1 = factory.MakeRoom(1);
		let room2 = factory.MakeRoom(2);
		let aDoor = factory.MakeDoor(room1, room2);

		aMaze.AddRoom(room1);
		aMaze.AddRoom(room2);

		room1.SetSide('North', factory.MakeWall());
		room1.SetSide('East', factory.MakeWall());
		room1.SetSide('South', factory.MakeWall());
		room1.SetSide('West', factory.MakeWall());

		room2.SetSide('North', factory.MakeWall());
		room2.SetSide('East', factory.MakeWall());
		room2.SetSide('South', factory.MakeWall());
		room2.SetSide('West', aDoor);

		return aMaze;
	};

	this.createMazeFactory = function() {
		return new EnchantedMazeFactory();
	};

	return constructor.apply(this, arguments);
}

MazeLibrary.MazeGame = MazeGame;


let game = new MazeGame();
let factory = new BombedMazeFactory();
game.createMaze(factory);
// or
game.createMaze(game.createMazeFactory());


module.exports = MazeLibrary;
