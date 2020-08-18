'use strict';

// Intent:
// Represent an operation to be performed on the elements of an object structure. Visitor lets you
// define a new operation without changing the classes of the element on which it operates.

const ListIterator = require('../foundation/ListIterator');

function Equipment () {

  let _name;

  function constructor (name) {
    _name = name;
  }

  this.Name = function () {
    return _name;
  };

  this.Power = function () { };
  this.NetPrice = function () { };
  this.DiscountPrice = function () { };

  this.Accept = function (visitor) { };

  return constructor.apply(this, arguments);
}

function EquipmentVisitor () {

  function constructor () {

  }

  this.VisitFloppyDisk = function (floppyDisk) { };
  this.VisitCard = function (card) { };
  this.VisitChassis = function (chassis) { };
  this.VisitBus = function (bus) { };

  return constructor.apply(this, arguments);
}

function FloppyDisk () {

  Equipment.apply(this, arguments);

  function constructor () {

  }

  this.Accept = function (visitor) {
    visitor.VisitFloppyDisk(this);
  };

  return constructor.apply(this, arguments);
}

function Chassis () {

  Equipment.apply(this, arguments);

  let _parts;

  function constructor (parts) {
    _parts = parts;
  }

  this.Accept = function (visitor) {
    for (let i = new ListIterator(_parts); !i.IsDone(); i.Next()) {
      i.CurrentItem().Accept(visitor);
    }

    visitor.VisitChassis(this);
  };

  return constructor.apply(this, arguments);
}

// Sublcasses of EquipmentVisitor define particular algorithms over the equipment structure. The
// PricingVisitor computes the cost of the equipment structure. It computes the net price of all
// simple equipment (e.g. floppies) and the discount price of all composite equipment (e.g. chassis
// and buses).
function PricingVisitor () {

  EquipmentVisitor.apply(this, arguments);

  let _total;

  function constructor () {

  }

  this.VisitFloppyDisk = function (floppyDisk) {
    _total += floppyDisk.NetPrice();
  };
  this.VisitCard = function (card) {
    _total += card.NetPrice();
  };
  this.VisitChassis = function (chassis) {
    _total += chassis.DiscountPrice();
  };
  this.VisitBus = function (bus) {
    _total += bus.DiscountPrice();
  };

  return constructor.apply(this, arguments);
}

// an Inventory class that defines an interface for adding equipment
// Note from djragsdale: I provided an implementation here so examples are more complete
function Inventory () {

  let _items;
  
  function constructor () {

  }

  this.Accumulate = function (equipment) {
    _items.push(equipment.Name());
  };

  return constructor.apply(this, arguments);
}

function InventoryVisitor () {

  EquipmentVisitor.apply(this, arguments);

  // an Inventory class that defines an interface for adding equipment
  let _inventory;

  function constructor () {

  }

  this.GetInventory = function () {
    return _inventory;
  };

  this.VisitFloppyDisk = function (floppyDisk) {
    _inventory.Accumulate(floppyDisk);
  };
  this.VisitCard = function (card) {
    _inventory.Accumulate(card);
  };
  this.VisitChassis = function (chassis) {
    _inventory.Accumulate(chassis);
  };
  this.VisitBus = function (bus) {
    _inventory.Accumulate(bus);
  };

  return constructor.apply(this, arguments);
}

const component = new Equipment('myComponent');
const visitor = new InventoryVisitor();

component.Accept(visitor);
console.log(`Inventory 
  ${component.Name()}
  ${visitor.GetInventory()}`);


// The following is an example of implementing the Smalltalk example from the interpreter pattern
// with the Visitor pattern. Like the previous example, this one is so small that Visitor probably
// won't buy as much, but it provides a good illustration of how to use the pattern. Further, it
// illustrates a situation in which iteration is the visitor's responsibility.
function ExpressionVisitor () {

  let _inputState;

  function constructor () {

  }

  this.VisitAlternation = function (alternateExp) {
    const originalState = _inputState;
    let finalState = alternateExp.alternative1.Accept(this);
    _inputState = originalState;
    finalState.AddAll(alternateExp.alternative2.Accept(this));
    return finalState;
  };

  this.VisitLiteral = function (literalExp) {
    let finalState = [];


    for (let i = new ListIterator(literalExp.components); !i.IsDone(); i.Next()) {
      finalState.Add(i.CurrentItem().Copy());
    }

    return finalState;
  };

  this.VisitRepeat = function (repeatExp) {
    let finalState = _inputState.Copy();
    while (!_inputState.IsEmpty()) {
      inputState = repeatExp.repetition.Accept(this);
      finalState.AddAll(_inputState);
    }

    return finalState;
  };

  this.VisitSequence = function (sequenceExp) {
    _inputState = sequenceExp.expression1.Accept(this);
    return sequenceExp.expression2.Accept(this);
  };

  return constructor.apply(this, arguments);
}

function SequenceExpression () {

  function constructor () {

  }

  this.Accept = function (visitor) {
    visitor.VisitSequence(this);
  };

  this.Copy = function () {};

  return constructor.apply(this, arguments);
}

function RepeatExpression () {

  function constructor () {

  }

  this.Accept = function (visitor) {
    visitor.VisitRepeat(this);
  };

  this.Copy = function () {};

  return constructor.apply(this, arguments);
}

function AlternationExpression () {

  function constructor () {

  }

  this.Accept = function (visitor) {
    visitor.VisitAlternation(this);
  };

  this.Copy = function () {};

  return constructor.apply(this, arguments);
}

function LiteralExpression () {

  function constructor () {

  }

  this.Accept = function (visitor) {
    visitor.VisitLiteral(this);
  };

  this.Copy = function () { };

  return constructor.apply(this, arguments);
}
