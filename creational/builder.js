'use strict';

// Intent:
// Separate the construction of a complex object from its representation so that the same
// construction process can create different representations.

const MazeLibrary = {};
const Maze = function () {
	let _rooms;

	function constructor () {
		_rooms = {};
	}

	this.AddRoom = function (room) {
		_rooms[room.id.toString()] = room;
	};

	this.RoomNo = function (n) {
		return _rooms[n];
	};

	return constructor.apply(this.arguments);
};
const Room = function (id) {
	this.id = id;

	this.SetSide = function () {

	};
};
const Wall = function () { };
const Door = function () { };
const DirectionEnum = Object.freeze({
	North: { x: 0, y:1, opposite: function () { return DirectionEnum.South; }, toString: function () { return 'North'; } },
	South: { x: 0, y:-1, opposite: function () { return DirectionEnum.North; }, toString: function () { return 'South'; } },
	East: { x: 1, y:0, opposite: function () { return DirectionEnum.West; }, toString: function () { return 'East'; } },
	West: { x: -1, y:0, opposite: function () { return DirectionEnum.East; }, toString: function () { return 'West'; } },
});

function MazeBuilder () {

	function constructor () {

	}

	this.BuildMaze = function () {

	};

	this.BuildRoom = function (room) {

	};

	this.BuildDoor = function (roomFrom, roomTo) {

	};

	this.GetMaze = function () {
		return 0;
	};

	return constructor.apply(this, arguments);
}

function StandardMazeBuilder () {

	MazeBuilder.apply(this, arguments);

	let _currentMaze;

	function constructor() {
		_currentMaze = 0;
	}

	function commonWall (room1, room2) {
		// Utility operation that determines the direction of the common wall between two rooms.
		// I build out a sample using an Enum of sorts, defined above. It's a standard maze, so I'm ignorantly assuming all rooms are square and the same size.
		return room1.x === room2.x ? room1.x > room2.x ? DirectionEnum.West : DirectionEnum.East : room1.y > room2.y ? DirectionEnum.South : DirectionEnum.North;
	}

	this.BuildMaze = function () {
		_currentMaze = new Maze();
	};

	this.BuildRoom = function (n) {
		let room = new Room(n);

		room.SetSide(DirectionEnum.North, new Wall());
		room.SetSide(DirectionEnum.South, new Wall());
		room.SetSide(DirectionEnum.East, new Wall());
		room.SetSide(DirectionEnum.West, new Wall());

		_currentMaze.AddRoom(room);
	};

	this.BuildDoor = function (n1, n2) {
		let r1 = _currentMaze.RoomNo(n1);
		let r2 = _currentMaze.RoomNo(n2);
		let d = new Door(r1, r2);

		r1.SetSide(commonWall(r1, r2), d);
		r2.SetSide(commonWall(r2, r1), d);
	};

	this.GetMaze = function () {
		return _currentMaze;
	};

	return constructor.apply(this, arguments);
}

StandardMazeBuilder.prototype = Object.create(MazeBuilder.prototype);
StandardMazeBuilder.prototype.constructor = StandardMazeBuilder;

function MazeGame () {

	function constructor () {

	}

	this.CreateMaze = function(builder) {
		builder.BuildMaze();

		builder.BuildRoom(1);
		builder.BuildRoom(2);
		builder.BuildDoor(1, 2);

		return builder.GetMaze();
	};

	this.CreateComplexMaze = function(builder) {
		builder.BuildMaze();

		builder.BuildRoom(1);
		// ...
		builder.BuildRoom(1001);

		return builder.GetMaze();
	};

	return constructor.apply(this, arguments);
}

MazeLibrary.MazeBuilder = new MazeBuilder();
MazeLibrary.StandardMazeBuilder = new StandardMazeBuilder();
MazeLibrary.MazeGame = new MazeGame();

module.exports = MazeLibrary;
