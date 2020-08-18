'use strict';

// Note from djragsdale:
// Seriously? This is how ALL of javascript object inheritance works internally, so you're
// reproducing default functionality. But if you insist...

// Intent:
// Specify the kinds of objects to create using a prototypical instance, and create new objects by
// copying this prototype.

let MazeLibrary = {};

const { isNumber } = require('../jr').utilities;
const { MazeFactory } = require('./abstract-factory');

const DirectionEnum = Object.freeze({
	North: { x: 0, y:1, opposite: function () { return DirectionEnum.South; }, toString: function () { return 'North'; } },
	South: { x: 0, y:-1, opposite: function () { return DirectionEnum.North; }, toString: function () { return 'South'; } },
	East: { x: 1, y:0, opposite: function () { return DirectionEnum.West; }, toString: function () { return 'East'; } },
	West: { x: -1, y:0, opposite: function () { return DirectionEnum.East; }, toString: function () { return 'West'; } },
});

// Some examples of some classes that would support being prototypes.
const Wall = function () {

	this.clone = function () {
		return new Wall();
	};
};
const Door = function () {

	let _room1;
	let _room2;

	function constructor () {
		// The GoF claims an additional (or equivalently complex) constructor is
    // needed that takes a Door object as a parameter. In JavaScript this would
    // mean exposing all private variables; this isn't necessary if you
		// initialize in your clone method and you're not inheriting from
		// something with private variables.
	}

	this.initialize = function (r1, r2) {
		_room1 = r1;
		_room2 = r2;
	};

	this.clone = function () {
		let door = new Door();
		door.initialize(_room1, _room2);
		return door;
	};

	this.enter = function () {

	};

	this.otherSideFrom = function (room) {
		if (room.id && _room1.id && _room2.id) {
			return (room.id === _room1.id) ? _room2 : (room.id === _room2.id) ? _room1 : undefined;
		} else {
			return (room === _room1) ? _room2 : (room === _room2) ? _room1 : undefined;
		}
	};

	return constructor.apply(this, arguments);
};
const Room = function () {

	let _sides;

	function constructor () {
		_sides = {};
	}

	this.initialize = function (id, sides) {
		if (isNumber(id)) {
			this.id = id;
		}
		if (sides) {
			_sides = sides;
		} else {
			_sides = {};
		}
	};

	this.clone = function () {
		let room = new Room();
		room.initialize(this.id);
		return room;
	};

	this.setSide = function (direction, wall) {
		if (direction && direction.toString) {
			_sides[direction.toString()] = wall;
		}
	};

	return constructor.apply(this, arguments);
};
const Maze = function () {

	let _rooms = {};

	function constructor () {
		_rooms = {};
	}

	this.initialize = function (rooms) {
		_rooms = rooms;
	};

	this.clone = function () {
		let maze = new Maze();
		maze.initialize(_rooms);
		return maze;
	};

	this.AddRoom = function (room) {
		_rooms[room.id.toString()] = room;
	};

	this.RoomNo = function (n) {
		return _rooms[n];
	};

	return constructor.apply(this, arguments);
};
const BombedWall = function () {

	Wall.apply(this, arguments);

	let _bomb;
	Object.defineProperty(this, 'hasBomb', {
		get: function () {
			return _bomb;
		},
		set: function (val) {
			_bomb = !!val; // Embrace the falsiness!
		}
	});

	function constructor() {

	}

	this.initialize = function (hasBomb) {
		this.hasBomb = hasBomb;
	};

	this.clone = function () {
		let bombedWall = new BombedWall();
		bombedWall.initialize(_bomb);
		return bombedWall;
	};

	return constructor.apply(this, arguments);
};
const RoomWithABomb = function () {
	let _parent;
	let _bomb;
	Object.defineProperty(this, 'id', {
		get: function () {
			return _parent.id;
		},
		set: function (val) {
			_parent.id = val;
		}
	});

	function constructor () {
		_parent = new Room();
	}

	this.initialize = function (hasBomb, ...parentProps) {
		if (parentProps.length > 1) {
			_parent.initialize(...parentProps);
		} else {
			_parent = parentProps[0];
		}
		_bomb = !!hasBomb;
	};

	this.clone = function () {
		let room = new RoomWithABomb();
		let parent = _parent.clone();
		room.initialize(_bomb, parent);
	};

	return constructor.apply(this, arguments);
};

MazeLibrary.Door = Door;
MazeLibrary.Wall = Wall;
MazeLibrary.Maze= Maze;
MazeLibrary.Room = Room;
MazeLibrary.BombedWall = BombedWall;
MazeLibrary.RoomWithABomb = RoomWithABomb;

function MazePrototypeFactory () {

	MazeFactory.call(this);

	let _prototypeMaze;
	let _prototypeRoom;
	let _prototypeWall;
	let _prototypeDoor;

	function constructor (m, w, r, d) {
		_prototypeMaze = m;
		_prototypeWall = w;
		_prototypeRoom = r;
		_prototypeDoor = d;
	}

	this.makeMaze = function () {
		return _prototypeMaze.clone();
	};

	this.makeRoom = function (id) {
		let room = _prototypeRoom.clone();
		room.initialize(id);
		return room;
	};

	this.makeWall = function () {
		return _prototypeWall.clone();
	};

	this.makeDoor = function (r1, r2) {
		let door = _prototypeDoor.clone();
		door.initialize(r1, r2);
		return door;
	};

	return constructor.apply(this, arguments);
}

MazePrototypeFactory.prototype = Object.create(MazeFactory.prototype);
MazePrototypeFactory.prototype.constructor = MazePrototypeFactory;

MazeLibrary.MazePrototypeFactory = MazePrototypeFactory;

// Some examples of factories created by a prototype factory.
let simpleMazeFactory = new MazePrototypeFactory(new Maze(), new Wall(), new Room(), new Door());
let bombedMazeFactory = new MazePrototypeFactory(new Maze(), new BombedWall(), new RoomWithABomb(), new Door());

module.exports = MazeLibrary;
