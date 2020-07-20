'use strict';

// Intent:
// Encapsulate a request as an object, thereby letting you parameterize clients with different
// requests, queue or log requests, and support undoable operations.

// Related Patterns:
// A Composite can be used to implement MacroCommands.
// A Memento can keep state the command requires to undo its effect.
// A command that must be copied before being placed on the history list acts as a Prototype.

const List = require('../foundation/List');
const ListIterator = require('../foundation/ListIterator');

function Command () {

  function constructor () {

  }

  this.Execute = function () {

  };

  return constructor.apply(this, arguments);
}

function Document () {

}

function OpenCommand () {

  Command.apply(this, arguments);

  let _application;
  let _response;

  function constructor (application) {
    _application = application;
  }

  this.Execute = function () {
    const name = this.AskUser();

    if (!name) {
      const document = new Document(name);
      _application.Add(document);
      document.Open();
    }
  };

  this.AskUser = function () {

  };

  return constructor.apply(this, arguments);
}

function PasteCommand () {

  Command.apply(this, arguments);

  let _document;

  function constructor (document) {
    _document = document;
  }

  this.Execute = function () {
    _document.Paste();
  };

  return constructor.apply(this, arguments);
}

function SimpleCommand () {

  Command.apply(this, arguments);

  let _action;
  let _receiver;

  function constructor (receiver, action) {
    _receiver = receiver;
    _action = action;
  }

  this.Execute = function () {
    _receiver[_action]();
  }

  return constructor.apply(this, arguments);
}

function MacroCommand () {

  Command.apply(this, arguments);

  let _commands;

  function constructor () {
    _commands = new List();
  }

  this.Add = function (command) {
    _commands.Append(command);
  };

  this.Execute = function () {
    const i = new ListIterator(_commands);
    for (i.First(); i.IsDone(); i.Next()) {
      const command = i.CurrentItem();
      command.Execute();
    }
  };

  this.Remove = function (command) {
    _commands.Remove(command);
  };

  return constructor.apply(this, arguments);
}
