'use strict';

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

const EnchantedRoom = function (id) {
	Room.apply(this, arguments);
};
const Spell = function () { };
const DoorNeedingSpell = function () { };

const BombedWall = function () { };
const RoomWithABomb = function (id) {
	Room.apply(this, arguments);

	this.hasBomb = true;
};

function MazeGame () {

	function constructor () {

	}

	this.MakeMaze = function () {
		return new Maze();
	};

	this.MakeRoom = function (n) {
		return new Room(n);
	};

	this.MakeWall = function () {
		return new Wall();
	};

	this.MakeDoor = function (r1, r2) {
		return new Door(r1, r2);
	};

	this.CreateMaze = function () {
		let aMaze = this.MakeMaze();
		let r1 = this.MakeRoom(1);
		let r2 = this.MakeRoom(2);
		let theDoor = this.MakeDoor(r1, r2);
		aMaze.AddRoom(r1);
		aMaze.AddRoom(r2);
		r1.SetSide(DirectionEnum.North, this.MakeWall());
		r1.SetSide(DirectionEnum.East, theDoor);
		r1.SetSide(DirectionEnum.South, this.MakeWall());
		r1.SetSide(DirectionEnum.West, this.MakeWall());
		r2.SetSide(DirectionEnum.North, this.MakeWall());
		r2.SetSide(DirectionEnum.East, this.MakeWall());
		r2.SetSide(DirectionEnum.South, this.MakeWall());
		r2.SetSide(DirectionEnum.West, theDoor);
		return aMaze;
	};

	return constructor.apply(this, arguments);
}

function BombedMazeGame () {

	MazeGame.apply(this, arguments);

	function constructor () {

	}

	this.MakeWall = function () {
		return new BombedWall();
	};

	this.MakeRoom = function (n) {
		return new RoomWithABomb(n);
	};

	return constructor.apply(this, arguments);
}

function EnchantedMazeGame () {

	MazeGame.apply(this, arguments);

	function constructor () {

	}

	function castSpell () {
		return new Spell();
	}

	this.MakeRoom = function (n) {
		return new EnchantedRoom(n, castSpell());
	};

	this.MakeDoor = function (r1, r2) {
		return new DoorNeedingSpell(r1, r2);
	};

	return constructor.apply(this, arguments);
}

MazeLibrary.MazeGame = MazeGame;
MazeLibrary.BombedMazeGame = BombedMazeGame;
MazeLibrary.EnchantedMazeGame = EnchantedMazeGame;

module.exports = MazeLibrary;
