'use strict';

const JR = require('../jr');

const MazeLibrary = require('../creational/prototype');
const {
  MazePrototypeFactory,
  Door,
  Maze,
  Room,
  Wall,
  BombedWall,
  RoomWithABomb,
} = MazeLibrary;

JR.sectionLog(`Let's try this thing...`);

JR.sectionLog('simpleMazeFactory');

let simpleMazeFactory = new MazePrototypeFactory(new Maze(), new Wall(), new Room(), new Door());

JR.log('unitialized room', simpleMazeFactory.makeRoom());

JR.log('initialized room', simpleMazeFactory.makeRoom(3));


JR.sectionLog('bombedMazeFactory');

let bombedMazeFactory = new MazePrototypeFactory(new Maze(), new BombedWall(), new RoomWithABomb(), new Door());

JR.log('bombedMazeFactory', bombedMazeFactory);
