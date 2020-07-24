'use strict';

// Intent:
// Without violating encapsulation, capture and externalize an object's internal state so that the
// object can be restored to this state later.

// Related patterns:
// Command: Commands can use mementos to maintain state for undoable operations.
// Iterator: Mementos can be used for iteration as described earlier.

// base class for graphical objects in the graphical editor
function Graphic () {}

function MoveCommand () {

  let _state; // ConstraintSolverMemento
  let _delta;
  let _target;

  function constructor (target, delta) {

  }

  this.Execute = function () {
    const solver = ConstraintSolver().Instance();
    _state = solver.CreateMemento();
    // create a memento
    _target.Move(_delta);
    solver.Solve();
  };

  this.Unexecute = function () {
    const solver = ConstraintSolver().Instance();
    _target.Move(_delta * -1);
    solver.SetMemento(_state);
    // restore solver state
    solver.Solve();
  };

  return constructor.apply(this, arguments);
}

function ConstraintSolver() {

  let _instance;

  function constructor() {

    this.Solve = function () {};
    this.AddConstraint = function (startConnection, endConnection) {};
    this.RemoveConstraint = function (startConnection, endConnection) {};
    this.SetMemento = function (memento) {};
  }

  this.Instance = function () {
    if (typeof _instance === 'undefined') {
      constructor.bind(_instance = {})();
    }

    return _instance;
  };
}

function ConstraintSolverMemento () {

}
