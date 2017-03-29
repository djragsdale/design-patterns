'use strict';

const JR = require('../jr'); // Custom utilities package


const FontDialogDirector = require('../behavioral/mediator');


JR.sectionLog(`Let's try this thing...`);

JR.log('FontDialogDirector', FontDialogDirector);

let director = new FontDialogDirector();

JR.log('all my objects declared');

director.CreateWidgets();

JR.log('director is built', director);

let directedWidgets = director.GetWidgets();

JR.log('got all widgets', directedWidgets);

JR.log('clicking cancel');

directedWidgets.cancel.HandleMouse({});


JR.sectionLog('END TEST');
