'use strict';

const JR = require('../../jr'); // Custom utilities package


const MazeLibrary = require('../creational/builder');
// const MazeBuilder = MazeLibrary.MazeBuilder;
const StandardMazeBuilder = MazeLibrary.StandardMazeBuilder;
const MazeGame = MazeLibrary.MazeGame;


JR.sectionLog(`Let's try this thing...`);

JR.log('MazeLibrary', MazeLibrary);

let maze;
let game = MazeGame;
let builder = StandardMazeBuilder; // This is implemented as a single instance of the builder.

JR.log('all my objects declared');

game.CreateMaze(builder);
// The game does not hold the representation of the maze, as would happen with
// an abstract Factory or prototype. Instead, the builder itself holds the
// representation, with the game holding the instructions for how to build it.
maze = builder.GetMaze();

JR.log('maze is built', maze);

JR.log('getting maze room 1', maze.RoomNo(1));


JR.sectionLog('END TEST');
