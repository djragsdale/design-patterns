'use strict';

const JR = require('../../jr'); // Custom utilities package


const MazeLibrary = require('../creational/factory-method');
const MazeGame = MazeLibrary.MazeGame;
const BombedMazeGame = MazeLibrary.BombedMazeGame;
const EnchantedMazeGame = MazeLibrary.EnchantedMazeGame;


JR.sectionLog(`Let's try this thing...`);

JR.sectionLog('Base factory method');

let mazeGame = new MazeGame();

JR.log('factory method', 'CreateMaze', mazeGame.hasOwnProperty('CreateMaze'));
JR.log('mazeGame with factory method', mazeGame);

let maze = mazeGame.CreateMaze();

JR.log('maze', maze);
JR.log('maze room 1', maze.RoomNo(1));
JR.log('maze room 2', maze.RoomNo(2));

JR.sectionLog('Bombed factory method');

let bombedMazeGame = new BombedMazeGame();

JR.log('Bombed factory method', 'CreateMaze', bombedMazeGame.hasOwnProperty('CreateMaze'));
JR.log('bombedMazeGame with factory method', bombedMazeGame);

let bombedMaze = bombedMazeGame.CreateMaze();

JR.log('bombedMaze', bombedMaze);
JR.log('bombedMaze room 1', bombedMaze.RoomNo(1));
JR.log('bombedMaze room 2', bombedMaze.RoomNo(2));

JR.sectionLog('Enchanted factory method');

let enchantedMazeGame = new EnchantedMazeGame();

JR.log('Enchanted factory method', 'CreateMaze', enchantedMazeGame.hasOwnProperty('CreateMaze'));
JR.log('enchantedMazeGame with factory method', enchantedMazeGame);

let enchantedMaze = enchantedMazeGame.CreateMaze();

JR.log('enchantedMaze', enchantedMaze);
JR.log('enchantedMaze room 1', enchantedMaze.RoomNo(1));
JR.log('enchantedMaze room 2', enchantedMaze.RoomNo(2));
