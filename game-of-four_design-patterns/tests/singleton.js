'use strict';

const JR = require('../../jr'); // Custom utilities package


const MazeLibrary = require('../creational/singleton');
const MazeFactorySingleton = MazeLibrary.MazeFactory;
const MazeFactorySingleton2 = MazeLibrary.MazeFactory;
const MazeFactorySingletonAlternate = MazeLibrary.AlternateMazeFactory;
const MazeFactorySingletonAlternate2 = MazeLibrary.AlternateMazeFactory;


JR.sectionLog(`Let's try this thing...`);

JR.log('MazeLibrary', MazeLibrary);

JR.log('creating bound factory');

let factory0 = MazeFactorySingleton.Instance();
// let factory0 = new MazeLibrary.MazeFactory();

JR.log('factory0', factory0);

let factory1 = MazeFactorySingleton.Instance();
// let factory1 = new MazeLibrary.MazeFactory();

JR.log('factory1', factory1);

let factory2 = MazeFactorySingleton2.Instance();

JR.log('factory2', factory2);


JR.sectionLog('And a alternate method with the factory returning an object...');

JR.log('creating unbound factory');

let altFactory0 = MazeFactorySingletonAlternate.getInstance();

JR.log('altFactory0', altFactory0);

let altFactory1 = MazeFactorySingletonAlternate.getInstance();

JR.log('altFactory1', altFactory1);

let altFactory2 = MazeFactorySingletonAlternate2.getInstance();

JR.log('altFactory2', altFactory2);


JR.sectionLog('TEST SUMMARY');

let MazeFactoryIsASingleton = factory0.id === factory1.id && factory0.id === factory2.id;
let AlternateMazeFactoryIsASingleton = altFactory0.id === altFactory1.id && altFactory0.id === altFactory2.id;

JR.log('MazeFactory is a true singleton:', MazeFactoryIsASingleton);
JR.log('AlternateMazeFactory is a true singleton:', AlternateMazeFactoryIsASingleton);


JR.sectionLog('END TEST');
