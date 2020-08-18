'use strict';

// Intent:
// Define the skeleton of an algorithm in an operation, deferring some steps to subclasses.
// Template Method lets subclasses redefine certain steps of an algorithm without changing the
// algorithm's structure.

// Related Patterns:
// Factory Methods are often called by template methods. In the Motivation example, the factory
// method DoCreateDocument is called by the template method OpenDocument.
// Strategy: Template methods use inheritance to vary part of an algorithm. Strategies use
// delegation to vary the entire algorithm.

function View () {
  function constructor () {

  }

  this.Display = function () {
    this.SetFocus();
    // View subclasses always override DoDisplay
    this.DoDisplay();
    this.ResetFocus();
  };
  
  // Subclasses override DoDisplay to add their specific drawing behavior
  this.DoDisplay = function () {};

  return constructor.apply(this, arguments);
}

function MyView () {

  View.apply(this, arguments);

  function constructor () {

  }

  this.DoDisplay = function () {
    // render the view's contents
  };

  return constructor.apply(this, arguments);
}
