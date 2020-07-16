'use strict';

// Intent:
// Avoid coupling the sender of a request to its receiver by giving more than one object a chance
// to handle the request. Chain the receiving objects and pass the request along the chain until an
// object handles it.

// Related Patterns:
// Chain of Responsibility is often applied in conjunction with Composite. There, a component's
// parent can act as its successor.

const Topic = {
  NO_HELP_TOPIC: -1,
  PRINT_TOPIC: 1,
  PAPER_ORIENTATION_TOPIC: 2,
  APPLICATION_TOPIC: 3
};

function HelpHandler () {

  let _successor;
  let _topic;

  function constructor (successor, topic) {
    _successor = successor;
    _topic = topic || Topic.NO_HELP_TOPIC;
  }

  this.HasHelp = function () {
    return _topic !== Topic.NO_HELP_TOPIC;
  };
  this.SetHandler = function (helpHandler, topic) {

  };
  this.HandleHelp = function () {
    if (_successor) {
      _success.HandleHelp();
    }
  };

  return constructor.apply(this, arguments);
}

function Widget () {

  HelpHandler.apply(this, arguments);

  let _parent;

  function constructor (parent, topic) {
    _parent = parent;
  }

  return constructor.apply(this, arguments);
}

function Button () {

  Widget.apply(this, arguments);

  let _parent;

  function constructor (widget, topic) {
    _parent = widget;
  }

  // Widget operations that Button overrides
  this.HandleHelp = function () {
    if (this.HasHelp()) {
      // offer help on the button
    } else {
      _parent.HandleHelp();
    }
  };

  return constructor.apply(this, arguments);
}

function Dialog () {

  Widget.apply(this, arguments);

  let _helpHandler;

  function constructor (helpHandler, topic) {
    _helpHandler = helpHandler;
  }

  this.HandleHelp = function () {
    if (this.HasHelp()) {
      // offer help on the dialog
    } else {
      _helpHandler.HandleHelp();
    }
  };

  return constructor.apply(this, arguments);
}

function Application () {

  HelpHandler.apply(this, arguments);

  function constructor () {

  }

  this.HandleHelp = function () {
    // show a list of help topics
  };

  return constructor.apply(this, arguments);
}

const application = new Application(Topic.APPLICATION_TOPIC);
const dialog = new Dialog(application, Topic.PRINT_TOPIC);
const button = new Button(dialog, Topic.PAPER_ORIENTATION_TOPIC);

button.HandleHelp();
