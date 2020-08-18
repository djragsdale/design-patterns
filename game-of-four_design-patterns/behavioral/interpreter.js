'use strict';

// Intent:
// Given a language, define a representation for its grammar along with an interpreter that uses
// the representation to interpret sentences in the language.

// Related Patterns:
// Composite: The abstract syntax tree is an instance of the Composite pattern.
// Flyweight shows how to share terminal symbols within the abstract syntax tree.
// Iterator: The interpreter can use an Iterator to traverse the structure.
// Visitor can be used to maintain the behavior in each node in the abstract syntax tree in one
// class.

function Context () {
  this.Lookup = function (char) {

  };

  this.Assign = function (expr, bool) {

  };
}

// Variablexp | Constant | OrExp | AndExp | NotExp
function BooleanExp () {

  function constructor () {

  }

  this.Evaluate = function (context) {

  };

  this.Replace = function (name, expr) {

  };

  this.Copy = function () {

  };

  return constructor.apply(this, arguments);
}

// BooleanExp 'and' BooleanExp
function AndExp () {

  BooleanExp.apply(this, arguments);

  let _operand0;
  let _operand1;

  function constructor (operand0, operand1) {
    _operand0 = op0;
    _operand1 = op1;
  }

  this.Evaluate = function (context) {
    return _operand0.Evaluate(context) && _operand1.Evaluate(context);
  };

  this.Replace = function (name, expr) {
    return new AndExp(_operand0.Replace(name, expr), _operand1.Replace(name, expr));
  };

  this.Copy = function () {
    return new AndExp(_operand0.Copy(), _operand1.Copy());
  };

  return constructor.apply(this, arguments);
}

// BooleanExp 'or' BooleanExp
function OrExp() {

  BooleanExp.apply(this, arguments);

  let _operand0;
  let _operand1;

  function constructor(operand0, operand1) {
    _operand0 = operand0;
    _operand1 = operand1;
  }

  this.Evaluate = function (context) {
    return _operand0.Evaluate(context) || _operand1.Evaluate(context);
  };

  this.Replace = function (name, expr) {

  };

  this.Copy = function () {

  };

  return constructor.apply(this, arguments);
}

// 'not BooleanExp
function NotExp() {

  BooleanExp.apply(this, arguments);

  function constructor(expr) {

  }

  this.Evaluate = function (context) {

  };

  this.Replace = function (name, expr) {

  };

  this.Copy = function () {

  };

  return constructor.apply(this, arguments);
}

// 'true' | 'false'
function Constant() {

  BooleanExp.apply(this, arguments);

}

// 'A' | 'B' | ... | 'X' | 'Y' | 'Z'
function VariableExp () {

  BooleanExp.apply(this, arguments);

  let _name;

  function constructor (name) {
    _name = name;
  }

  this.Evaluate = function (context) {
    return context.Lookup(_name);
  };

  this.Replace = function (name, expr) {
    if (name === _name) {
      return expr.Copy();
    } else {
      return new VariableExp(_name);
    }
  };

  this.Copy = function () {
    return new VariableExp(_name);
  };

  return constructor.apply(this, arguments);
}


let expression;
let context;

const x = new VariableExp('X');
const y = new VariableExp('Y');

expression = new OrExp(
  new AndExp(new Constant(true), x),
  new AndExp(y, new NotExp(x))
);

context.Assign(x, false);
context.Assign(y, true);

let result = expression.Evaluate(context);

const z = new VariableExp('Z');
const notZ = new NotExp(z);

const replacement = expression.Replace('Y', notZ);
context.Assign(z, true);

result = replacement.Evaluate(context);
